import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Supernova Documentation',
  description: 'Official documentation for the Supernova PoW Chain',
};

// Function to get documentation categories from the docs folder
async function getDocumentationCategories() {
  const docsDir = path.join(process.cwd(), 'docs/supernova-docs/docs');
  
  // Read the docs directory to get all markdown files
  const items = fs.readdirSync(docsDir);
  
  // Filter out directories
  const markdownFiles = items.filter(item => {
    const itemPath = path.join(docsDir, item);
    return fs.statSync(itemPath).isFile() && item.endsWith('.md');
  });
  
  return markdownFiles;
}

export default async function DocsPage() {
  const categories = await getDocumentationCategories();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Supernova Documentation</h1>
      
      <p className="text-lg mb-8">
        Welcome to the official Supernova documentation. This guide provides comprehensive 
        information about Supernova, a Proof of Work chain written in Rust.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((file, index) => {
          const name = file.replace('.md', '');
          const displayName = name.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
          
          return (
            <div key={index} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{displayName}</h2>
              <p className="text-gray-600 mb-4">
                Documentation about {displayName.toLowerCase()}
              </p>
              <Link 
                href={`/docs/${name}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Documentation →
              </Link>
            </div>
          );
        })}
        
        <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <p className="text-gray-600 mb-4">
            Get a comprehensive overview of the Supernova project
          </p>
          <Link 
            href="/docs/overview"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Overview →
          </Link>
        </div>
      </div>
    </div>
  );
} 