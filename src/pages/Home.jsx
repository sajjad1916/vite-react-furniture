import React from 'react';
import "../assets/styles/custom.css";
import About from '../components/ui/About';
import Banner from '../components/ui/Banner';
import Contact from '../components/ui/Contact';
import Design from '../components/ui/Design';
import Newsletter from '../components/ui/Newsletter';

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Design />
      <Newsletter />
      <Contact />
    </>
  )
}

export default Home
