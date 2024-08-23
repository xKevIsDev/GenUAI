export const name = "MacbookScroll";

export const importDocs = `
import {
  MacbookScroll,
  MacbookScrollContent,
  MacbookScrollItem,
  MacbookScrollTrigger,
} from "/components/ui/macbook-scroll";
`;

export const usageDocs = `
<MacbookScroll type="single" collapsible>
  <MacbookScrollItem value="item-1">
    <MacbookScrollTrigger>Is it accessible?</MacbookScrollTrigger>
    <MacbookScrollContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </MacbookScrollContent>
  </MacbookScrollItem>
</MacbookScroll>
`;