import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

interface PageParams {
  slug: string[];
}

// Updated to match NextJS requirements for params
interface PageProps {
  params: PageParams;
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
  // Use await to ensure params are properly handled
  await parent;
  
  // Make a copy of the slug array to avoid synchronous access
  const slugArray = [...params.slug];
  const slugPath = slugArray.join('/');
  
  let displayName = slugPath
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\//g, ' - ')
    .trim();
    
  // Capitalize first letter of each word
  displayName = displayName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${displayName} - Supernova Documentation`,
    description: `Documentation about ${displayName.toLowerCase()}`,
  };
}

// Convert markdown content to HTML
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Function to check if a file exists
function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath);
  } catch (_) {
    return false;
  }
}

// Generate static params for all markdown files (including nested ones)
export async function generateStaticParams() {
  // Check the nova-docs directory
  const docsDir = path.join(process.cwd(), 'docs/nova-docs');
  
  const params: { slug: string[] }[] = [];
  
  // Function to recursively find markdown files
  async function findMarkdownFilesRecursively(dir: string, basePath: string[] = []) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Add the directory itself as a parameter
          params.push({ slug: [...basePath, item] });
          
          // Recursively process subdirectories
          await findMarkdownFilesRecursively(
            itemPath,
            [...basePath, item]
          );
        } else if (item.endsWith('.md') && item !== 'README.md') {
          // Add markdown file to params (excluding README.md files)
          const slugParts = [...basePath];
          if (item !== 'index.md') {
            slugParts.push(item.replace('.md', ''));
          }
          params.push({ slug: slugParts });
        }
      }
    } catch (_) {
      console.error(`Error finding markdown files in ${dir}`);
    }
  }
  
  // Process the directory
  if (fileExists(docsDir)) {
    await findMarkdownFilesRecursively(docsDir);
  }
  
  // Add the overview parameter
  params.push({ slug: ['overview'] });
  
  return params;
}

// Generate breadcrumbs for navigation
function generateBreadcrumbs(slugArray: string[]) {
  const breadcrumbs = [
    { name: 'Documentation', path: '/docs' }
  ];
  
  let currentPath = '';
  
  for (let i = 0; i < slugArray.length; i++) {
    const part = slugArray[i];
    if (part === 'overview') {
      breadcrumbs.push({ name: 'Overview', path: '/docs/overview' });
    } else {
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      const displayName = part
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({ name: displayName, path: `/docs/${currentPath}` });
    }
  }
  
  return breadcrumbs;
}

// Get list of documents in a directory
async function getDirectoryContents(dirPath: string[]): Promise<{files: Array<{name: string; path: string; isDirectory: boolean}>, hasIndex: boolean}> {
  const basePath = path.join(process.cwd(), 'docs/nova-docs');
  const fullPath = path.join(basePath, ...dirPath);
  
  if (!fileExists(fullPath) || !fs.statSync(fullPath).isDirectory()) {
    return { files: [], hasIndex: false };
  }
  
  const items = fs.readdirSync(fullPath);
  let hasIndex = false;
  
  const files = items
    .filter(item => {
      // Check if this is an index file
      if (item === 'index.md') {
        hasIndex = true;
        return false;
      }
      // Filter out directories and non-markdown files
      const itemPath = path.join(fullPath, item);
      const isDir = fs.statSync(itemPath).isDirectory();
      return isDir || (item.endsWith('.md') && item !== 'README.md');
    })
    .map(item => {
      const itemPath = path.join(fullPath, item);
      const isDir = fs.statSync(itemPath).isDirectory();
      const displayName = item
        .replace('.md', '')
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        
      return {
        name: displayName,
        path: isDir ? [...dirPath, item].join('/') : [...dirPath, item.replace('.md', '')].join('/'),
        isDirectory: isDir
      };
    });
  
  // Sort: directories first, then alphabetically
  return { 
    files: files.sort((a, b) => {
      if (a.isDirectory && !b.isDirectory) return -1;
      if (!a.isDirectory && b.isDirectory) return 1;
      return a.name.localeCompare(b.name);
    }),
    hasIndex
  };
}

// Get document content for a given slug path
async function getDocumentContent(slugArray: string[]): Promise<string | null> {
  // Define path to check
  const basePath = path.join(process.cwd(), 'docs/nova-docs');
  
  // Handle special case for overview
  if (slugArray.length === 1 && slugArray[0] === 'overview') {
    // Check for overview in nova docs
    const overviewPath = path.join(basePath, 'overview/introduction.md');
    if (fileExists(overviewPath)) {
      return fs.readFileSync(overviewPath, 'utf8');
    }
    
    return null;
  }
  
  // Try direct path with .md extension
  const directPath = path.join(basePath, ...slugArray) + '.md';
  if (fileExists(directPath)) {
    return fs.readFileSync(directPath, 'utf8');
  }
  
  // Try as directory with index.md
  const indexPath = path.join(basePath, ...slugArray, 'index.md');
  if (fileExists(indexPath)) {
    return fs.readFileSync(indexPath, 'utf8');
  }
  
  // If it's a one-segment path, try checking for specific files in special locations
  if (slugArray.length === 1) {
    // Check for foundation.md in governance
    if (slugArray[0] === 'foundation') {
      const foundationPath = path.join(basePath, 'governance/foundation.md');
      if (fileExists(foundationPath)) {
        return fs.readFileSync(foundationPath, 'utf8');
      }
    }
    
    // Check for other special cases
    const specialPaths: {[key: string]: string} = {
      'tokenomics': 'governance/tokenomics.md',
      'consensus-rules': 'technical-docs/consensus-rules.md',
      'cryptography': 'technical-docs/cryptography.md',
      'security': 'technical-docs/security-mitigation.md',
      'installation': 'node-operation/installation-guide.md',
      'environmental': 'environmental/environmental-features.md'
    };
    
    if (slugArray[0] in specialPaths) {
      const specialPath = path.join(basePath, specialPaths[slugArray[0]]);
      if (fileExists(specialPath)) {
        return fs.readFileSync(specialPath, 'utf8');
      }
    }
  }
  
  // Recursive search as fallback
  // Recursively look through directories
  async function searchRecursively(dir: string, searchName: string): Promise<string | null> {
    try {
      if (!fileExists(dir)) return null;
      
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          const result = await searchRecursively(itemPath, searchName);
          if (result) return result;
        } else if (item === `${searchName}.md` || item.toLowerCase() === `${searchName.toLowerCase()}.md`) {
          return fs.readFileSync(itemPath, 'utf8');
        }
      }
    } catch (_) {
      console.error(`Error searching recursively in ${dir}`);
    }
    return null;
  }
  
  // Search for the last part of the slug
  const lastSegment = slugArray[slugArray.length - 1];
  const content = await searchRecursively(basePath, lastSegment);
  if (content) return content;
  
  return null;
}

// Add custom CSS for better table styling
const tableStyles = `
<style>
  .markdown-table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    overflow-x: auto;
    display: block;
  }
  .markdown-table table {
    width: 100%;
    border-collapse: collapse;
    background-color: #1F2937;
    border: 1px solid #374151;
    border-radius: 0.375rem;
  }
  .markdown-table th {
    background-color: #111827;
    color: #93C5FD;
    font-weight: 600;
    text-align: left;
    padding: 0.75rem 1rem;
    border: 1px solid #374151;
  }
  .markdown-table td {
    padding: 0.75rem 1rem;
    border: 1px solid #374151;
    color: #D1D5DB;
  }
  .markdown-table tr:nth-child(even) {
    background-color: #1a202c;
  }
  .markdown-table tr:hover {
    background-color: #172233;
  }
  .markdown-table tr {
    border-bottom: 1px solid #374151;
  }
