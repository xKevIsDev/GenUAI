export const name = "BackgroundGradient";

export const importDocs = `
import {
  BackgroundGradient,
  BackgroundGradientContent,
  BackgroundGradientItem,
  BackgroundGradientTrigger,
} from "/components/ui/background-gradient";
`;

export const usageDocs = `
<BackgroundGradient type="single" collapsible>
  <BackgroundGradientItem value="item-1">
    <BackgroundGradientTrigger>Is it accessible?</BackgroundGradientTrigger>
    <BackgroundGradientContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </BackgroundGradientContent>
  </BackgroundGradientItem>
</BackgroundGradient>
`;