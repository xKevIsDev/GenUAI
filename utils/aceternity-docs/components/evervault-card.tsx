export const name = "EvervaultCard";

export const importDocs = `
import {
  EvervaultCard,
  EvervaultCardContent,
  EvervaultCardItem,
  EvervaultCardTrigger,
} from "/components/ui/evervault-card";
`;

export const usageDocs = `
<EvervaultCard type="single" collapsible>
  <EvervaultCardItem value="item-1">
    <EvervaultCardTrigger>Is it accessible?</EvervaultCardTrigger>
    <EvervaultCardContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </EvervaultCardContent>
  </EvervaultCardItem>
</EvervaultCard>
`;