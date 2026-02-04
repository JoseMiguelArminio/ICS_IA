
import Link from "next/link";
import { getAllMovies } from "@/lib/cinema";

export default function MoviesPage() {
  const movies = getAllMovies();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Películas</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ width: "200px" }}>
            <Link href={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} style={{ width: "100%" }} />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
