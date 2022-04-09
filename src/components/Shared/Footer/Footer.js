import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import brochure from "../../../assest/web_broschur.pdf";

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

const FooterLink = styled(Link)`
  list-style: none;
  margin-bottom: 8px;
  color: aliceblue ;
  text-decoration: none;
  color: black;
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


const Download = styled.div`

width: 80%;
margin: auto;


p{
  font-size: 12px;
  margin-top: 10px;
  text-align: center;

}

a{
  margin: 10px 0px; 
  color: aliceblue;
  text-decoration: none;
  font-size: 12px;
  text-align: center;
  display: block;
}
`

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterUpper>
        <FooterNav>
          <FooterLink to="/kontact">Contact</FooterLink>
          {/* <FooterLink to='/address'>Address</FooterLink> */}
          <FooterLink to="/disclaimer">Disclaimer</FooterLink>
          <FooterLink to="/dataprotection">Data Protection</FooterLink>
          <FooterLink to="/impressum">Imprint</FooterLink>
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
      <Download>
        <p>
          Für Sie zum downloaden unsere Info-Broschüre, in der Sie alles über
          unser Leistungsangebot nachlesen können.
        </p>
        <a href={brochure}>Info-Broschüre, deutsch (*.pdf, 4.2MB).</a>
      </Download>

      {/* <div>
          facebook Logo
          instagram logo
      </div> */}
      <CopyRight>© {getYear} .Kopie & Druck . All Rights Reserved.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;
