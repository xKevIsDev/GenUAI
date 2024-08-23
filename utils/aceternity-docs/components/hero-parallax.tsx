export const name = "HeroParallax";

export const importDocs = `
import {
  HeroParallax,
  HeroParallaxContent,
  HeroParallaxItem,
  HeroParallaxTrigger,
} from "/components/ui/hero-parallax";
`;

export const usageDocs = `
<HeroParallax type="single" collapsible>
  <HeroParallaxItem value="item-1">
    <HeroParallaxTrigger>Is it accessible?</HeroParallaxTrigger>
    <HeroParallaxContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </HeroParallaxContent>
  </HeroParallaxItem>
</HeroParallax>
`;