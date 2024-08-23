export const name = "BackgroundGradientAnimation";

export const importDocs = `
import {
  BackgroundGradientAnimation,
  BackgroundGradientAnimationContent,
  BackgroundGradientAnimationItem,
  BackgroundGradientAnimationTrigger,
} from "/components/ui/background-gradient-animation";
`;

export const usageDocs = `
<BackgroundGradientAnimation type="single" collapsible>
  <BackgroundGradientAnimationItem value="item-1">
    <BackgroundGradientAnimationTrigger>Is it accessible?</BackgroundGradientAnimationTrigger>
    <BackgroundGradientAnimationContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </BackgroundGradientAnimationContent>
  </BackgroundGradientAnimationItem>
</BackgroundGradientAnimation>
`;