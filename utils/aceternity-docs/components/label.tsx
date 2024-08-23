export const name = "Label";

export const importDocs = `
import {
  Label,
  LabelContent,
  LabelItem,
  LabelTrigger,
} from "/components/ui/label";
`;

export const usageDocs = `
<Label type="single" collapsible>
  <LabelItem value="item-1">
    <LabelTrigger>Is it accessible?</LabelTrigger>
    <LabelContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </LabelContent>
  </LabelItem>
</Label>
`;