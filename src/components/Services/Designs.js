import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import design from "../../assest/design.jpg";

const BodyContainer = styled.div``;

const Header = styled.h1`
  margin: 0pxx auto 20px 0px;

  width: 50%;
  background-color: #adc906;
  color: #eaeef1;
  padding-left: 30px;
`;

const ImageContainer = styled.img`
  width: 100%;
  display: block;
`;

const ImageDiv = styled.div`
  position: relative;
  z-index: -1;
  /* 
  &::after {
    content: "";
    background-color: rgba(48, 45, 45, 0.5);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    position: absolute;
  } */
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

const Designs = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={design} alt="printing" />
      </ImageDiv>
      <div>
        <Header>Individual Design</Header>
        <Bildungs>
          <BindungText>
            Are you planning an event and want to hit the mark with the
            invitation? Or are you looking for individual menu cards for your
            restaurant or even seasonal cards, such as B. for the Easter and
            Christmas period? Then you've come to the right place - because we
            design according to your wishes.
          </BindungText>
          <BindungText>
            We have also made provisions for corporate customers: we design all
            of your business stationery, from letterhead, company folders and
            company stamps to lanyards, writing pads, calendars and much more.
          </BindungText>
          <BindungText>
            <span>Tip: </span>
            Simply make an appointment for a non-binding consultation by
            telephone on 0340 - 240 43 331 or simply drop by us.
          </BindungText>
        </Bildungs>
      </div>
      <Footer />
    </div>
  );
};

export default Designs;
