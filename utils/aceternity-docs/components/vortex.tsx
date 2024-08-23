export const name = "Vortex";

export const importDocs = `
import {
  Vortex,
  VortexContent,
  VortexItem,
  VortexTrigger,
} from "/components/ui/vortex";
`;

export const usageDocs = `
<Vortex type="single" collapsible>
  <VortexItem value="item-1">
    <VortexTrigger>Is it accessible?</VortexTrigger>
    <VortexContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </VortexContent>
  </VortexItem>
</Vortex>
`;