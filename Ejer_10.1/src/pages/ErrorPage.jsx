import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h2>Ha ocurrido un error</h2>
      <p>{error.message}</p>
    </div>
  );
}
