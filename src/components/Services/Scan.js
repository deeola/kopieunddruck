import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import scan from "../../assest/scan.jpg";

const UnorderedList = styled.ul`
  background-color: #eaeef1;
  padding: 20px 40px;
  width: 96%;
  margin: 10px auto auto auto;
  border-radius: 20px;

  li {
    list-style: square;

    margin-bottom: 10px;
  }
`;

const BodyContainer = styled.div`
`;

const Header = styled.h1`
  margin: 10px auto 20px 0px;
  width: 90%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 10px 10px 10px 20px;
`;

const ImageContainer = styled.img`
  width: 100%;
  display: block;
`;

const ImageDiv = styled.div`
  position: relative;
  z-index: -1;
  /* 
  &::after {
    content: "";
    background-color: rgba(48, 45, 45, 0.5);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    position: absolute;
  } */
`;

const Bildungs = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const BindungText = styled.p`
  font-size: 15px;
  text-align: left;
  line-height: 25px;
  margin-top: 10px;

  span {
    color: #adc906;
  }
`;

const Scan = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={scan} alt="printing" />
      </ImageDiv>
      <div>
        <Header>Scannen</Header>
        <div>
          <UnorderedList>
            <li>sofort zum Mitnehmen.</li>
            <li>farbig und schwarzweiß.</li>
            <li>brillante Ergebnisse (abhängig von der Vorlage).</li>
            <li>Standard DIN-Formate A6, A5, A4, A3, A3+, A2, A1, A0.</li>
            <li>Sonderformate mit extremen Überlängen bis hin zu Meterware.</li>
            <li>individuelle Auflagenstärken (ab 1 Stück).</li>
          </UnorderedList>
          <Bildungs>
            <BindungText>
              Sie möchten die Dokumente für die Zukunft speichern? Auf CD bzw.
              DVD oder auf einem USB-Stick* können Sie Ihre Daten gleich
              mitnehmen.
            </BindungText>
            <BindungText>
              Dateiformate: .pdf, .jpg, .tiff * USB-Sticks sind bei uns (noch)
              nicht erhältlich.
            </BindungText>
            <BindungText>
              Service: Auch beim Digitalisieren können Sie sich auf unseren
              Service verlassen:
            </BindungText>
            <BindungText>
              Unterlagen abgeben und nach Fertigstellung wieder abholen.
            </BindungText>
          </Bildungs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Scan;
