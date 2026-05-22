import React from 'react';

export default function ContactForm() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 text-success">Contáctanos</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre completo</label>
          <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="ejemplo@mail.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success px-5">Enviar</button>
        </div>
      </form>
    </section>
  );
}
