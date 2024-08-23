export const name = "BackgroundBeams";

export const importDocs = `
import {
  BackgroundBeams,
  BackgroundBeamsContent,
  BackgroundBeamsItem,
  BackgroundBeamsTrigger,
} from "/components/ui/background-beams";
`;

export const usageDocs = `
<BackgroundBeams type="single" collapsible>
  <BackgroundBeamsItem value="item-1">
    <BackgroundBeamsTrigger>Is it accessible?</BackgroundBeamsTrigger>
    <BackgroundBeamsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </BackgroundBeamsContent>
  </BackgroundBeamsItem>
</BackgroundBeams>
`;