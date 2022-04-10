import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import logo from "../../../assest/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Services from "./Services";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

library.add(fab, faBars, faXmark, faPhone, faAngleDown, faAngleUp);

//Styling

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: #eaeef1;

  //tablet view
  @media (min-width: 481px) and (max-width: 769px) {
  }

  //Bigger tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    /* CSS */
  }

  //Laptop

  @media (min-width: 1025px) and (max-width: 1280px) {
    /* CSS */
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

//Logo

const LogoWrapper = styled(Link)`
  width: 170px;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 100%;
`;

//Navlist and NavIcon

const NavList = styled.ul`
  position: absolute;
  background-color: #adc906;
  width: 100%;
  display: flex;
  top: 80px;
  left: 0;
  flex-direction: column;
  padding: 20px 20px;
  justify-content: space-between;
  z-index: 2;
  visibility: hidden;

  //tablet view
  @media (min-width: 481px) and (max-width: 769px) {
  }

  //Bigger tablet
  @media (min-width: 768px) {
    display: flex !important;
    position: relative;
    visibility: visible;
    margin-left: 0px;
    flex-direction: row;
    width: 60%;
    top: unset;
    left: unset;
    padding: 20px;
    background-color: unset;

    text-align: center !important;
    align-items: center !important;

    padding: unset;
  }

  //Laptop

  @media (min-width: 1025px) {
    /* CSS */
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const NavLink = styled(Link)`
  list-style: none;
  color: #eaeef1;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  text-decoration: none;

  //tablet view
  @media (min-width: 481px) and (max-width: 769px) {
  }

  //Bigger tablet
  @media (min-width: 768px) {
    /* CSS */
    color: black;
    font-size: 12px;
    margin-bottom: 0px;
  }

  //Laptop

  @media (min-width: 1025px) {
    /* CSS */
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const CallIcon = styled(FontAwesomeIcon)`
  color: #adc906;
  font-size: 22px;
  cursor: pointer;

  //tablet view
  @media (min-width: 481px) and (max-width: 769px) {
  }

  //Bigger tablet
  @media (min-width: 768px) {
    /* CSS */
    display: none;
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;

  //Bigger tablet
  @media (min-width: 768px) {
    /* CSS */
    display: none;
  }
`;

const Open = styled(FontAwesomeIcon)`
  color: #adc906;
  font-size: 25px;
  cursor: pointer;
`;

const Close = styled(FontAwesomeIcon)`
  color: #adc906;
  font-size: 29px;
  display: none;
  cursor: pointer;
`;

//Functiom

const Navbar = () => {
  //Nav Menu Open and Close State

  //change NavIcon on click

  const [menuOpened, setMenuOpend] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [menuClosed, setMenuClosed] = useState(false);

  const slideMenu = () => {
    return menuOpened
      ? { visibility: "visible" }
      : { display: "none", marginLeft: -930 };
  };

  const flipIcons = () => {
    return menuOpened ? { display: "block" } : {};
  };

  const removeHam = () => {
    return menuOpened ? { display: "none" } : {};
  };

  const menuIconClicked = () => {
    setMenuOpend(!menuOpened);
    animateNavbar();
    return menuClosed ? {} : { display: "block" };
  };

  const closeIconClicked = () => {
    setMenuOpend(false);
  };

  // Animation

  const ServicesText = useRef(null);
  const WorkText = useRef(null);
  const AboutText = useRef(null);
  const ContactText = useRef();
  const DataText = useRef(null);

  const animateNavbar = () => {
    gsap.from(ServicesText.current, {
      x: 40,
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.2,
      yoyo: true,
      opacity: 0,
    });

    gsap.from(WorkText.current, {
      y: 40,
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.4,
      yoyo: true,
      opacity: 0,
    });
    gsap.from(AboutText.current, {
      y: 40,
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.6,
      yoyo: true,
      opacity: 0,
    });
    gsap.from(ContactText.current, {
      y: 40,
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.8,
      yoyo: true,
      opacity: 0,
    });
    gsap.from(DataText.current, {
      y: 40,
      duration: 0.8,
      ease: "easeInOut",
      delay: 1,
      yoyo: true,
      opacity: 0,
    });
  };

  return (
    <NavWrapper>
      <LogoWrapper to="/">
        <Logo src={logo} />
      </LogoWrapper>

      <NavList style={slideMenu()}>
        <Services ref={ServicesText} />
        <NavLink ref={WorkText} to="/worksamples">
          Work Samples
        </NavLink>
        <NavLink ref={AboutText} to="/about-us">
          About Us
        </NavLink>
        <NavLink ref={ContactText} to="/kontact">
          Contact Us
        </NavLink>
        <NavLink ref={DataText} to="/datenaufbereitung">
          Datenaufbereitung
        </NavLink>
      </NavList>
      <CallIcon icon={faPhone} />

      <NavIcons>
        <Open
          icon={faBars}
          style={removeHam()}
          onClick={() => menuIconClicked()}
        />
        <Close
          icon={faXmark}
          style={flipIcons()}
          onClick={() => closeIconClicked()}
        />
      </NavIcons>
    </NavWrapper>
  );
};

export default Navbar;
