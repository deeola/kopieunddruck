import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import member1 from "../../assest/member1.jpg";
import member2 from "../../assest/member2.jpg";

const Team = styled.div`
  width: 96%;

  margin: auto;
`;
const TeamMember = styled.div`
  margin-top: 20px;
`;
const TeamMemberImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 15px;
`;

const ImageContainer = styled.div`
  width: 100%;
  
`;
const TeamMemberName = styled.p`
  margin-top: 10px;
  font-weight: 700;
  color: #adc906;
`;
const TeamMemberPosition = styled.p`
  font-style: italic;
  color: #adc906;
`;

const AboutTop = styled.div`
  width: 96%;
  margin: auto;

  h1 {
    color: #adc906;
    padding: 20px;
  }

  p {
    padding: 10px;
    line-height: 26px;
  }
`;

const Meet = styled.h4`
  width: 96%;

  margin: auto;
  color: white;
  background-color: #adc906;
  padding: 10px;
  border-radius: 5px;
`;

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutTop>
        <h1>About Us</h1>
        <p>
          Schön, dass Sie uns gefunden haben Schauen Sie sich auf unserer
          Webseite um und stöbern Sie durch das Leistungsangebot. Wenn Sie nicht
          fündig werden, kontaktieren Sie uns einfach per Telefon oder Email.
          Gern vereinbaren wir einen Termin für Ihre persönliche Anfrage.
          Besuchen Sie uns direkt im Zentrum von Dessau. Im Downloadbereich
          finden Sie unsere aktuelle Broschüre sowie Flyer. Wir bieten Ihnen u.a
        </p>
      </AboutTop>
      <Team>
        <Meet>Meet out Team Members</Meet>
        <TeamMember>
          <ImageContainer>
            <TeamMemberImage src={member1} />
          </ImageContainer>

          <TeamMemberName>Christoph Jensch</TeamMemberName>
          <TeamMemberPosition>Bereich Repro</TeamMemberPosition>
        </TeamMember>
        <TeamMember>
          <ImageContainer>
            <TeamMemberImage src={member2} />
          </ImageContainer>

          <TeamMemberName>Christopher Jensch</TeamMemberName>
          <TeamMemberPosition>Bereich Reproductive</TeamMemberPosition>
        </TeamMember>
      </Team>

      <Footer />
    </div>
  );
};

export default About;
