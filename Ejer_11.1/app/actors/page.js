import Link from "next/link";
import { getAllActors } from "@/lib/cinema";

export default function ActorsPage() {
  const actors = getAllActors();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Actores</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {actors.map(actor => (
          <div key={actor.id} style={{ width: "150px" }}>
            <Link href={`/actors/${actor.id}`}>
              <img src={actor.photo} alt={actor.name} style={{ width: "100%" }} />
              <h3>{actor.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
