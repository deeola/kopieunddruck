import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import druck from "../../assest/druck.jpg";

const BodyContainer = styled.div``;

const Header = styled.h1`
  margin: 20px auto 20px 0px;
  
  width: 50%;
  background-color: #adc906;
  color:#eaeef1 ;
  padding-left: 30px;
`;

const ImageContainer = styled.img`
  width: 100%;

`;

const ImageDiv = styled.div``;

const UnorderedList = styled.ul`
background-color: #eaeef1;
padding: 20px 40px;
width: 96%;
margin: 10px auto auto auto;
border-radius: 20px;

li{
  list-style: square;

  margin-bottom: 10px;
 
}
`

const Printing = () => {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <ImageDiv>
          <ImageContainer src={druck} alt="printing" />
        </ImageDiv>
        <Header>Drucken</Header>

        <UnorderedList>
          <li>Sofort zum Mitnehmen.</li>
          <li>Farbig und schwarzweiß.</li>
          <li>Brillante Ergebnisse (abhängig von der Vorlage).</li>
          <li>Standard DIN-Formate A6, A5, A4, A3, A3+, A2, A1, A0.</li>
          <li>Sonderformate mit extremen Überlängen bis hin zu Meterware.</li>
          <li>
            Individuelle Auflagenstärken (ab 1 Stück bis hin zur
            Tausenderauflage).
          </li>
        </UnorderedList>
      </BodyContainer>
      <Footer />
    </div>
  );
};

export default Printing;
