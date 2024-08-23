export const name = "BackgroundBoxes";

export const importDocs = `
import {
  BackgroundBoxes,
  BackgroundBoxesContent,
  BackgroundBoxesItem,
  BackgroundBoxesTrigger,
} from "/components/ui/background-boxes";
`;

export const usageDocs = `
<BackgroundBoxes type="single" collapsible>
  <BackgroundBoxesItem value="item-1">
    <BackgroundBoxesTrigger>Is it accessible?</BackgroundBoxesTrigger>
    <BackgroundBoxesContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </BackgroundBoxesContent>
  </BackgroundBoxesItem>
</BackgroundBoxes>
`;