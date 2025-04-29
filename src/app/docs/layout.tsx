import { ReactNode } from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Function to get documentation files from the docs folder
function getDocumentationFiles() {
  const docsDir = path.join(process.cwd(), 'docs/supernova-docs/docs');
  
  try {
    // Read the docs directory to get all markdown files
    const items = fs.readdirSync(docsDir);
    
    // Filter out directories
    const markdownFiles = items.filter(item => {
      const itemPath = path.join(docsDir, item);
      return fs.statSync(itemPath).isFile() && item.endsWith('.md');
    });
    
    return markdownFiles;
  } catch (error) {
    console.error('Error reading docs directory:', error);
    return [];
  }
}

export default function DocsLayout({ children }: { children: ReactNode }) {
  const docFiles = getDocumentationFiles();
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Documentation</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/docs"
                className="block p-2 hover:bg-gray-200 rounded"
              >
                Overview
              </Link>
            </li>
            
            {docFiles.map((file, index) => {
              const name = file.replace('.md', '');
              const displayName = name.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
              
              return (
                <li key={index}>
                  <Link 
                    href={`/docs/${name}`}
                    className="block p-2 hover:bg-gray-200 rounded"
                  >
                    {displayName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-4 md:p-8">
        {children}
      </div>
    </div>
  );
} 