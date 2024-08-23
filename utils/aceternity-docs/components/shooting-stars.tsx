export const name = "ShootingStars";

export const importDocs = `
import {
  ShootingStars,
  ShootingStarsContent,
  ShootingStarsItem,
  ShootingStarsTrigger,
} from "/components/ui/shooting-stars";
`;

export const usageDocs = `
<ShootingStars type="single" collapsible>
  <ShootingStarsItem value="item-1">
    <ShootingStarsTrigger>Is it accessible?</ShootingStarsTrigger>
    <ShootingStarsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </ShootingStarsContent>
  </ShootingStarsItem>
</ShootingStars>
`;