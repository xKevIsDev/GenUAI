export const name = "WobbleCard";

export const importDocs = `
import {
  WobbleCard,
  WobbleCardContent,
  WobbleCardItem,
  WobbleCardTrigger,
} from "/components/ui/wobble-card";
`;

export const usageDocs = `
<WobbleCard type="single" collapsible>
  <WobbleCardItem value="item-1">
    <WobbleCardTrigger>Is it accessible?</WobbleCardTrigger>
    <WobbleCardContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </WobbleCardContent>
  </WobbleCardItem>
</WobbleCard>
`;