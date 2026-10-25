import React from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <main>
        <Products />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
