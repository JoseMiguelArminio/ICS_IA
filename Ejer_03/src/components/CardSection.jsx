import React from 'react';

export default function CardSection() {
  const cards = [
    {
      title: "Explora la Naturaleza",
      text: "Descubre cómo cuidar el medio ambiente y disfrutar de la naturaleza.",
    },
    {
      title: "Aprende Sostenibilidad",
      text: "Conoce técnicas para vivir de forma más sostenible.",
    },
    {
      title: "Únete a Proyectos",
      text: "Participa en iniciativas que protegen nuestro planeta.",
    },
    {
      title: "Comparte Ideas",
      text: "Conecta con personas que tienen tu misma pasión.",
    }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {cards.map(({ title, text }, index) => (
          <div className="col-md-3" key={index}>
            <div className="card text-center mb-4 shadow-sm border-0">
              <img
                src="/imagenes/planta.png"
                alt={title}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'contain', padding: '1rem' }}
              />
              <div className="card-body">
                <h5 className="card-title text-success">{title}</h5>
                <p className="card-text">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
