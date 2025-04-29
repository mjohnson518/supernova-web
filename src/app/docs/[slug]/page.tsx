import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { remark } from 'remark';
import html from 'remark-html';

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const displayName = params.slug
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .trim();
  
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

// Generate static params for all markdown files
export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), 'docs/supernova-docs/docs');
  
  try {
    const items = fs.readdirSync(docsDir);
    
    // Filter out directories and get only markdown files
    const markdownFiles = items.filter(item => {
      const itemPath = path.join(docsDir, item);
      return fs.statSync(itemPath).isFile() && item.endsWith('.md');
    });
    
    return markdownFiles.map(file => ({
      slug: file.replace('.md', ''),
    }));
  } catch (error) {
    console.error('Error reading docs directory:', error);
    return [];
  }
}

// Handle special case for overview
async function getContentForSlug(slug: string) {
  let filePath;
  
  if (slug === 'overview') {
    // Get content from the SuperNova Overview.md file in the root
    filePath = path.join(process.cwd(), 'docs/supernova-docs/SuperNova Overview.md');
  } else {
    // Look for the file in the docs directory
    filePath = path.join(process.cwd(), 'docs/supernova-docs/docs', `${slug}.md`);
  }
  
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error reading file for slug ${slug}:`, error);
    return null;
  }
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const content = await getContentForSlug(params.slug);
  
  if (!content) {
    notFound();
  }
  
  const htmlContent = await markdownToHtml(content);
  const displayName = params.slug
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .trim();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{displayName}</h1>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    </div>
  );
} 