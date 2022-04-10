import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const WelcomeContainer = styled.div`
  width: 96%;
  margin: auto;
  background-color: #adc906;
`;

const Wilkommen = styled.h1`
  font-size: 52px;
  font-weight: 800;
  opacity: 0.2;
  padding: 0px 10px;
`;
const Schon = styled.h4`
  color: white;
  text-transform: capitalize;
  font-weight: 600;

  padding: 0px 10px;
`;
const Kopie = styled.p`
  width: 96%;
  margin: 20px auto;
  line-height: 23px;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: left;
  padding: 0px 10px 20px 10px;
`;

const Welcome = () => {
  const WelcomeText = useRef(null);
  const SchonText = useRef();

  useEffect(() => {

  
    gsap.from(WelcomeText.current, {
      x: 40,
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.2,
      yoyo: true,
      opacity: 0,
    });

    gsap.from(SchonText.current, {
      y: 40,
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.2,
      yoyo: true,
      opacity: 0,
    });
  }, [WelcomeText]);

  return (
    <WelcomeContainer>
      <Wilkommen ref={WelcomeText}>Wilkommen</Wilkommen>
      <Schon ref={SchonText}>Schön, dass Sie uns gefunden haben</Schon>
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
