import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import styled from "styled-components";
import delivery from "../../assest/delivery.jpg";

const ImageContainer = styled.img`
  width: 100%;
  display: block;
`;

const ImageDiv = styled.div`
  position: relative;
  z-index: -1;

`;

const Header = styled.h1`
  margin: 0px auto 20px 0px;

  width: 92%;
  background-color: #adc906;
  color: #eaeef1;
padding: 10px 10px 10px 20px;

`;

const Subheader = styled.p`
color: #adc906;
margin-bottom: 20px;

`

const UnorderedList = styled.ul`


li{
list-style: none;
margin-bottom: 10px;
border-bottom: 1px solid  #adc906 ;
padding-bottom: 10px;
line-height: 20px;
}
`

const DeliveryContainer = styled.div`
width: 90%;
margin: auto;
`

const Delivery = () => {
  return (
    <div>
      <Navbar />
      <ImageDiv>
        <ImageContainer src={delivery} alt="delivery" />
      </ImageDiv>
      <Header>Our services for you</Header>
      <DeliveryContainer>
        
        <Subheader>We also offer you the following service:</Subheader>
        <UnorderedList>
          <li>Sending and receiving emails.</li>
          <li>
            Collection and delivery service for your large orders within the
            city of Dessau.
          </li>
          <li>
            Consignments of goods that are outside of our service can be sent
            with Deutsche Post, UPS or a courier.
          </li>
          <li>Sale of different types of paper.</li>
        </UnorderedList>
      </DeliveryContainer>
      <Footer />
    </div>
  );
};

export default Delivery;