</style>
`;

// Process HTML content to enhance table rendering
function enhanceHtmlContent(htmlContent: string): string {
  // Add custom table classes for better styling
  const enhancedHtml = htmlContent.replace(
    /<table>/g, 
    '<div class="markdown-table"><table>'
  ).replace(
    /<\/table>/g, 
    '</table></div>'
  );
  
  return tableStyles + enhancedHtml;
}

export default async function DocPage({ params }: PageProps) {
  // Make a copy of the params.slug array to avoid synchronous access
  const slugArray = [...params.slug];
  
  // Format display name from slug
  const slugPath = slugArray.join('/');
  let displayName = slugPath
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\//g, ' - ')
    .trim();
  
  // Capitalize first letter of each word
  displayName = displayName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs(slugArray);
  
  // Get content based on slug array
  const content = await getDocumentContent(slugArray);
  
  // Check if we're looking at a directory without an index.md
  let directoryFiles: Array<{name: string; path: string; isDirectory: boolean}> = [];
  let isDirectoryView = false;
  
  if (!content) {
    // Check if the slug refers to a directory
    const basePath = path.join(process.cwd(), 'docs/nova-docs');
    const dirPath = path.join(basePath, ...slugArray);
    
    if (fileExists(dirPath) && fs.statSync(dirPath).isDirectory()) {
      // It's a directory - get its contents
      const { files, hasIndex } = await getDirectoryContents(slugArray);
      
      // If there's an index.md, it would have been found already
      // If no index, show directory listing
      if (!hasIndex && files.length > 0) {
        directoryFiles = files;
        isDirectoryView = true;
      } else if (files.length === 0) {
        // Empty directory or doesn't exist
        notFound();
      }
    } else {
      // No content found and not a directory
      notFound();
    }
  }
  
  // Convert markdown to HTML if we have content
  let htmlContent = '';
  if (content) {
    const rawHtmlContent = await markdownToHtml(content);
    htmlContent = enhanceHtmlContent(rawHtmlContent);
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm text-gray-400">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-blue-400">{crumb.name}</span>
            ) : (
              <Link href={crumb.path} className="hover:text-blue-400 transition-colors">
                {crumb.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
      
      {/* Main content */}
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-700 pb-3">{displayName}</h1>
        
        {isDirectoryView ? (
          <>
            <p className="text-gray-300 mb-6">
              Browse documentation in the {displayName} section:
            </p>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {directoryFiles.map((file, index) => (
                <Link 
                  key={index}
                  href={`/docs/${file.path}`}
                  className="flex items-center p-4 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-lg transition-colors"
                >
                  <div className="mr-3 text-blue-400">
                    {file.isDirectory ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-300 hover:text-white">{file.name}</span>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <article 
            className="prose prose-invert max-w-none 
                      prose-headings:text-blue-300 prose-headings:border-b prose-headings:border-gray-800 prose-headings:pb-1 prose-headings:mb-4
                      prose-h2:text-2xl prose-h2:mt-8 prose-h2:font-semibold
                      prose-h3:text-xl prose-h3:mt-6 
                      prose-p:text-gray-300 prose-p:my-4 prose-p:leading-relaxed
                      prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-a:transition-colors
                      prose-code:text-pink-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                      prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 prose-pre:p-4 prose-pre:rounded
                      prose-strong:text-white prose-strong:font-semibold
                      prose-li:text-gray-300 prose-li:my-1
                      prose-table:border-collapse
                      prose-th:bg-gray-800 prose-th:text-blue-300 prose-th:p-2 prose-th:border prose-th:border-gray-700
                      prose-td:border prose-td:border-gray-700 prose-td:p-2
                      prose-hr:border-gray-700"
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        )}
        
        {/* Navigation footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex justify-between text-sm">
          <Link 
            href="/docs" 
            className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Documentation
          </Link>
          
          {!isDirectoryView && (
            <a 
              href={`https://github.com/mjohnson518/supernova/edit/main/docs/${slugPath}.md`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit this page on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 