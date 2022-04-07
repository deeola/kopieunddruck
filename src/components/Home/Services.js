import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFigma } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faBarcode,
  faBars,
  faBook,
  faFolder,
  faPaste,
  faPhone,
  faPrint,
  faShirt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars, faXmark, faPhone, faAngleDown, faAngleUp);

const ServicesContainer = styled.div`
  width: 100%;
  margin: auto;
  background-color: #eaeef1;
  padding: 10px 0px;
`;

const ServicesParagraph = styled.p`
  font-size: 50px;
  font-weight: 800;
  opacity: 0.2;
  width: 96%;
  margin: auto;
`;

const EachService = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #adc906;
  margin-bottom: 10px;
  align-items: center;
  border-radius: 15px 50px;
  padding: 10px 0px;
  cursor: pointer;

  p{
    color: black;
    font-weight: 500;
    font-size: 20px;

  }

`;

const ServiceGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
margin-top: 20px;
width: 95%;
margin: 20px auto;


`

const IconService = styled(FontAwesomeIcon)`
color: white;
font-size: 50px;
padding: 20px 0px;

`

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesParagraph>Services</ServicesParagraph>
      <p>We also a wide range of servcies</p>
      <div >
        <ServiceGrid>
          <EachService>
            <IconService icon={faPaste} />
            <p> Photocopy</p>
          </EachService>
          <EachService>
            <IconService icon={faPrint} />
            <p> Printing</p>
          </EachService>
          <EachService>
            <IconService icon={faFigma} />
            <p> Design</p>
          </EachService>
          <EachService>
            <IconService  icon={faBook} />
            <p> Binding</p>
          </EachService>
          <EachService>
            <IconService  icon={faShirt} />
            <p> Textile</p>
          </EachService>
          <EachService>
            <IconService  icon={faFolder} />
            <p>Scanning</p>
          </EachService>
        </ServiceGrid>
      </div>
    </ServicesContainer>
  );
};

export default Services;
