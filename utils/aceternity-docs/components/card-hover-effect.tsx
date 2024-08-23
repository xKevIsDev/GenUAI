export const name = "CardHoverEffect";

export const importDocs = `
import {
  CardHoverEffect,
  CardHoverEffectContent,
  CardHoverEffectItem,
  CardHoverEffectTrigger,
} from "/components/ui/card-hover-effect";
`;

export const usageDocs = `
<CardHoverEffect type="single" collapsible>
  <CardHoverEffectItem value="item-1">
    <CardHoverEffectTrigger>Is it accessible?</CardHoverEffectTrigger>
    <CardHoverEffectContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </CardHoverEffectContent>
  </CardHoverEffectItem>
</CardHoverEffect>
`;