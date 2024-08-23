export const name = "Tabs";

export const importDocs = `
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsTrigger,
} from "/components/ui/tabs";
`;

export const usageDocs = `
<Tabs type="single" collapsible>
  <TabsItem value="item-1">
    <TabsTrigger>Is it accessible?</TabsTrigger>
    <TabsContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </TabsContent>
  </TabsItem>
</Tabs>
`;