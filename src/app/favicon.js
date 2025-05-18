// This file helps with browser favicon caching issues
export const runtime = 'edge';

export async function GET() {
  const response = await fetch(new URL('/favicon.ico', import.meta.url));
  const favicon = await response.arrayBuffer();
  
  return new Response(favicon, {
    headers: {
      'Content-Type': 'image/x-icon',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
} 