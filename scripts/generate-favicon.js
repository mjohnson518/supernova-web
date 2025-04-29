// Script to convert SVG favicon to ICO using Sharp
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SVG_PATH = path.join(__dirname, '../public/favicon.svg');
const ICO_PATH = path.join(__dirname, '../public/favicon.ico');

async function generateFavicon() {
  try {
    console.log('Reading SVG file...');
    const svgBuffer = fs.readFileSync(SVG_PATH);
    
    console.log('Converting SVG to ICO...');
    // Convert to PNG at different sizes for favicon
    const pngBuffer = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
      
    // Write as ICO
    await sharp(pngBuffer)
      .toFile(ICO_PATH);
      
    console.log('Favicon generated successfully at', ICO_PATH);
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 