import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const Header = styled.h1`
  margin: 0px auto 20px 0px;

  width: 92%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 10px 10px 10px 20px;
`;

const Subheading = styled.h4`
  color: #adc906;
  margin: 15px 0px;
  font-weight: 800;
  font-size: 19px;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const Text = styled.p`
  line-height: 24px;
  width: 100%;
`;

const Quelle = styled.div`
  display: flex;
  margin: 20px 0px;

  span{
    color: #adc906;
    margin-right: 5px;
  }

 
`;

const SubheadingImpress = styled.h3`
width: 90%;
margin: 10px auto;
color: #adc906;

`

const Impressum = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Header>Impressum</Header>
        <SubheadingImpress>Inhaltlich verantwortlich gemäß §10 Abs. 3 MDStV:</SubheadingImpress>
        <Container>
          <Text>Kopie & Druck GbR</Text>
          <Text>Zerbster Straße 21</Text>
          <Text>06844 Dessau-Roßlau</Text>
        </Container>
        <Container>
          <Subheading>Vertreten durch:</Subheading>
          <Text>Rainer Paegel, Christiane Lange, Christoph Jensch</Text>
        </Container>
        <Container>
          <Subheading>Kontakt:</Subheading>
          <Quelle>
            <span>Telefon:</span> 0340 - 240 43 328
          </Quelle>
          <Quelle>
            <span>E-Mail: </span> kontaktkopie-druck.com
          </Quelle>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
