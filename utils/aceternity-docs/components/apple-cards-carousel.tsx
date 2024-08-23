export const name = "AppleCardsCarousel";

export const importDocs = `
import {
  AppleCardsCarousel,
  AppleCardsCarouselContent,
  AppleCardsCarouselItem,
  AppleCardsCarouselTrigger,
} from "/components/ui/apple-cards-carousel";
`;

export const usageDocs = `
<AppleCardsCarousel type="single" collapsible>
  <AppleCardsCarouselItem value="item-1">
    <AppleCardsCarouselTrigger>Is it accessible?</AppleCardsCarouselTrigger>
    <AppleCardsCarouselContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AppleCardsCarouselContent>
  </AppleCardsCarouselItem>
</AppleCardsCarousel>
`;