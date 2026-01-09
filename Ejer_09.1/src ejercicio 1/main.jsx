import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PostsListPage from "./pages/PostsListPage";
import PostDetailPage from "./pages/PostDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "posts", element: <PostsListPage /> },
      { path: "posts/:postId", element: <PostDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
