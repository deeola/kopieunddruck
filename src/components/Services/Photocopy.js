import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Photocopy = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Kopieren</h1>
        <ul>
          <li>Kopien sofort zum Mitnehmen</li>
          <li>farbig und schwarzweiß</li>
          <li>brillante Ergebnisse (abhängig von der Vorlage)</li>
          <li>
            verschiedene Papierstärken und Papiersorten (farbige Papiere, Folien
            für Overheadprojektoren)
          </li>
          <li>Standard DIN-Formate A6, A5, A4, A3, A3+, A2, A1, A0</li>
          <li>Sonderformate mit extremen Überlängen bis hin zu Meterware</li>
          <li>
            individuelle Auflagenstärken (ab 1 Stück bis hin zur
            Tausenderauflage)
          </li>
        </ul>
        <p>
          Service: Damit Sie Zeit sparen, geben Sie einfach Ihre Unterlagen bei
          uns zur Vervielfältigung ab und wir erledigen alles.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Photocopy;
