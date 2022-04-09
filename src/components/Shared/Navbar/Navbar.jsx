import React, { useState } from "react";
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

library.add(fab, faBars, faXmark, faPhone, faAngleDown, faAngleUp);

//Styling

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: #eaeef1;
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
  transition: all 0.375s ease-in;
  animation-name: Nav;
  animation-duration: 500ms;

  @keyframes Nav {
    from {
      transform: scale(0);
      transform: translateX(-700);
    }
    to {
      transform: scale(1);
      transform: translateX(0);
    }
  }

  //tablet view
  @media screen and (min-width: 415px) {
    display: flex !important;
    align-items: center;
    width: 20rem;
    position: unset;
    flex-direction: row;
    top: unset;
    background-color: unset;
    z-index: unset;
    height: unset;
  }
  @media screen and (min-width: 843px) {
  }
`;

const NavLink = styled(Link)`
  list-style: none;
  color: #eaeef1;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: all 0.375s ease-in;
  animation-name: Nav;
  animation-duration: 900ms;
  text-decoration: none;

  @keyframes Nav {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CallIcon = styled(FontAwesomeIcon)`
  color: #adc906;
  font-size: 22px;
  cursor: pointer;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
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
    return menuClosed ? {} : { display: "block" };
  };

  const closeIconClicked = () => {
    setMenuOpend(false);
  };

  return (
    <NavWrapper>
      <LogoWrapper to="/">
        <Logo src={logo} />
      </LogoWrapper>

      <NavList style={slideMenu()}>
        <Services />
        <NavLink to="/worksamples">Work Samples</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/kontact">Contact Us</NavLink>
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
