export const name = "Spotlight";

export const importDocs = `
import {
  Spotlight,
  SpotlightContent,
  SpotlightItem,
  SpotlightTrigger,
} from "/components/ui/spotlight";
`;

export const usageDocs = `
<Spotlight type="single" collapsible>
  <SpotlightItem value="item-1">
    <SpotlightTrigger>Is it accessible?</SpotlightTrigger>
    <SpotlightContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </SpotlightContent>
  </SpotlightItem>
</Spotlight>
`;