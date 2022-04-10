import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(fab, faAngleDown, faAngleUp);

const OpenService = styled(FontAwesomeIcon)`
  color: white;
  font-size: 29px;

  margin-left: 30px;
  cursor: pointer;
  
  //tablet view
  @media (min-width: 481px)  {
  }

  //Bigger tablet
  @media (min-width: 768px)  {
    /* CSS */
    color: black;
    font-size: 12px;
    margin-left: 10px;
    
  }

  //Laptop

  @media (min-width: 1025px)  {
    /* CSS */
    font-size: 16px;

  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const CloseService = styled(FontAwesomeIcon)`
  color: white;
  font-size: 29px;
  margin-left: 30px;
  cursor: pointer;
  display: none;
  //tablet view
  @media (min-width: 481px)  {
  }

  //Bigger tablet
  @media (min-width: 768px)  {
    /* CSS */
    color: black;
    font-size: 12px;
    margin-left: 10px;
  }

  //Laptop

  @media (min-width: 1025px)  {
    /* CSS */
    font-size: 16px;
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const Servicess = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-between;


  @media (min-width: 481px)  {
  }

  //Bigger tablet
  @media (min-width: 768px)  {
    /* CSS */
    margin-bottom: 0px;
    position: relative;
    
  }

  //Laptop

  @media (min-width: 1025px)  {
    /* CSS */
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const ServicesOffered = styled.ul`
  display: flex;
  flex-direction: column;

  //tablet view
  @media (min-width: 481px)  {
  }

  //Bigger tablet
  @media (min-width: 768px)  {
    /* CSS */
    color: #e6e7dc;
    position: absolute;
    width: 300px;
    background-color: #adc906;
    top: 20px;
    left: 0px;
  }

  //Laptop

  @media (min-width: 1025px)  {
    /* CSS */
    top: 40px;
    padding: 10px 0px;
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const Offered = styled(Link)`
  list-style: none;
  margin-bottom: 10px;
  margin-left: 20px;
  border-bottom: 1px solid #7b8158;
  padding-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  color: aliceblue;
  //tablet view
  @media (min-width: 481px)  {
  }

  //Bigger tablet
  @media (min-width: 768px)  {
    /* CSS */
   
  }

  //Laptop

  @media (min-width: 1025px)  {
    /* CSS */
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const NavLink = styled.li`
  list-style: none;
  color: #eaeef1;
  font-size: 20px;
  font-weight: 500;

  //tablet view
  @media (min-width: 481px)  {
  }

  //Bigger tablet
  @media (min-width: 768px)  {
    /* CSS */

    font-size: 12px;
    color: black;
    font-size: 12px;
    margin-bottom: 0px;
    font-weight: 700;
  }

  //Laptop

  @media (min-width: 1025px)  {
    /* CSS */
    font-size: 16px;
  }

  //Desktop

  @media (min-width: 1281px) {
    /* CSS */
  }
`;

const Services = () => {
  const [menuOpened, setMenuOpend] = useState(false);
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
    <div>
      <Servicess onClick={() => menuIconClicked()}>
        <NavLink>Services</NavLink>
        <OpenService icon={faAngleDown} style={removeHam()} />
        <CloseService
          icon={faAngleUp}
          style={flipIcons()}
          onClick={() => closeIconClicked()}
        />
      </Servicess>
      <ServicesOffered style={slideMenu()}>
        <Offered to="/printing">Printing</Offered>
        <Offered to="/binding">Bindings</Offered>
        <Offered to="/cad-reprography">CAD & Reprography</Offered>
        <Offered to="/designs">Designs</Offered>
        <Offered to="/scanning">Scanning</Offered>
        <Offered to="/laminating">Laminating</Offered>
        <Offered to="/posters">Posters</Offered>
        <Offered to="/photocopy">Photocopy</Offered>
        <Offered to="/textiles">Textiles</Offered>
        <Offered to="/delivery">Delivery</Offered>
        <Offered to="/students">For Students</Offered>
      </ServicesOffered>
    </div>
  );
};

export default Services;
