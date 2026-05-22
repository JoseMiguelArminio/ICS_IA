import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Formulario de Contacto</h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="border p-4 rounded shadow"
      >
        { }
        <input type="hidden" name="form-name" value="contact" />

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Ej: nombre@correo.com"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="3"
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

