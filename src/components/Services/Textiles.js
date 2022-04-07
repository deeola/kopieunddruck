import React from 'react';
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Textiles = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Poster und Plakatdrucke</h1>
        <div>
          <p>
            Für Präsentationen oder einfach zur Wandgestaltung eignen sich
            Plakate, Poster und Banner ganz besonders. Auf hochwertigem Papier
            mit glänzender oder matter Oberfläche gedruckt schaffen Sie
            Eindruck. Bei uns ab 1 Stück erhältlich in den Standard DIN-Formaten
            A3, A2, A1, A0 und in Sonderformaten. Hierbei beträgt die maximale
            Druckbreite ca. 1,10 m und die maximale Drucklänge 91 m.
          </p>
          <p>
            Tipp: Um Ihrer Präsentation noch mehr Ausdruck zu verleihen und sie
            flexibel einsetzen zu können, erhalten Sie Banner bei uns auch mit
            Stangen- und Transportsystem.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Textiles;