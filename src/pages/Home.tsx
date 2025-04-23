import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Benefits from '../components/Benefits';
import JoinCricketFamily from '../components/JoinCricketFamily';
import Events from '../components/Events';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Programs />
      <Benefits />
      <JoinCricketFamily />
      <Events />
      <Achievements />
      <Gallery />
    </div>
  );
};

export default Home;