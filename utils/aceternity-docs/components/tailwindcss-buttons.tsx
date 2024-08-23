export const name = "TailwindcssButtons";

export const importDocs = `
import {
  TailwindcssButtons,
  TailwindcssButtonsContent,
  TailwindcssButtonsItem,
  TailwindcssButtonsTrigger,
} from "/components/ui/tailwindcss-buttons";
`;

export const usageDocs = `
<TailwindcssButtons type="single" collapsible>
  <TailwindcssButtonsItem value="item-1">
    <TailwindcssButtonsTrigger>Is it accessible?</TailwindcssButtonsTrigger>
    <TailwindcssButtonsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </TailwindcssButtonsContent>
  </TailwindcssButtonsItem>
</TailwindcssButtons>
`;