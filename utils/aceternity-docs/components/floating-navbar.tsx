export const name = "FloatingNavbar";

export const importDocs = `
import {
  FloatingNavbar,
  FloatingNavbarContent,
  FloatingNavbarItem,
  FloatingNavbarTrigger,
} from "/components/ui/floating-navbar";
`;

export const usageDocs = `
<FloatingNavbar type="single" collapsible>
  <FloatingNavbarItem value="item-1">
    <FloatingNavbarTrigger>Is it accessible?</FloatingNavbarTrigger>
    <FloatingNavbarContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </FloatingNavbarContent>
  </FloatingNavbarItem>
</FloatingNavbar>
`;