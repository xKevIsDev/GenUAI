export const name = "CardSpotlight";

export const importDocs = `
import {
  CardSpotlight,
  CardSpotlightContent,
  CardSpotlightItem,
  CardSpotlightTrigger,
} from "/components/ui/card-spotlight";
`;

export const usageDocs = `
<CardSpotlight type="single" collapsible>
  <CardSpotlightItem value="item-1">
    <CardSpotlightTrigger>Is it accessible?</CardSpotlightTrigger>
    <CardSpotlightContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </CardSpotlightContent>
  </CardSpotlightItem>
</CardSpotlight>
`;