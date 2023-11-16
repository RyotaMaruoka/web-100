'use client';

import React, { FC } from 'react';
import Header from './components/Header';
import About from './components/About';
import Car from './components/Car';
import Contact from './components/Contact';
import { useRouter } from 'next/navigation';
import { Button } from '@material-tailwind/react';

const Home: FC = () => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <Header />
      <Button
        onClick={() => {
          router.push('/auth');
        }}
      >
        Login
      </Button>
      <section id="about">
        <About />
      </section>
      <section id="car">
        <h1>分割購入できる車一覧</h1>
        <Car />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
