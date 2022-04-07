import React from "react";
import styled from "styled-components";
import HeroOne from "../../assest/printer1.jpg";
import HeroTwo from "../../assest/printer2.jpg";

const HeroContainer = styled.div`
  width: 95%;
  height: 300px;
  background-color: aliceblue;
  margin: 10px auto;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src={HeroTwo} alt="heroTwo" />
      <HeroImage style={{ display: "none" }} src={HeroOne} alt="heroOne" />
    </HeroContainer>
  );
};

export default Hero;
