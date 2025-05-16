import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// This tells Next.js to make this route statically generated
export const dynamic = 'force-static';

export async function GET() {
  try {
    const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico.bak');
    const data = fs.readFileSync(faviconPath);
    
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'image/x-icon',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return new NextResponse(null, { status: 500 });
  }
} 