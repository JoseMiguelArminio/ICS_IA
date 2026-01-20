import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/region/europe"
      );

      if (!res.ok) {
        throw new Error("Error cargando países");
      }

      return res.json();
    },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "country/:countryName",
        element: <CountryDetails />,
      },
    ],
  },
]);
