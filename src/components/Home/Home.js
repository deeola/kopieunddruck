import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Services from "./Services";
import Gallery from "./Gallery";
import Footer from "../Shared/Footer/Footer";
import Map from './Map';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <Gallery />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
