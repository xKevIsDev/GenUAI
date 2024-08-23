export const name = "Sheet";

export const importDocs = `
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "/shadcn/components/ui/sheet";
`;

export const usageDocs = `
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
`;
