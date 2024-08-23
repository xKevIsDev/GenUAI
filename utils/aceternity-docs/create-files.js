const fs = require('fs');
const path = require('path');

// Directory where the component files will be created
const componentsDir = path.join(__dirname, 'components');

// Array of import statements (just the names after './components/')
const imports = [
  "three-dcard",
  "three-dpin",
  "animated-modal",
  "animated-tooltip",
  "apple-cards-carousel",
  "aurora-background",
  "background-beams",
  "background-boxes",
  "background-gradient-animation",
  "background-gradient",
  "bento-grid",
  "canvas-reveal-effect",
  "card-hover-effect",
  "card-spotlight",
  "card-stack",
  "compare",
  "container-cover",
  "container-scroll-animation",
  "direction-aware-hover",
  "evervault-card",
  "generate-random-string",
  "file-upload",
  "flip-words",
  "floating-dock",
  "floating-navbar",
  "following-pointer",
  "glare-card",
  "globe",
  "glowing-stars",
  "google-gemini-effect",
  "grid",
  "hero-highlight",
  "hero-parallax",
  "hover-border-gradient",
  "images-slider",
  "infinite-moving-cards",
  "input",
  "label",
  "lamp",
  "layout-grid",
  "link-preview",
  "macbook-scroll",
  "meteors",
  "moving-border",
  "moving-line",
  "multi-step-loader",
  "navbar-menu",
  "parallax-scroll2",
  "parallax-scroll",
  "placeholders-and-vanish-input",
  "shooting-stars",
  "sidebar",
  "use-sidebar",
  "sparkles",
  "spotlight",
  "stars-background",
  "sticky-scroll-reveal",
  "svg-mask-effect",
  "tabs",
  "tailwindcss-buttons",
  "text-generate-effect",
  "text-reveal-card",
  "tracing-beam",
  "typewriter-effect",
  "vortex",
  "wavy-background",
  "wobble-card"
];

// Function to create individual files for each component
function createComponentFiles() {
  imports.forEach(importName => {
    const componentFilePath = path.join(componentsDir, `${importName}.tsx`);

    // Convert importName to a PascalCase name for the export
    const componentName = importName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    // Content for the individual component file
    const fileContent = `
export const name = "${componentName}";

export const importDocs = \`
import {
  ${componentName},
  ${componentName}Content,
  ${componentName}Item,
  ${componentName}Trigger,
} from "/components/ui/${importName}";
\`;

export const usageDocs = \`
<${componentName} type="single" collapsible>
  <${componentName}Item value="item-1">
    <${componentName}Trigger>Is it accessible?</${componentName}Trigger>
    <${componentName}Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </${componentName}Content>
  </${componentName}Item>
</${componentName}>
\`;
`;

    // Write content to the file
    fs.writeFileSync(componentFilePath, fileContent.trim(), 'utf8');
    console.log(`Created file: ${componentFilePath}`);
  });
}

// Execute the script
createComponentFiles();