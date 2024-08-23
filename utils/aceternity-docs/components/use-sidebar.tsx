export const name = "UseSidebar";

export const importDocs = `
import {
  UseSidebar,
  UseSidebarContent,
  UseSidebarItem,
  UseSidebarTrigger,
} from "/components/ui/use-sidebar";
`;

export const usageDocs = `
<UseSidebar type="single" collapsible>
  <UseSidebarItem value="item-1">
    <UseSidebarTrigger>Is it accessible?</UseSidebarTrigger>
    <UseSidebarContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </UseSidebarContent>
  </UseSidebarItem>
</UseSidebar>
`;