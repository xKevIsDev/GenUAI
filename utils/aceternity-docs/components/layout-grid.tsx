export const name = "LayoutGrid";

export const importDocs = `
import {
  LayoutGrid,
  LayoutGridContent,
  LayoutGridItem,
  LayoutGridTrigger,
} from "/components/ui/layout-grid";
`;

export const usageDocs = `
<LayoutGrid type="single" collapsible>
  <LayoutGridItem value="item-1">
    <LayoutGridTrigger>Is it accessible?</LayoutGridTrigger>
    <LayoutGridContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </LayoutGridContent>
  </LayoutGridItem>
</LayoutGrid>
`;