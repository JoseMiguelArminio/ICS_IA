import React, { useEffect, useState } from "react";

export default function PostComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!res.ok) throw new Error("Error al cargar comentarios");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  if (isLoading) return <p>Cargando comentarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {comments.map(c => (
        <li key={c.id}><strong>{c.name}:</strong> {c.body}</li>
      ))}
    </ul>
  );
}
