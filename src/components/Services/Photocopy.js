import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import photocopy from "../../assest/photocopy.jpg";
import styled from "styled-components";

const ImageContainer = styled.img`
  width: 100%;
  display: block;
`;

const ImageDiv = styled.div`
  position: relative;
  z-index: -1;
`;

const Header = styled.h1`
  margin: 10px auto 20px 0px;
  width: 60%;
  background-color: #adc906;
  color: #eaeef1;
  padding-left: 30px;
  font-size: 24px;
  padding: 10px;
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

const Photocopy = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={photocopy} alt="printing" />
      </ImageDiv>
      <div>
        <Header>Kopieren</Header>
        <UnorderedList>
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
        </UnorderedList>
        <Bildungs>
          <BindungText>
            <span> Service:</span>
            Damit Sie Zeit sparen, geben Sie einfach Ihre Unterlagen bei uns zur
            Vervielfältigung ab und wir erledigen alles.
          </BindungText>
        </Bildungs>
      </div>
      <Footer />
    </div>
  );
};

export default Photocopy;
