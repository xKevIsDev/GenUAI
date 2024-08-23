export const name = "AuroraBackground";

export const importDocs = `
import {
  AuroraBackground,
  AuroraBackgroundContent,
  AuroraBackgroundItem,
  AuroraBackgroundTrigger,
} from "/components/ui/aurora-background";
`;

export const usageDocs = `
<AuroraBackground type="single" collapsible>
  <AuroraBackgroundItem value="item-1">
    <AuroraBackgroundTrigger>Is it accessible?</AuroraBackgroundTrigger>
    <AuroraBackgroundContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AuroraBackgroundContent>
  </AuroraBackgroundItem>
</AuroraBackground>
`;