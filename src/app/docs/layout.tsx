import { ReactNode } from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Define document category with nested structure
interface DocItem {
  name: string;
  path: string;
  isDirectory: boolean;
  items?: DocItem[];
}

// Function to recursively get documentation structure
function getDocumentationStructure(dir: string, basePath: string = ''): DocItem[] {
  try {
    const items = fs.readdirSync(dir);
    
    // Sort items to put directories first, then files alphabetically
    return items
      .filter(item => !item.startsWith('.') && item !== 'README.md') // Filter out hidden files and README
      .map(item => {
        const itemPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const isDirectory = fs.statSync(itemPath).isDirectory();
        
        if (isDirectory) {
          // It's a directory, recursively get its structure
          return {
            name: item,
            path: relativePath,
            isDirectory: true,
            items: getDocumentationStructure(itemPath, relativePath)
          };
        } else if (item.endsWith('.md')) {
          // It's a markdown file
          return {
            name: item.replace('.md', ''),
            path: relativePath.replace('.md', ''),
            isDirectory: false
          };
        }
        return null;
      })
      .filter(Boolean) as DocItem[]; // Filter out nulls
  } catch (error) {
    console.error(`Error reading docs directory ${dir}:`, error);
    return [];
  }
}

// Function to render a documentation item
function DocNavItem({ item, level = 0 }: { item: DocItem; level?: number }) {
  // Format display name
  const displayName = item.name
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  if (item.isDirectory) {
    return (
      <li className="mb-2">
        <div className={`font-semibold text-blue-400 mb-1 ${level > 0 ? 'mt-2' : ''}`}>
          {displayName}
        </div>
        <ul className={`space-y-1 ml-${level > 0 ? 4 : 2}`}>
          {item.items?.map((subItem, index) => (
            <DocNavItem key={index} item={subItem} level={level + 1} />
          ))}
        </ul>
      </li>
    );
  }
  
  return (
    <li>
      <Link 
        href={`/docs/${item.path}`}
        className="block p-2 hover:bg-gray-800 rounded text-gray-300 hover:text-white transition-colors"
      >
        {displayName}
      </Link>
    </li>
  );
}

export default function DocsLayout({ children }: { children: ReactNode }) {
  const docStructure = getDocumentationStructure(
    path.join(process.cwd(), 'docs/nova-docs')
  );
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-72 bg-gray-900 border-r border-gray-800 p-4 md:min-h-screen overflow-y-auto">
        <Link href="/docs" className="block mb-6">
          <h2 className="text-xl font-bold text-blue-400">Documentation</h2>
        </Link>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/docs"
                className="block p-2 hover:bg-gray-800 rounded text-gray-300 hover:text-white transition-colors"
              >
                Overview
              </Link>
            </li>
            
            {docStructure.map((item, index) => (
              <DocNavItem key={index} item={item} />
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  );
} 