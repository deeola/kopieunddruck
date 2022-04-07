import React from "react";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  width: 96%;
  margin: auto;
  background-color:#adc906 ;
`;

const Wilkommen = styled.p`
  font-size: 50px;
  font-weight: 800;
  opacity: 0.2;
`;
const Schon = styled.p`
color: white;
text-transform: capitalize;
font-weight: 600;

padding: 0px 10px ;
`;
const Kopie = styled.p`
width: 96%;
margin: 20px auto;
line-height: 23px;
font-size: 14px;
letter-spacing: 2px;
font-weight: 400;
text-align: left;

`;

const Welcome = () => {
  return (
    <WelcomeContainer>
      <Wilkommen>Wilkommen</Wilkommen>
      <Schon>Schön, dass Sie uns gefunden haben</Schon>
      <Kopie>
        Kopie & Druck offers you the entire processing and production of your
        order from pre-press to logistics in-house and thus guarantees short
        delivery times and binding deadlines - professional, inexpensive and
        everything from a single source.
      </Kopie>
    </WelcomeContainer>
  );
};

export default Welcome;
