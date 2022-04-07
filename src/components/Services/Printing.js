import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Printing = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Drucken</h1>
        <div>
          <ul>
            <li>sofort zum Mitnehmen</li>
            <li>farbig und schwarzweiß</li>
            <li>brillante Ergebnisse (abhängig von der Vorlage)</li>
            <li>Standard DIN-Formate A6, A5, A4, A3, A3+, A2, A1, A0</li>
            <li>Sonderformate mit extremen Überlängen bis hin zu Meterware</li>
            <li>individuelle Auflagenstärken (ab 1 Stück bis hin zur Tausenderauflage)</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Printing;
