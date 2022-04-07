import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const FooterContainer = styled.footer`
  background-color: #adc906;
  margin-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FooterNav = styled.ul`
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const FooterLink = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;

const CopyRight = styled.p`
  font-size: 10px;
`;

const Facebook = styled(FontAwesomeIcon)``;

const Logo = styled.div``;

const FacebookLink = styled.a`
  color: blue;
  text-decoration: none;
  font-size: 30px;
`;

const FooterUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  margin: auto;
  padding-top: 20px;
`;

const Address = styled.div`
  p {
    font-size: 10px;
    margin-top: 5px;
  }
`;

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterUpper>
        <FooterNav>
          <FooterLink>Contact</FooterLink>
          <FooterLink>Address</FooterLink>
          <FooterLink>Disclaimer</FooterLink>
          <FooterLink>Data Protection</FooterLink>
          <FooterLink>Imprint</FooterLink>
        </FooterNav>
        <Logo>
          <FacebookLink
            href="http://www.facebook.de/http://www.facebook.de/kopieunddruck//"
            target="_blank"
          >
            <Facebook icon={faFacebookSquare} />
          </FacebookLink>
          <Address>
            <p>Kopie & Druck GbR</p>
            <p>Zerbster Straße 21</p>
            <p>06844 Dessau-Roßlau</p>
            <p> 0340 - 240 43 328</p>
          </Address>
        </Logo>
      </FooterUpper>

      {/* <div>
          facebook Logo
          instagram logo
      </div> */}
      <CopyRight>© {getYear} .Kopie & Druck . All Rights Reserved.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
