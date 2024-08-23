export const name = "NavbarMenu";

export const importDocs = `
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuItem,
  NavbarMenuTrigger,
} from "/components/ui/navbar-menu";
`;

export const usageDocs = `
<NavbarMenu type="single" collapsible>
  <NavbarMenuItem value="item-1">
    <NavbarMenuTrigger>Is it accessible?</NavbarMenuTrigger>
    <NavbarMenuContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </NavbarMenuContent>
  </NavbarMenuItem>
</NavbarMenu>
`;