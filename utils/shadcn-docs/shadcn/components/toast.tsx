export const name = "Toast";

export const importDocs = `
import { useToast } from "/shadcn/components/ui/use-toast";
`;

export const usageDocs = `
const { toast } = useToast();

toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2023 at 5:57 PM",
});
`;
