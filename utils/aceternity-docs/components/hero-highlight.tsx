export const name = "HeroHighlight";

export const importDocs = `
import {
  HeroHighlight,
  HeroHighlightContent,
  HeroHighlightItem,
  HeroHighlightTrigger,
} from "/components/ui/hero-highlight";
`;

export const usageDocs = `
<HeroHighlight type="single" collapsible>
  <HeroHighlightItem value="item-1">
    <HeroHighlightTrigger>Is it accessible?</HeroHighlightTrigger>
    <HeroHighlightContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </HeroHighlightContent>
  </HeroHighlightItem>
</HeroHighlight>
`;