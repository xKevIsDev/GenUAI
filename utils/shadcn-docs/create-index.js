const fs = require('fs');
const path = require('path');

// Directory containing the component files
const componentsDir = 'components';

// Read all files in the components directory
fs.readdir(componentsDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter for .ts files and create import statements
    const importStatements = files
        .filter(file => file.endsWith('.tsx'))
        .map(file => {
            const componentName = path.basename(file, '.tsx')
                .split('-')
                .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                .join('');
            return `import * as ${componentName} from "./${path.basename(file, '.tsx')}";`;
        });

    // Create the content for index.tsx
    const indexContent = importStatements.join('\n') + '\n\nexport {\n' +
        importStatements.map(stmt => stmt.match(/import \* as (\w+)/)[1]).join(',\n') +
        '\n};\n';

    // Write the index.tsx file
    fs.writeFile(path.join(componentsDir, 'index.ts'), indexContent, err => {
        if (err) {
            console.error('Error writing index.tsx:', err);
        } else {
            console.log('Successfully created index.tsx');
        }
    });
});