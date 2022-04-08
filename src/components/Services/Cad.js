import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import cad from "../../assest/cad.jpg";

const BodyContainer = styled.div``;

const Header = styled.h1`
  margin: 0px auto 20px 0px;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #adc906;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
`;

const ImageContainer = styled.img`
  width: 100%;
  display: block;
`;

const ImageDiv = styled.div`
  position: relative;
  z-index: -1;

  &::after {
    content: "";
    background-color: rgba(48, 45, 45, 0.5);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    position: absolute;
  }
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

  span{
    color: #adc906;
  }
`;

const Cad = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={cad} alt="printing" />
        <Header>CAD and Reprography</Header>
      </ImageDiv>
      <div>
        <Bildungs>
          <BindungText>
            Are you a construction site manager or architect and need printed
            plan drawings for the next construction site or rough drawings for
            your customer? Then come join us.
          </BindungText>
          <BindungText>
            We digitize, print and copy drawings and large-format plans on
            various materials. As an option, you can get them rolled, folded,
            with or without perforation and/or filing variants.
          </BindungText>
          <BindungText>
            <span>Service: </span>
            save time? Hand in the originals and pick them up again
            later. We are also happy to take care of shipping to the
            destination.
          </BindungText>
        </Bildungs>
      </div>
      <Footer />
    </div>
  );
};

export default Cad;
