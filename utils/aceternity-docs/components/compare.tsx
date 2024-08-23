export const name = "Compare";

export const importDocs = `
import {
  Compare,
  CompareContent,
  CompareItem,
  CompareTrigger,
} from "/components/ui/compare";
`;

export const usageDocs = `
<Compare type="single" collapsible>
  <CompareItem value="item-1">
    <CompareTrigger>Is it accessible?</CompareTrigger>
    <CompareContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </CompareContent>
  </CompareItem>
</Compare>
`;