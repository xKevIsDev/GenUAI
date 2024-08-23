const fs = require('fs');
const path = require('path');

// Directory where your components are located
const componentsDir = './components'; // Adjust the path to your actual components directory
// Output file for index.ts
const outputFile = './index.ts';

// Function to convert a camelCase name to kebab-case
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Function to read all export constants from aceternity.ts and generate imports
function generateIndexFile() {
  const aceternityFile = '../aceternity.ts'; // Replace with the actual path to aceternity.ts

  // Read aceternity.ts content
  const aceternityContent = fs.readFileSync(aceternityFile, 'utf8');

  // Find all exported constants
  const exportRegex = /export\s+const\s+(\w+)\s*=/g;
  let match;
  let imports = [];
  let exportsArray = [];

  // Loop through each match to generate import statements
  while ((match = exportRegex.exec(aceternityContent)) !== null) {
    const componentName = match[1];
    const kebabName = toKebabCase(componentName);

    // Only import the main component export
    imports.push(`import { ${componentName} } from "./components/${kebabName}";`);
    exportsArray.push(`${componentName}`);
  }

  // Generate the index.ts content
  const indexContent = `${imports.join('\n')}\n\nconst shadcnDocs = [\n  ${exportsArray.join(',\n  ')}\n];\n\nexport default shadcnDocs;`;

  // Write to index.ts
  fs.writeFileSync(outputFile, indexContent, 'utf8');
  console.log(`index.ts has been created successfully.`);
}

// Run the script
generateIndexFile();