export const name = "Accordion";

export const importDocs = `
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/shadcn/components/ui/accordion";
`;

export const usageDocs = `
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
`;
