export const name = "CardStack";

export const importDocs = `
import {
  CardStack,
  CardStackContent,
  CardStackItem,
  CardStackTrigger,
} from "/components/ui/card-stack";
`;

export const usageDocs = `
<CardStack type="single" collapsible>
  <CardStackItem value="item-1">
    <CardStackTrigger>Is it accessible?</CardStackTrigger>
    <CardStackContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </CardStackContent>
  </CardStackItem>
</CardStack>
`;