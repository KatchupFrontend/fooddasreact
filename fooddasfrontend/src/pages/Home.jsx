
import Navbar from '../components/Navbar';


import Footer from '../components/Footer';
import React from 'react'
import About from '../components/About';
import Deals from '../components/Deals';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Deals />
      <Footer />
    </div>
  );
}

export default Home