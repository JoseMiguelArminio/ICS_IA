import React, { useCallback, useEffect, useState } from "react";

export default function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdPost, setCreatedPost] = useState(null);

  const addPost = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body })
      });
      const data = await res.json();
      setCreatedPost(data);
    } catch (err) {
      console.error(err);
    }
  }, [title, body]);

  useEffect(() => {
    if (createdPost) {
      console.log("Post creado:", createdPost);
    }
  }, [addPost, createdPost]);

  const handleSubmit = e => {
    e.preventDefault();
    addPost();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Cuerpo"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <button type="submit">Crear Post</button>
    </form>
  );
}
