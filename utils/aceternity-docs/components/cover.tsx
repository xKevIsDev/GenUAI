export const name = "ContainerCover";

export const importDocs = `
import {
  ContainerCover,
  ContainerCoverContent,
  ContainerCoverItem,
  ContainerCoverTrigger,
} from "/components/ui/container-cover";
`;

export const usageDocs = `
<ContainerCover type="single" collapsible>
  <ContainerCoverItem value="item-1">
    <ContainerCoverTrigger>Is it accessible?</ContainerCoverTrigger>
    <ContainerCoverContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </ContainerCoverContent>
  </ContainerCoverItem>
</ContainerCover>
`;