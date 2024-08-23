export const name = "PlaceholdersAndVanishInput";

export const importDocs = `
import {
  PlaceholdersAndVanishInput,
  PlaceholdersAndVanishInputContent,
  PlaceholdersAndVanishInputItem,
  PlaceholdersAndVanishInputTrigger,
} from "/components/ui/placeholders-and-vanish-input";
`;

export const usageDocs = `
<PlaceholdersAndVanishInput type="single" collapsible>
  <PlaceholdersAndVanishInputItem value="item-1">
    <PlaceholdersAndVanishInputTrigger>Is it accessible?</PlaceholdersAndVanishInputTrigger>
    <PlaceholdersAndVanishInputContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </PlaceholdersAndVanishInputContent>
  </PlaceholdersAndVanishInputItem>
</PlaceholdersAndVanishInput>
`;