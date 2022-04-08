import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import binding from "../../assest/binding.jpg";
import styled from "styled-components";

const BodyContainer = styled.div``;

const Header = styled.h1`
  margin: 20px auto 20px 0px;
  width: 60%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 5px 0px 10px 30px;
`;

const ImageContainer = styled.img`
  width: 100%;
`;

const ImageDiv = styled.div``;

const Preamble = styled.p`
  width: 90%;
  margin: auto;
  font-size: 15px;
  text-align: left;
  line-height: 25px;
`;

const Bildungs = styled.div`
  width: 90%;
  margin: auto;
`;

const BindungContainer = styled.div`
  margin-bottom: 10px;
`;

const BindungTitle = styled.h5`
  margin: 10px 0px;
  color: #adc906;
  font-weight: 900;
`;

const BindungText = styled.p`
  font-size: 15px;
  text-align: left;
  line-height: 25px;
`;

const BindungAsterik = styled.p`
  width: 90%;
  margin: auto;
  background-color: #adc906;
  color: #eaeef1;
  padding: 10px;
`;

const Binding = () => {
  return (
    <div>
      <Navbar />
      <BodyContainer>
        <ImageDiv>
          <ImageContainer src={binding} alt="printing" />
        </ImageDiv>
        <Header>Bindungen</Header>
        <Preamble>
          Wohin mit losen Blattsammlungen? Oder die Bachelorarbeit ist
          geschrieben und gedruckt und was hält das Werk nun zusammen? Natürlich
          eine der verschiedenen Bindemöglichkeiten die ihr bei uns erhaltet:
        </Preamble>
        <Bildungs>
          <BindungContainer>
            <BindungTitle>Thermobindung*</BindungTitle>
            <BindungText>
              VipCover - fester Bucheinband der auf der Titelseite mit einer
              Gold- oder Silberprägung versehen werden kann SteelCover -
              flexibler Bucheinband der aus einem lederartigen Rücken mit
              transparenter Vorder- und Rückfolie besteht.
            </BindungText>
          </BindungContainer>
          <BindungContainer>
            <BindungTitle>Wire-O-Bindungen*</BindungTitle>
            <BindungText>
              Drahtspiralbindung - sie hat den Vorteil, dass sie komplett plan
              aufgeschlagen werden kann und auch bei hoher Beanspruchung über
              eine sehr gute Haltbarkeit verfügt.
            </BindungText>
          </BindungContainer>
          <BindungContainer>
            <BindungTitle>Kalenderbindung*</BindungTitle>
            <BindungText>
              Die Drahtspiralbindung mit Kalenderaufhängung, inkl.
              Daumenstanzung, sorgt für komfortables Umblättern.
            </BindungText>
          </BindungContainer>
        </Bildungs>

        <BindungAsterik>* in verschiedenen Farben erhältlich</BindungAsterik>
      </BodyContainer>
      <Footer />
    </div>
  );
};

export default Binding;
