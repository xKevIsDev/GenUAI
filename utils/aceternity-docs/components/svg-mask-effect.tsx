export const name = "SvgMaskEffect";

export const importDocs = `
import {
  SvgMaskEffect,
  SvgMaskEffectContent,
  SvgMaskEffectItem,
  SvgMaskEffectTrigger,
} from "/components/ui/svg-mask-effect";
`;

export const usageDocs = `
<SvgMaskEffect type="single" collapsible>
  <SvgMaskEffectItem value="item-1">
    <SvgMaskEffectTrigger>Is it accessible?</SvgMaskEffectTrigger>
    <SvgMaskEffectContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </SvgMaskEffectContent>
  </SvgMaskEffectItem>
</SvgMaskEffect>
`;