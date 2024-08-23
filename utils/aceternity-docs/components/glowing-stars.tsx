export const name = "GlowingStars";

export const importDocs = `
import {
  GlowingStars,
  GlowingStarsContent,
  GlowingStarsItem,
  GlowingStarsTrigger,
} from "/components/ui/glowing-stars";
`;

export const usageDocs = `
<GlowingStars type="single" collapsible>
  <GlowingStarsItem value="item-1">
    <GlowingStarsTrigger>Is it accessible?</GlowingStarsTrigger>
    <GlowingStarsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </GlowingStarsContent>
  </GlowingStarsItem>
</GlowingStars>
`;