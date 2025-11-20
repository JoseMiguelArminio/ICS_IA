import React, { useEffect, useState } from "react";

export default function PostDetails({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [postId]);

  if (!post) return <p>Cargando post...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
