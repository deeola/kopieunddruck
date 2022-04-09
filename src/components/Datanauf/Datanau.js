import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import coated from '../../assest/coated.pdf'
import icc from '../../assest/iso_coated_v2_300_eci.icc'

const Datanau = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Und hier noch wichtige Info‘s zur Datenaufbereitung</h1>
        <p>
          Möchten Sie uns Druckdaten zur Verfügung stellen, dann beachten Sie
          bitte folgende Informationen bei der Datenaufbereitung:
        </p>
        <ul>
          <li>
            Damit Sie Ihre Daten medienneutral, also unabhängig vom
            Ausgabemedium, aufbereiten können, empfiehlt sich die Verwendung
            eines ICC Profils. Wir arbeiten auf Basis des ISOcoated v2 300 %.
            Haben Sie hierzu Fragen, dann können Sie uns gern kontaktieren.
          </li>
          <li>
            Sämtliche Bilder und das Dokument müssen im CMYK-Farbmodus
            vorliegen. Verwenden Sie nur Sonderfarben, wenn es beabsichtigt ist.
          </li>
          <li>
            Keine Rasterwinkel oder andere Übertragungsfunktionen abspeichern.
          </li>
          <li>
            Farbverläufe und große homogene Farbflächen sollten vermieden
            werden. Ist das nicht möglich, bitten wir um Abstimmung mit unserer
            Satzabteilung. Alle verwendeten Schriftarten müssen Ihrer Datei
            hinzugefügt oder eingebettet werden (alternativ in Kurven/Pfade
            konvertieren)
          </li>
          <li>Schriften unter 12 pt sollten 100 % schwarz sein.</li>
          <li>Linienstärken bitte nicht unter 0,5 pt (0,176 mm).</li>
          <li>
            Logos als Vektorgrafik (Pixeldaten sind nicht frei skalierbar).
          </li>
          <li>
            Bilder im Endformat mit 300 dpi anlegen. Strichzeichnungen mit 1200
            dpi.
          </li>
          <li>
            Angeschnittene Formate sind mit einem Anschnitt von 2 mm ringsherum
            anzulegen.
          </li>
          <li>Belichtungsfähige .pdf-Dateien werden bevorzugt.</li>
          <p>Informationen zum ICC-Profil:</p>
          <li>
              <a href={coated} target='_blank' rel="noreferrer" >Info ECI-Offsetprofil ISOcoated_v2_300_ec (*.pdf, 0.3MB)</a>
              <a href={icc} target='_blank' rel="noreferrer" >ICC-Profil, ISO-Coated (*.icc, 1.8MB)</a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Datanau;
