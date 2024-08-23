export const name = "FlipWords";

export const importDocs = `
import {
  FlipWords,
  FlipWordsContent,
  FlipWordsItem,
  FlipWordsTrigger,
} from "/components/ui/flip-words";
`;

export const usageDocs = `
<FlipWords type="single" collapsible>
  <FlipWordsItem value="item-1">
    <FlipWordsTrigger>Is it accessible?</FlipWordsTrigger>
    <FlipWordsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </FlipWordsContent>
  </FlipWordsItem>
</FlipWords>
`;