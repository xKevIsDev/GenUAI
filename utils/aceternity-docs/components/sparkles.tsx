export const name = "Sparkles";

export const importDocs = `
import {
  Sparkles,
  SparklesContent,
  SparklesItem,
  SparklesTrigger,
} from "/components/ui/sparkles";
`;

export const usageDocs = `
<Sparkles type="single" collapsible>
  <SparklesItem value="item-1">
    <SparklesTrigger>Is it accessible?</SparklesTrigger>
    <SparklesContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </SparklesContent>
  </SparklesItem>
</Sparkles>
`;