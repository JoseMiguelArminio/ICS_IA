import React, { useState } from "react";
import PostDetails from "./PostDetails";

export function Parent() {
  const [postId, setPostId] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={postId}
        onChange={e => setPostId(e.target.value)}
        min="1"
        max="100"
      />
      <PostDetails postId={postId} />
    </div>
  );
}
