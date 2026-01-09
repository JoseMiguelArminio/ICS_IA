import { POSTS } from "../data/posts";
import { Link } from "react-router-dom";

export default function PostsListPage() {
  return (
    <ul>
      {POSTS.map(post => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
