export const name = "Date Picker";

export const importDocs = `
import { Calendar } from "/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "/shadcn/components/ui/popover";
`;

export const usageDocs = `
<Popover>
  <PopoverTrigger asChild>
    <Button variant={"outline"}>
      Pick a date
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
    />
  </PopoverContent>
</Popover>
`;
