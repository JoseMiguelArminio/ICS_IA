import React from "react";
import PostList from "./components/PostList";
import { Parent } from "./components/Parent";
import UserSearch from "./components/UserSearch";
import PostComments from "./components/PostComments";
import NewPostForm from "./components/NewPostForm";

export default function App() {
  return (
    <div>
      <h1>Ejercicios React - useEffect</h1>

      <h2>Ejercicio 1: Lista de Posts</h2>
      <PostList />

      <h2>Ejercicio 2: Detalles del Post</h2>
      <Parent />

      <h2>Ejercicio 3: Búsqueda de Usuarios</h2>
      <UserSearch />

      <h2>Ejercicio 4: Comentarios de un Post (Post ID = 1)</h2>
      <PostComments postId={1} />

      <h2>Ejercicio 5: Crear Nuevo Post</h2>
      <NewPostForm />
    </div>
  );
}
