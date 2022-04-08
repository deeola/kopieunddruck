import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import poster from "../../assest/poster.jpg";
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
  width: 90%;
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

const Posters = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={poster} alt="printing" />
      </ImageDiv>
      <div>
        <Header>Poster und Plakatdrucke</Header>
        <Bildungs>
          <BindungText>
            Für Präsentationen oder einfach zur Wandgestaltung eignen sich
            Plakate, Poster und Banner ganz besonders. Auf hochwertigem Papier
            mit glänzender oder matter Oberfläche gedruckt schaffen Sie
            Eindruck. Bei uns ab 1 Stück erhältlich in den Standard DIN-Formaten
            A3, A2, A1, A0 und in Sonderformaten. Hierbei beträgt die maximale
            Druckbreite ca. 1,10 m und die maximale Drucklänge 91 m.
          </BindungText>
          <BindungText>
            <span> Tipp:</span>
            Um Ihrer Präsentation noch mehr Ausdruck zu verleihen und sie
            flexibel einsetzen zu können, erhalten Sie Banner bei uns auch mit
            Stangen- und Transportsystem.
          </BindungText>
        </Bildungs>
      </div>
      <Footer />
    </div>
  );
};

export default Posters;
