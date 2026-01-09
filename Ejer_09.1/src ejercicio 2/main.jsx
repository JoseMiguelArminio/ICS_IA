import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <TaskListPage /> },
          { path: "new", element: <NewTaskPage /> },
          { path: "task/:taskId", element: <TaskDetailPage /> },
        ],
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Cargando...</p>}>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
