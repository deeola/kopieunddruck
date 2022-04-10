import React from "react";
import styled from "styled-components";
import HeroOne from "../../assest/printer1.jpg";
import HeroTwo from "../../assest/printer2.jpg";
import { Link } from "react-router-dom";

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ViewMore = styled(Link)`
margin: 5px 0px;
padding: 10px;
display: block;
width: 30%;
text-decoration: none;
font-weight: 700;
  background-color: #adc906;
  border: none;
  color: white;
  cursor: pointer;
`;

const GalleryParagraph = styled.h1`
  font-size: 50px;
  font-weight: 800;
  opacity: 0.2;
  width: 96%;
  margin: auto;
`;

const ImageContainer = styled.div`

width: 96%;
margin: auto;

`

const Gallery = () => {
  return (
    <div>
      <GalleryParagraph>GALLERY</GalleryParagraph>
      <ImageContainer>
      
        <HeroImage src={HeroTwo} alt="heroTwo" />
        <HeroImage src={HeroOne} alt="heroOne" />
        <HeroImage src={HeroTwo} alt="heroTwo" />
      </ImageContainer>

      <ViewMore to='/worksamples'>View More</ViewMore>
    </div>
  );
};

export default Gallery;
