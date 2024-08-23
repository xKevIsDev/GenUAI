export const name = "HoverBorderGradient";

export const importDocs = `
import {
  HoverBorderGradient,
  HoverBorderGradientContent,
  HoverBorderGradientItem,
  HoverBorderGradientTrigger,
} from "/components/ui/hover-border-gradient";
`;

export const usageDocs = `
<HoverBorderGradient type="single" collapsible>
  <HoverBorderGradientItem value="item-1">
    <HoverBorderGradientTrigger>Is it accessible?</HoverBorderGradientTrigger>
    <HoverBorderGradientContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </HoverBorderGradientContent>
  </HoverBorderGradientItem>
</HoverBorderGradient>
`;