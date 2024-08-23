export const name = "FollowingPointer";

export const importDocs = `
import {
  FollowingPointer,
  FollowingPointerContent,
  FollowingPointerItem,
  FollowingPointerTrigger,
} from "/components/ui/following-pointer";
`;

export const usageDocs = `
<FollowingPointer type="single" collapsible>
  <FollowingPointerItem value="item-1">
    <FollowingPointerTrigger>Is it accessible?</FollowingPointerTrigger>
    <FollowingPointerContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </FollowingPointerContent>
  </FollowingPointerItem>
</FollowingPointer>
`;