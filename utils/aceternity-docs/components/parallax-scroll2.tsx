export const name = "ParallaxScroll2";

export const importDocs = `
import {
  ParallaxScroll2,
  ParallaxScroll2Content,
  ParallaxScroll2Item,
  ParallaxScroll2Trigger,
} from "/components/ui/parallax-scroll2";
`;

export const usageDocs = `
<ParallaxScroll2 type="single" collapsible>
  <ParallaxScroll2Item value="item-1">
    <ParallaxScroll2Trigger>Is it accessible?</ParallaxScroll2Trigger>
    <ParallaxScroll2Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </ParallaxScroll2Content>
  </ParallaxScroll2Item>
</ParallaxScroll2>
`;