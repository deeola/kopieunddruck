import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import laminate from "../../assest/laminate.jpg";

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

const Laminate = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={laminate} alt="printing" />
        <Header>Laminating and Lining</Header>
      </ImageDiv>

      <Bildungs>
        <BindungText>
          You only know “laminate” from laying floors? Then watch out: In order
          to make menus, posters and notices more robust against sunlight and
          dirt, you can cover them with a thin layer, the so-called laminate.
        </BindungText>
        <BindungText>A distinction is made between 2 variants:</BindungText>
        <BindungText>
          Hot laminate: the print is provided with a protective layer on both
          sides, so it can also be used outdoors. Despite its stability, it
          remains flexible in shape and you can easily transport it.
        </BindungText>
        <BindungText>
          Laminating: this is a one-sided sealing of the surface and should
          therefore only be used indoors
        </BindungText>
        <BindungText>
          <span>Other examples of use: </span>
          parking permits, school and student ID cards,
          business cards, pocket calendars, bookmarks and much more.
        </BindungText>
      </Bildungs>

      <Footer />
    </div>
  );
};

export default Laminate;
