import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import students from "../../assest/students.jpg";
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
  margin: 0px auto 20px 0px;

  width: 92%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 10px 10px 10px 20px;
`;

const StudentsContainer = styled.div`
width: 90%;
margin: auto;

p{
    margin-bottom: 20px;
    line-height: 22px;

    span{
        color: #adc906;
        margin-right: 10px;
    }
}
`

const Students = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={students} alt="delivery" />
      </ImageDiv>
      <Header>Für Schüler und Studenten</Header>
      <StudentsContainer>
        <p>
          Referate, Hausarbeiten, Handouts, Bachelor- und Masterarbeiten - wir
          sind für Euch da, wenn es um die Fertigstellung Eurer Arbeiten geht.
          Egal ob es sich um die komplette Fertigung dreht (vom Druck über die
          Bindung bis zur Titelprägung) oder ob ihr die ausgedruckten Seiten zum
          Binden bringt, bei uns bekommt ihr es in bester Qualität und zu einem
          fairen Preis.
        </p>
        <p>
          Die Art und Farbe der Bindung und den Titel für die Prägung
          entscheidet natürlich ihr.
        </p>
        <p>
          <span>Tipp:</span>
          Am besten bringt ihr die fertigen Druckdaten als .pdf-Datei mit und
          plant etwas Zeit für die Fertigung ein, je nach Auftragslage unseres
          Hauses.
        </p>
      </StudentsContainer>
      <Footer />
    </div>
  );
};

export default Students;
