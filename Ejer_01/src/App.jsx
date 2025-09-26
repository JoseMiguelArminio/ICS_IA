import React from 'react';
import Navbar from './components/Navbar';
import CardSection from './components/CardSection';
import ContactForm from './components/ContactForm';
import Footer from './components/PiePagina';
import PiePagina from './components/PiePagina';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ paddingTop: '56px' }}>
      <Navbar />
      <CardSection />
      <ContactForm />
      <PiePagina />
    </div>
  );
}

export default App;


