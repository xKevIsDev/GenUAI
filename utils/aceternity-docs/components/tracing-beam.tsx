export const name = "TracingBeam";

export const importDocs = `
import {
  TracingBeam,
  TracingBeamContent,
  TracingBeamItem,
  TracingBeamTrigger,
} from "/components/ui/tracing-beam";
`;

export const usageDocs = `
<TracingBeam type="single" collapsible>
  <TracingBeamItem value="item-1">
    <TracingBeamTrigger>Is it accessible?</TracingBeamTrigger>
    <TracingBeamContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </TracingBeamContent>
  </TracingBeamItem>
</TracingBeam>
`;