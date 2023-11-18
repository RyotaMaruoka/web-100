'use client';

import React, { FC } from 'react';

import Header from './components/Header';
import About from './components/About';
import Car from './components/Car';
import Contact from './components/Contact';

import Footer from './components/Footer';

const Home: FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mb-16">
        <div id="about">
          <About />
        </div>
        <div id="car" className="mt-16">
          <Car />
        </div>
        {/* <div id="contact" className="mt-16">
          <Contact />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
