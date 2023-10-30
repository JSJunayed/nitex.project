import React from 'react';
import Features from '../components/Features/Features';
import Clients from '../components/Clients/Clients';
import Products from '../components/Products/Products';
import Slider from '../components/Slider/Slider';
import Content from '../components/Content/Content';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';

const HomePage = () => {
  return (
    <>
    <Hero />
    <Features />
    <Clients />
    <Products />
    <Slider />
    <Projects />
    <Content {...heroOne} />
    <Content {...heroTwo} />
    <Content {...heroThree} />
    <Content {...heroFour} />
    </>
    
  )
}

export default HomePage;