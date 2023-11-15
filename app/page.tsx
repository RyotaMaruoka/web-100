import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';

const Home = () => {
  return (
    <div>
      <Header />
      Hello
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
