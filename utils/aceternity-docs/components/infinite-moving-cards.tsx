export const name = "InfiniteMovingCards";

export const importDocs = `
import {
  InfiniteMovingCards,
  InfiniteMovingCardsContent,
  InfiniteMovingCardsItem,
  InfiniteMovingCardsTrigger,
} from "/components/ui/infinite-moving-cards";
`;

export const usageDocs = `
<InfiniteMovingCards type="single" collapsible>
  <InfiniteMovingCardsItem value="item-1">
    <InfiniteMovingCardsTrigger>Is it accessible?</InfiniteMovingCardsTrigger>
    <InfiniteMovingCardsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </InfiniteMovingCardsContent>
  </InfiniteMovingCardsItem>
</InfiniteMovingCards>
`;