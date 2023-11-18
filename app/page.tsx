'use client';

import React, { FC } from 'react';

import Header from './components/Header';
import About from './components/About';
import Car from './components/Car';
import Contact from './components/Contact';



const Home: FC = () => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='mb-16'>
        <div id="about">
          <About />
        </div>
        <div id="car" className='mt-16'>
          <Car />
        </div>
        <div id="contact" className='mt-16'>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
