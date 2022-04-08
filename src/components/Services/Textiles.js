import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import textile from "../../assest/textile.jpg";
import styled from "styled-components";

const BodyContainer = styled.div``;

const Header = styled.h1`
  margin: 10px auto 20px 0px;
  width: 60%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 10px 10px 10px 20px;
`;

const ImageContainer = styled.img`
  width: 100%;
  display: block;
`;

const ImageDiv = styled.div`
  position: relative;
  z-index: -1;
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

const Textiles = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={textile} alt="printing" />
      </ImageDiv>
      <div>
        <Header>Textile</Header>
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
            save time? Hand in the originals and pick them up again later. We
            are also happy to take care of shipping to the destination.
          </BindungText>
        </Bildungs>
      </div>
      <Footer />
    </div>
  );
};

export default Textiles;
