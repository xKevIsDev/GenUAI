export const name = "MovingBorder";

export const importDocs = `
import {
  MovingBorder,
  MovingBorderContent,
  MovingBorderItem,
  MovingBorderTrigger,
} from "/components/ui/moving-border";
`;

export const usageDocs = `
<MovingBorder type="single" collapsible>
  <MovingBorderItem value="item-1">
    <MovingBorderTrigger>Is it accessible?</MovingBorderTrigger>
    <MovingBorderContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </MovingBorderContent>
  </MovingBorderItem>
</MovingBorder>
`;