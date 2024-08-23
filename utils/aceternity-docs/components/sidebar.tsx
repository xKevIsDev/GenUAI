export const name = "Sidebar";

export const importDocs = `
import {
  Sidebar,
  SidebarContent,
  SidebarItem,
  SidebarTrigger,
} from "/components/ui/sidebar";
`;

export const usageDocs = `
<Sidebar type="single" collapsible>
  <SidebarItem value="item-1">
    <SidebarTrigger>Is it accessible?</SidebarTrigger>
    <SidebarContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </SidebarContent>
  </SidebarItem>
</Sidebar>
`;