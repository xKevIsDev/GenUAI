export const name = "Grid";

export const importDocs = `
import {
  Grid,
  GridContent,
  GridItem,
  GridTrigger,
} from "/components/ui/grid";
`;

export const usageDocs = `
<Grid type="single" collapsible>
  <GridItem value="item-1">
    <GridTrigger>Is it accessible?</GridTrigger>
    <GridContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </GridContent>
  </GridItem>
</Grid>
`;