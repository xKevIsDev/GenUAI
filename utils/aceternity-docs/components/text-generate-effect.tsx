export const name = "TextGenerateEffect";

export const importDocs = `
import {
  TextGenerateEffect,
  TextGenerateEffectContent,
  TextGenerateEffectItem,
  TextGenerateEffectTrigger,
} from "/components/ui/text-generate-effect";
`;

export const usageDocs = `
<TextGenerateEffect type="single" collapsible>
  <TextGenerateEffectItem value="item-1">
    <TextGenerateEffectTrigger>Is it accessible?</TextGenerateEffectTrigger>
    <TextGenerateEffectContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </TextGenerateEffectContent>
  </TextGenerateEffectItem>
</TextGenerateEffect>
`;