import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Naturaleza Viva</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Proyectos</a>
            </li>

            {/* Dropdown para Recursos */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="recursosDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recursos
              </a>
              <ul className="dropdown-menu" aria-labelledby="recursosDropdown">
                <li><a className="dropdown-item" href="#">Recurso 1</a></li>
                <li><a className="dropdown-item" href="#">Recurso 2</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

