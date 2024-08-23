export const name = "FileUpload";

export const importDocs = `
import {
  FileUpload,
  FileUploadContent,
  FileUploadItem,
  FileUploadTrigger,
} from "/components/ui/file-upload";
`;

export const usageDocs = `
<FileUpload type="single" collapsible>
  <FileUploadItem value="item-1">
    <FileUploadTrigger>Is it accessible?</FileUploadTrigger>
    <FileUploadContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </FileUploadContent>
  </FileUploadItem>
</FileUpload>
`;