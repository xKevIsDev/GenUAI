export const name = "CanvasRevealEffect";

export const importDocs = `
import {
  CanvasRevealEffect,
  CanvasRevealEffectContent,
  CanvasRevealEffectItem,
  CanvasRevealEffectTrigger,
} from "/components/ui/canvas-reveal-effect";
`;

export const usageDocs = `
<CanvasRevealEffect type="single" collapsible>
  <CanvasRevealEffectItem value="item-1">
    <CanvasRevealEffectTrigger>Is it accessible?</CanvasRevealEffectTrigger>
    <CanvasRevealEffectContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </CanvasRevealEffectContent>
  </CanvasRevealEffectItem>
</CanvasRevealEffect>
`;