export const name = "GlareCard";

export const importDocs = `
import {
  GlareCard,
  GlareCardContent,
  GlareCardItem,
  GlareCardTrigger,
} from "/components/ui/glare-card";
`;

export const usageDocs = `
<GlareCard type="single" collapsible>
  <GlareCardItem value="item-1">
    <GlareCardTrigger>Is it accessible?</GlareCardTrigger>
    <GlareCardContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </GlareCardContent>
  </GlareCardItem>
</GlareCard>
`;