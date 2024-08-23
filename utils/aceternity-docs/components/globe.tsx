export const name = "Globe";

export const importDocs = `
import {
  Globe,
  GlobeContent,
  GlobeItem,
  GlobeTrigger,
} from "/components/ui/globe";
`;

export const usageDocs = `
<Globe type="single" collapsible>
  <GlobeItem value="item-1">
    <GlobeTrigger>Is it accessible?</GlobeTrigger>
    <GlobeContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </GlobeContent>
  </GlobeItem>
</Globe>
`;