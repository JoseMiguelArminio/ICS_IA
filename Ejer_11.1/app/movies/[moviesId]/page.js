import Link from "next/link";
import { getMovieById, getCastByMovieId } from "@/lib/cinema";

export default function MovieDetail({ params }) {
  const movie = getMovieById(params.movieId);
  const cast = getCastByMovieId(params.movieId);

  if (!movie) return <p>Película no encontrada</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title} ({movie.year})</h1>
      <img src={movie.poster} alt={movie.title} style={{ width: "300px" }} />
      <p><strong>Director:</strong> {movie.director}</p>
      <p>{movie.synopsis}</p>

      <h2>Reparto</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {cast.map(actor => (
          <div key={actor.id} style={{ width: "150px" }}>
            <Link href={`/actors/${actor.id}`}>
              <img src={actor.photo} alt={actor.name} style={{ width: "100%" }} />
              <p>{actor.name}</p>
              <small>{actor.character}</small>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
