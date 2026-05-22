export default function Comentarios({ comentarios }) {

    return (

        <div>

            {comentarios.map((c) => (

                <div key={c.id} className="card">

                    <strong>{c.autor}</strong>

                    <p>{c.texto}</p>

                    <small>{c.fecha_creacion}</small>

                </div>

            ))}

        </div>
    );
}