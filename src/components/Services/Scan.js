import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Scan = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Scannen</h1>
        <div>
          <ul>
            <li>sofort zum Mitnehmen</li>
            <li>farbig und schwarzweiß</li>
            <li>brillante Ergebnisse (abhängig von der Vorlage)</li>
            <li>Standard DIN-Formate A6, A5, A4, A3, A3+, A2, A1, A0</li>
            <li>Sonderformate mit extremen Überlängen bis hin zu Meterware</li>
            <li>individuelle Auflagenstärken (ab 1 Stück)</li>
          </ul>
          <p>
            Sie möchten die Dokumente für die Zukunft speichern? Auf CD bzw. DVD
            oder auf einem USB-Stick* können Sie Ihre Daten gleich mitnehmen.
          </p>
          <p>
            Dateiformate: .pdf, .jpg, .tiff * USB-Sticks sind bei uns (noch)
            nicht erhältlich.
          </p>
          <p>
            Service: Auch beim Digitalisieren können Sie sich auf unseren
            Service verlassen:
          </p>
          <p>Unterlagen abgeben und nach Fertigstellung wieder abholen.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Scan;
