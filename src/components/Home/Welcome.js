import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const WelcomeContainer = styled.div`
  width: 96%;
  margin: auto;
  background-color: #adc906;

  //Bigger tablet
  @media (min-width: 768px) {
    /* CSS */
    position: relative;
    height: 300px;
    background-color: unset;
    margin: 20px;
  }

  //Laptop

  @media (min-width: 1025px) {
    /* CSS */
    height: 400px;
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
    height: 500px;
  }
`;

const Wilkommen = styled.h1`
  font-size: 52px;
  font-weight: 800;
  opacity: 0.2;
  padding: 0px 10px;
  //Bigger tablet
  @media (min-width: 768px) {
    /* CSS */

    /* position: absolute; */
    /* transform: rotate(-90deg); */
    /* transform-origin: 0 0; */

    font-size: 82px;
    color: #adc906;
  }

  //Laptop

  @media (min-width: 1025px) {
    /* CSS */
    font-size: 120px;
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;
const Schon = styled.h4`
  color: white;
  text-transform: capitalize;
  font-weight: 600;

  padding: 0px 10px;
  //Bigger tablet
  @media (min-width: 768px) {
    /* CSS */
    /* display: none; */
    background-color: #adc906;
    width: 40%;
    top: 120px;
    position: absolute;
    padding: 40px;
    text-align: left;
    z-index: -1;
  }

  //Laptop

  @media (min-width: 1025px) {
    /* CSS */
    bottom: 0;
    text-align: center;
    padding: 100px 80px 0px 20px;
    width: 45%;
    
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
    width: 55%;
  }
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
  //Bigger tablet
  @media (min-width: 768px) {
    /* CSS */
    width: 70%;
    background-color: aliceblue;
    text-align: right;
    margin: 2rem 0rem auto auto;
    padding: 6rem 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    z-index: -1;
   
  }

  //Laptop

  @media (min-width: 1025px) {
    /* CSS */
    padding: 9rem 1rem 0rem 14rem;
    line-height: 30px;
    width: 60%;
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
    width: 50%;
  }
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
      <Schon ref={SchonText}>Schön, dass Sie uns gefunden haben !</Schon>
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
