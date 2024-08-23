export const name = "StickyScrollReveal";

export const importDocs = `
import {
  StickyScrollReveal,
  StickyScrollRevealContent,
  StickyScrollRevealItem,
  StickyScrollRevealTrigger,
} from "/components/ui/sticky-scroll-reveal";
`;

export const usageDocs = `
<StickyScrollReveal type="single" collapsible>
  <StickyScrollRevealItem value="item-1">
    <StickyScrollRevealTrigger>Is it accessible?</StickyScrollRevealTrigger>
    <StickyScrollRevealContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </StickyScrollRevealContent>
  </StickyScrollRevealItem>
</StickyScrollReveal>
`;