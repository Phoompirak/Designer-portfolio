// app/api/designer-images/route.ts
import { readdir } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'designer');
    const files = await readdir(imagesDirectory);
    
    // Filter for image files only
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    
    const images = imageFiles.map(file => ({
      file,
      width: 0,
      height: 0
    }));
    
    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading image directory:", error);
    return NextResponse.json({ 
      error: "Failed to read images directory",
      images: [] 
    }, { status: 500 });
  }
}