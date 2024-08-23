export const name = "GenerateRandomString";

export const importDocs = `
import {
  GenerateRandomString,
  GenerateRandomStringContent,
  GenerateRandomStringItem,
  GenerateRandomStringTrigger,
} from "/components/ui/generate-random-string";
`;

export const usageDocs = `
<GenerateRandomString type="single" collapsible>
  <GenerateRandomStringItem value="item-1">
    <GenerateRandomStringTrigger>Is it accessible?</GenerateRandomStringTrigger>
    <GenerateRandomStringContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </GenerateRandomStringContent>
  </GenerateRandomStringItem>
</GenerateRandomString>
`;