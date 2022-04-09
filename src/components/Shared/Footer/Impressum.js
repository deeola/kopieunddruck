import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

const Impressum = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Impressum</h1>
        <p>Inhaltlich verantwortlich gemäß §10 Abs. 3 MDStV:</p>
        <div>
          <p>Kopie & Druck GbR</p>
          <p>Zerbster Straße 21</p>
          <p>06844 Dessau-Roßlau</p>
        </div>
        <div>
          <h3>Vertreten durch:</h3>
          <p>Rainer Paegel, Christiane Lange, Christoph Jensch</p>
        </div>
        <div>
          <h3>Kontakt:</h3>
          <p>
            <span>Telefon:</span> 0340 - 240 43 328
          </p>
          <p>
            <span>E-Mail: </span> kontaktkopie-druck.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
