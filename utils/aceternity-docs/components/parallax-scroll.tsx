export const name = "ParallaxScroll";

export const importDocs = `
import {
  ParallaxScroll,
  ParallaxScrollContent,
  ParallaxScrollItem,
  ParallaxScrollTrigger,
} from "/components/ui/parallax-scroll";
`;

export const usageDocs = `
<ParallaxScroll type="single" collapsible>
  <ParallaxScrollItem value="item-1">
    <ParallaxScrollTrigger>Is it accessible?</ParallaxScrollTrigger>
    <ParallaxScrollContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </ParallaxScrollContent>
  </ParallaxScrollItem>
</ParallaxScroll>
`;