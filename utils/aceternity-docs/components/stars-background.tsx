export const name = "StarsBackground";

export const importDocs = `
import {
  StarsBackground,
  StarsBackgroundContent,
  StarsBackgroundItem,
  StarsBackgroundTrigger,
} from "/components/ui/stars-background";
`;

export const usageDocs = `
<StarsBackground type="single" collapsible>
  <StarsBackgroundItem value="item-1">
    <StarsBackgroundTrigger>Is it accessible?</StarsBackgroundTrigger>
    <StarsBackgroundContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </StarsBackgroundContent>
  </StarsBackgroundItem>
</StarsBackground>
`;