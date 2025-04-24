const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Get all component SCSS files
async function findScssFiles(dir) {
  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  const scssFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      const nestedFiles = await findScssFiles(filePath);
      scssFiles.push(...nestedFiles);
    } else if (file.name.endsWith('.scss')) {
      scssFiles.push(filePath);
    }
  }

  return scssFiles;
}

// Fix imports in a file
async function fixImportsInFile(filePath) {
  try {
    const content = await readFileAsync(filePath, 'utf8');
    
    // If the file doesn't have an import statement, skip it
    if (!content.includes('@import')) {
      return false;
    }

    // Replace @/styles/themes/theme with ../styles/themes/theme.scss
    const updatedContent = content.replace(/@import ['"]@\/styles\/themes\/theme['"];/g, `@import '../styles/themes/theme.scss';`);
    
    // Write the updated content back to the file
    if (content !== updatedContent) {
      await writeFileAsync(filePath, updatedContent, 'utf8');
      console.log(`Updated imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return false;
  }
}

// Main function
async function main() {
  try {
    // Get all scss files from the components directory
    const componentScssFiles = await findScssFiles('./components');
    
    // Fix imports in each file
    let updatedFilesCount = 0;
    for (const file of componentScssFiles) {
      const updated = await fixImportsInFile(file);
      if (updated) {
        updatedFilesCount++;
      }
    }
    
    console.log(`Updated ${updatedFilesCount} files.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 