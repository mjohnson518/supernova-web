import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Supernova Documentation',
  description: 'Official documentation for the Supernova PoW Chain',
};

// Function to check if a file exists
function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath);
  } catch (_) {
    return false;
  }
}

// Function to get documentation categories from the restructured docs folder
async function getDocumentationCategories() {
  // Check the nova-docs directory
  const novaDocsDir = path.join(process.cwd(), 'docs/nova-docs');
  
  interface DocCategory {
    title: string;
    path: string;
    description: string;
    priority: number;  // Lower number = higher priority
    highlight?: boolean;
  }
  
  const categories: DocCategory[] = [];
  
  // Define our preferred categories in the new structure
  const primaryCategories = [
    {
      title: 'Project Overview',
      description: 'Introduction to Supernova, its purpose, and architecture',
      path: '/docs/overview',
      directory: 'overview',
      priority: 1
    },
    {
      title: 'Roadmap',
      description: 'Our ambitious development timeline for security, scalability, and sustainability',
      path: '/docs/overview/roadmap',
      directory: 'overview',
      priority: 2,
      highlight: true
    },
    {
      title: 'Technical Documentation',
      description: 'Technical specifications and implementation details',
      path: '/docs/technical-docs',
      directory: 'technical-docs',
      priority: 3
    },
    {
      title: 'Developer Guide',
      description: 'Resources and guides for developers building on the Supernova platform',
      path: '/docs/developers',
      directory: 'developers',
      priority: 4
    },
    {
      title: 'Node Operation',
      description: 'Instructions for running and maintaining Supernova nodes',
      path: '/docs/node-operation',
      directory: 'node-operation',
      priority: 5
    },
    {
      title: 'Environmental Features',
      description: 'Documentation about Supernova\'s carbon-negative approach and environmental initiatives',
      path: '/docs/environmental',
      directory: 'environmental',
      priority: 6
    },
    {
      title: 'Governance',
      description: 'Information about the Supernova Foundation, tokenomics, and governance processes',
      path: '/docs/governance',
      directory: 'governance',
      priority: 7
    },
    {
      title: 'API Reference',
      description: 'Comprehensive API documentation for integrating with Supernova',
      path: '/docs/api-reference',
      directory: 'api-reference',
      priority: 8
    },
    {
      title: 'Core Reference',
      description: 'Documentation for the core components of the Supernova blockchain',
      path: '/docs/core',
      directory: 'core',
      priority: 9
    }
  ];
  
  // Add categories from nova-docs if they exist
  if (fileExists(novaDocsDir)) {
    for (const category of primaryCategories) {
      const categoryDir = path.join(novaDocsDir, category.directory);
      if (fileExists(categoryDir)) {
        categories.push({
          title: category.title,
          path: category.path,
          description: category.description,
          priority: category.priority,
          highlight: category.highlight
        });
      }
    }
    
    // If no primary categories were found, try to get directories from nova-docs
    if (categories.length === 0) {
      try {
        const items = fs.readdirSync(novaDocsDir);
        
        for (const item of items) {
          // Skip hidden files and git directory
          if (item.startsWith('.') || item === '.git') continue;
          
          const itemPath = path.join(novaDocsDir, item);
          const stat = fs.statSync(itemPath);
          
          // Add directories as categories
          if (stat.isDirectory()) {
            categories.push({
              title: item
                .replace(/_/g, ' ')
                .replace(/([A-Z])/g, ' $1')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
              path: item.toLowerCase(),
              description: `Documentation about ${item.toLowerCase()}`,
              priority: 100 // Lower priority than our primary categories
            });
          }
        }
      } catch (_) {
        console.error('Error reading docs directory');
      }
    }
  }
  
  // Sort by priority
  return categories.sort((a, b) => a.priority - b.priority);
}

export default async function DocsPage() {
  const categories = await getDocumentationCategories();
  
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="mb-12 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Supernova Documentation</h1>
        
        <p className="text-lg mb-6 text-gray-300">
          Welcome to the official Supernova documentation. This guide provides comprehensive 
          information about Supernova, a Proof of Work chain written in Rust with a focus on 
          quantum resistance and environmental sustainability.
        </p>
        
        <Link 
          href="/docs/overview"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
        >
          Get Started with Supernova
        </Link>
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-2">Documentation Categories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const isHighlighted = category.highlight;
          
          return (
            <div 
              key={index} 
              className={`${isHighlighted ? 'bg-gradient-to-br from-gray-800 to-blue-900 border-blue-700' : 'bg-gray-800 border-gray-700'} shadow rounded-lg p-6 hover:shadow-lg transition-shadow border`}
            >
              {isHighlighted && (
                <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-3">
                  New
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{category.title}</h3>
              <p className="text-gray-300 mb-4">
                {category.description}
              </p>
              <Link 
                href={category.path}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center group"
              >
                View Documentation 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 p-6 bg-gradient-to-br from-gray-800 to-blue-900 shadow rounded-lg border border-blue-700">
        <h2 className="text-xl font-semibold mb-4 text-white">Need More Help?</h2>
        <p className="text-gray-300 mb-6">
          Can&apos;t find what you&apos;re looking for in the documentation? Reach out to the Supernova community for assistance.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/mjohnson518/supernova" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub Repository
          </a>
          <a 
            href="https://discord.gg/7WcHAnRT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded flex items-center transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Discord Community
          </a>
        </div>
      </div>
    </div>
  );
} 