import React from 'react';
import Hero from '../components/Hero';
import Blog from '../components/Blog';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Clients />
      <Blog />
    </div>
  );
};

export default Home;
