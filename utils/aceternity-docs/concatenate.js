const fs = require('fs');
const path = require('path');

const inputDir = '../../components/ui'; // Replace with your directory containing the .ts and .tsx files
const outputFile = '../aceternity.ts'; // Output file

// Function to read all .ts and .tsx files in the directory
function getTsFiles(dir, files) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getTsFiles(fullPath, files);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
}

// Function to convert a hyphenated filename to camelCase
function toCamelCase(fileName) {
  return fileName.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());
}

// Function to create a formatted string for each file
function formatFileContent(filePath) {
  let fileName = path.basename(filePath, path.extname(filePath));
  
  // Convert fileName to camelCase
  fileName = toCamelCase(fileName);

  // Read the content of the file
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Escape all backticks in the content
  content = content.replace(/`/g, '\\`');
  
  return `export const ${fileName} = \`\n${content}\n\`;\n`;
}

// Main function to combine all files
function concatenateFiles() {
  let files = [];
  getTsFiles(inputDir, files);

  let outputContent = '';
  files.forEach((file) => {
    outputContent += formatFileContent(file);
  });

  fs.writeFileSync(outputFile, outputContent, 'utf8');
  console.log(`Files have been concatenated into ${outputFile}`);
}

// Run the concatenation
concatenateFiles();