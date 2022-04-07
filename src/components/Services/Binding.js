import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Binding = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Binding</h1>
        <p>
          Wohin mit losen Blattsammlungen? Oder: die Bachelorarbeit ist
          geschrieben und gedruckt und was hält das Werk nun zusammen? Natürlich
          eine der verschiedenen Bindemöglichkeiten die ihr bei uns erhaltet:
        </p>
        <div>
          <div>
            <h5>Thermobindung*</h5>
            <p>
              VipCover - fester Bucheinband der auf der Titelseite mit einer
              Gold- oder Silberprägung versehen werden kann SteelCover -
              flexibler Bucheinband der aus einem lederartigen Rücken mit
              transparenter Vorder- und Rückfolie besteht.
            </p>
          </div>
          <div>
            <h5>Wire-O-Bindungen*</h5>
            <p>
              Drahtspiralbindung - sie hat den Vorteil, dass sie komplett plan
              aufgeschlagen werden kann und auch bei hoher Beanspruchung über
              eine sehr gute Haltbarkeit verfügt.
            </p>
          </div>
          <div>
            <h5>Kalenderbindung*</h5>
            <p>
            Die Drahtspiralbindung mit Kalenderaufhängung, inkl. Daumenstanzung, sorgt für komfortables Umblättern.
            </p>
          </div>
        </div>
        <p>* in verschiedenen Farben erhältlich</p>
      </div>
      <Footer />
    </div>
  );
};

export default Binding;
