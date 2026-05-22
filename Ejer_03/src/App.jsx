import React from 'react';
import Navbar from './components/Navbar';
import CardSection from './components/CardSection';
import ContactForm from './components/ContactForm';
import PiePagina from './components/PiePagina';

import GaleriaProductos from './components/GaleriaProductos'; 
import { productos } from './datos/Productos';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ paddingTop: '56px' }}>
      <Navbar />
      <CardSection />
      <ContactForm />

      {}
      <h2 className="text-center mt-4">Galería Avanzada de Productos</h2>
      <GaleriaProductos productos={productos} />

      <PiePagina />
    </div>
  );
}

export default App;

