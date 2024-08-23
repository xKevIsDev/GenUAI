export const name = "LinkPreview";

export const importDocs = `
import {
  LinkPreview,
  LinkPreviewContent,
  LinkPreviewItem,
  LinkPreviewTrigger,
} from "/components/ui/link-preview";
`;

export const usageDocs = `
<LinkPreview type="single" collapsible>
  <LinkPreviewItem value="item-1">
    <LinkPreviewTrigger>Is it accessible?</LinkPreviewTrigger>
    <LinkPreviewContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </LinkPreviewContent>
  </LinkPreviewItem>
</LinkPreview>
`;