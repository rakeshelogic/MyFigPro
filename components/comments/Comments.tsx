import { ClientSideSuspense } from "@liveblocks/react";
import CommentsOverlay from "./CommentsOverlay";

function Comments() {
  return (
    <ClientSideSuspense fallback={null}>
      {() => <CommentsOverlay />}
    </ClientSideSuspense>
  );
}

export default Comments;
