'use client';

import React, { FC } from 'react';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import { useRouter } from 'next/navigation';
import { Button } from '@material-tailwind/react';

const Home: FC = () => {
  const router = useRouter();

  return (
    <div>
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
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
