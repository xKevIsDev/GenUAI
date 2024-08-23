export const name = "BentoGrid";

export const importDocs = `
import {
  BentoGrid,
  BentoGridContent,
  BentoGridItem,
  BentoGridTrigger,
} from "/components/ui/bento-grid";
`;

export const usageDocs = `
<BentoGrid type="single" collapsible>
  <BentoGridItem value="item-1">
    <BentoGridTrigger>Is it accessible?</BentoGridTrigger>
    <BentoGridContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </BentoGridContent>
  </BentoGridItem>
</BentoGrid>
`;