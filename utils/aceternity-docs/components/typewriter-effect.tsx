export const name = "TypewriterEffect";

export const importDocs = `
import {
  TypewriterEffect,
  TypewriterEffectContent,
  TypewriterEffectItem,
  TypewriterEffectTrigger,
} from "/components/ui/typewriter-effect";
`;

export const usageDocs = `
<TypewriterEffect type="single" collapsible>
  <TypewriterEffectItem value="item-1">
    <TypewriterEffectTrigger>Is it accessible?</TypewriterEffectTrigger>
    <TypewriterEffectContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </TypewriterEffectContent>
  </TypewriterEffectItem>
</TypewriterEffect>
`;