export const name = "Meteors";

export const importDocs = `
import {
  Meteors,
  MeteorsContent,
  MeteorsItem,
  MeteorsTrigger,
} from "/components/ui/meteors";
`;

export const usageDocs = `
<Meteors type="single" collapsible>
  <MeteorsItem value="item-1">
    <MeteorsTrigger>Is it accessible?</MeteorsTrigger>
    <MeteorsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </MeteorsContent>
  </MeteorsItem>
</Meteors>
`;