import React from "react";
import styled from "styled-components";
import HeroOne from "../../assest/printer1.jpg";
import HeroTwo from "../../assest/printer2.jpg";

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ViewMore = styled.button`
  padding: 15px 30px;
  background-color: #adc906;
  border: none;
  color: white;
  cursor: pointer;
`;

const GalleryParagraph = styled.p`
  font-size: 50px;
  font-weight: 800;
  opacity: 0.2;
  width: 96%;
  margin: auto;
`;

const Gallery = () => {
  return (
    <div>
      <GalleryParagraph>GALLERY</GalleryParagraph>
      <div>
        <HeroImage src={HeroTwo} alt="heroTwo" />
        <HeroImage src={HeroOne} alt="heroOne" />
        <HeroImage src={HeroTwo} alt="heroTwo" />
      </div>

      <ViewMore>View More</ViewMore>
    </div>
  );
};

export default Gallery;
