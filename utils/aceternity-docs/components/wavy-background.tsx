export const name = "WavyBackground";

export const importDocs = `
import {
  WavyBackground,
  WavyBackgroundContent,
  WavyBackgroundItem,
  WavyBackgroundTrigger,
} from "/components/ui/wavy-background";
`;

export const usageDocs = `
<WavyBackground type="single" collapsible>
  <WavyBackgroundItem value="item-1">
    <WavyBackgroundTrigger>Is it accessible?</WavyBackgroundTrigger>
    <WavyBackgroundContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </WavyBackgroundContent>
  </WavyBackgroundItem>
</WavyBackground>
`;