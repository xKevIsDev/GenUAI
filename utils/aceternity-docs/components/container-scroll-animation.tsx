export const name = "ContainerScrollAnimation";

export const importDocs = `
import {
  ContainerScrollAnimation,
  ContainerScrollAnimationContent,
  ContainerScrollAnimationItem,
  ContainerScrollAnimationTrigger,
} from "/components/ui/container-scroll-animation";
`;

export const usageDocs = `
<ContainerScrollAnimation type="single" collapsible>
  <ContainerScrollAnimationItem value="item-1">
    <ContainerScrollAnimationTrigger>Is it accessible?</ContainerScrollAnimationTrigger>
    <ContainerScrollAnimationContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </ContainerScrollAnimationContent>
  </ContainerScrollAnimationItem>
</ContainerScrollAnimation>
`;