export const name = "MovingLine";

export const importDocs = `
import {
  MovingLine,
  MovingLineContent,
  MovingLineItem,
  MovingLineTrigger,
} from "/components/ui/moving-line";
`;

export const usageDocs = `
<MovingLine type="single" collapsible>
  <MovingLineItem value="item-1">
    <MovingLineTrigger>Is it accessible?</MovingLineTrigger>
    <MovingLineContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </MovingLineContent>
  </MovingLineItem>
</MovingLine>
`;