export const name = "MultiStepLoader";

export const importDocs = `
import {
  MultiStepLoader,
  MultiStepLoaderContent,
  MultiStepLoaderItem,
  MultiStepLoaderTrigger,
} from "/components/ui/multi-step-loader";
`;

export const usageDocs = `
<MultiStepLoader type="single" collapsible>
  <MultiStepLoaderItem value="item-1">
    <MultiStepLoaderTrigger>Is it accessible?</MultiStepLoaderTrigger>
    <MultiStepLoaderContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </MultiStepLoaderContent>
  </MultiStepLoaderItem>
</MultiStepLoader>
`;