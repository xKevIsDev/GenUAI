export const name = "Input";

export const importDocs = `
import {
  Input,
  InputContent,
  InputItem,
  InputTrigger,
} from "/components/ui/input";
`;

export const usageDocs = `
<Input type="single" collapsible>
  <InputItem value="item-1">
    <InputTrigger>Is it accessible?</InputTrigger>
    <InputContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </InputContent>
  </InputItem>
</Input>
`;