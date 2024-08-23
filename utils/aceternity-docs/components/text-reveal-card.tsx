export const name = "TextRevealCard";

export const importDocs = `
import {
  TextRevealCard,
  TextRevealCardContent,
  TextRevealCardItem,
  TextRevealCardTrigger,
} from "/components/ui/text-reveal-card";
`;

export const usageDocs = `
<TextRevealCard type="single" collapsible>
  <TextRevealCardItem value="item-1">
    <TextRevealCardTrigger>Is it accessible?</TextRevealCardTrigger>
    <TextRevealCardContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </TextRevealCardContent>
  </TextRevealCardItem>
</TextRevealCard>
`;