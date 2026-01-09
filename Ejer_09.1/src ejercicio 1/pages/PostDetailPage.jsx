import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/posts";

export default function PostDetailPage() {
  const { postId } = useParams();
  const post = POSTS.find(p => p.id == postId);

  if (!post) {
    return <h3>Artículo no encontrado</h3>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/posts">Volver a la lista</Link>
    </>
  );
}
