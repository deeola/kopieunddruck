import React from 'react'
import Navbar from '../Shared/Navbar/Navbar';
import Hero from './Hero';
import Welcome from './Welcome';
import Services from './Services';
import Gallery from './Gallery'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Welcome />
        <Services />
        <Gallery />
    </div>
  )
}

export default Home;