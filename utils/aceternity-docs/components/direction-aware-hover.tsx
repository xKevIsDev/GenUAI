export const name = "DirectionAwareHover";

export const importDocs = `
import {
  DirectionAwareHover,
  DirectionAwareHoverContent,
  DirectionAwareHoverItem,
  DirectionAwareHoverTrigger,
} from "/components/ui/direction-aware-hover";
`;

export const usageDocs = `
<DirectionAwareHover type="single" collapsible>
  <DirectionAwareHoverItem value="item-1">
    <DirectionAwareHoverTrigger>Is it accessible?</DirectionAwareHoverTrigger>
    <DirectionAwareHoverContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </DirectionAwareHoverContent>
  </DirectionAwareHoverItem>
</DirectionAwareHover>
`;