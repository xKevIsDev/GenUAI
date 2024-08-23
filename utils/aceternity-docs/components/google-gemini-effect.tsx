export const name = "GoogleGeminiEffect";

export const importDocs = `
import {
  GoogleGeminiEffect,
  GoogleGeminiEffectContent,
  GoogleGeminiEffectItem,
  GoogleGeminiEffectTrigger,
} from "/components/ui/google-gemini-effect";
`;

export const usageDocs = `
<GoogleGeminiEffect type="single" collapsible>
  <GoogleGeminiEffectItem value="item-1">
    <GoogleGeminiEffectTrigger>Is it accessible?</GoogleGeminiEffectTrigger>
    <GoogleGeminiEffectContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </GoogleGeminiEffectContent>
  </GoogleGeminiEffectItem>
</GoogleGeminiEffect>
`;