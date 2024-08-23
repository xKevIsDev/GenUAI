export const name = "Lamp";

export const importDocs = `
import {
  Lamp,
  LampContent,
  LampItem,
  LampTrigger,
} from "/components/ui/lamp";
`;

export const usageDocs = `
<Lamp type="single" collapsible>
  <LampItem value="item-1">
    <LampTrigger>Is it accessible?</LampTrigger>
    <LampContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </LampContent>
  </LampItem>
</Lamp>
`;