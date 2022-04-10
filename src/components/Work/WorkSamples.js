import React, { useEffect, useRef } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import binding from "../../assest/binding.jpg";
import laminate from "../../assest/laminate.jpg";
import design from "../../assest/design.jpg";
import poster from "../../assest/poster.jpg";
import druck from "../../assest/druck.jpg";
import scan from "../../assest/scan.jpg";
import gsap from "gsap";




const PreviousWorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
  width: 96%;
  margin:20px auto;
`;

const ImageContainerOne = styled.div`
grid-column: 1/2;
grid-row: 1;

`;
const ImageContainerTwo = styled.div`
grid-column: 2/3;
grid-row: 1;
`;
const ImageContainerThree = styled.div`
grid-column: 1/3;
grid-row: 2/4;
`;
const ImageContainerFour = styled.div``;
const ImageContainerFive = styled.div``;
const ImageContainerSix = styled.div`
grid-column: 1/3;
grid-row: 5/7;
`;


const Image = styled.img`
  width: 100%;
  display: block;
`;

const Header = styled.h1`
  margin: 20px auto 20px 0px;
  width: 90%;
  background-color: #adc906;
  color: #eaeef1;
  padding: 5px 0px 10px 30px;
`;

const WorkSamples = () => {

  const FirstImage = useRef();
  const FirstImageContainer = useRef()

  const SecondImage = useRef();
  const SecondImageContainer = useRef()

  const ThirdImage = useRef();
  const ThirdImageContainer = useRef()



  
  useEffect(() => {
   
   
   
    gsap.from(FirstImageContainer.current, {
     
      duration: 0.8,
      ease: 'Power3.easeOut',
      x: -20
      
    });

    gsap.from(FirstImage.current, {

      duration: 1,
      ease: 'Power3.easeOut',
      scale: 0.9,
      delay: .2
    });

    gsap.from(SecondImageContainer.current, {
     
      duration: 0.8,
      ease: 'Power3.easeOut',
      x: 20
      
    });

    gsap.from(SecondImage.current, {

      duration: 1,
      ease: 'Power3.easeOut',
      scale: 0.9,
      delay: .2
    });

    gsap.from(ThirdImageContainer.current, {
     
      duration: 0.8,
      ease: 'Power3.easeOut',
      scale: 1
      
    });

    gsap.from(ThirdImage.current, {
      duration: 1.2,
      ease: 'Power3.easeOut',
      scale: 0.9,
      
    });



    
  

  },[])
  return (
    <div>
      <Navbar />
      <Header>
             Work Samples
          </Header>
      <PreviousWorkGrid>
        <ImageContainerOne ref={FirstImageContainer}>
          <Image src={druck} alt="cad" ref={FirstImage} />
        </ImageContainerOne>
        <ImageContainerTwo ref={SecondImageContainer}>
          <Image ref={SecondImage} src={laminate} alt="lamiate" />
        </ImageContainerTwo>
        <ImageContainerThree ref={ThirdImageContainer}>
          <Image ref={ThirdImage} src={binding} alt="binding" />
        </ImageContainerThree>
        <ImageContainerFour>
          <Image src={poster} alt="binding" />
        </ImageContainerFour>
        <ImageContainerFive>
          <Image src={design} alt="binding" />
        </ImageContainerFive>
        <ImageContainerSix>
          <Image src={scan} alt="binding" />
        </ImageContainerSix>
      </PreviousWorkGrid>
      
      <Footer />
    </div>
  );
};

export default WorkSamples;
