import Link from "next/link";
import { getActorById, getFilmographyByActorId } from "@/lib/cinema";

export default function ActorDetail({ params }) {
  const actor = getActorById(params.actorId);
  const movies = getFilmographyByActorId(params.actorId);

  if (!actor) return <p>Actor no encontrado</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{actor.name} ({actor.birthYear})</h1>
      <img src={actor.photo} alt={actor.name} style={{ width: "200px" }} />
      <p>{actor.bio}</p>

      <h2>Filmografía</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ width: "200px" }}>
            <Link href={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} style={{ width: "100%" }} />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
