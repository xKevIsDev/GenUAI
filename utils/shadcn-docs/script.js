const fs = require('fs');
const path = require('path');

// Read the components file
const componentsFile = fs.readFileSync('index2.ts', 'utf8');

// Split the file content into individual component blocks
const componentBlocks = componentsFile.split(/export const name = /g).slice(1);

// Function to extract component information
function extractComponentInfo(block) {
    const nameMatch = block.match(/"([^"]+)"/);
    const importDocsMatch = block.match(/export const importDocs = `([\s\S]*?)`;/);
    const usageDocsMatch = block.match(/export const usageDocs = `([\s\S]*?)`;/);

    return {
        name: nameMatch ? nameMatch[1] : '',
        importDocs: importDocsMatch ? importDocsMatch[1].trim() : '',
        usageDocs: usageDocsMatch ? usageDocsMatch[1].trim() : ''
    };
}

// Create output directory if it doesn't exist
const outputDir = 'components';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Process each component block
componentBlocks.forEach(block => {
    const componentInfo = extractComponentInfo(block);
    
    if (componentInfo.name) {
        const fileName = `${componentInfo.name.toLowerCase().replace(/\s+/g, '-')}.tsx`;
        const filePath = path.join(outputDir, fileName);
        
        const fileContent = `export const name = "${componentInfo.name}";

export const importDocs = \`
${componentInfo.importDocs}
\`;

export const usageDocs = \`
${componentInfo.usageDocs}
\`;
`;

        fs.writeFileSync(filePath, fileContent);
        console.log(`Created file: ${filePath}`);
    }
});

console.log('All component files have been created.');