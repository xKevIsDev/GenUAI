export const name = "FloatingDock";

export const importDocs = `
import {
  FloatingDock,
  FloatingDockContent,
  FloatingDockItem,
  FloatingDockTrigger,
} from "/components/ui/floating-dock";
`;

export const usageDocs = `
<FloatingDock type="single" collapsible>
  <FloatingDockItem value="item-1">
    <FloatingDockTrigger>Is it accessible?</FloatingDockTrigger>
    <FloatingDockContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </FloatingDockContent>
  </FloatingDockItem>
</FloatingDock>
`;