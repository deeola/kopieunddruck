import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faAngleDown, faAngleUp);

const OpenService = styled(FontAwesomeIcon)`
  color: white;
  font-size: 29px;

  margin-left: 30px;
  cursor: pointer;
`;

const CloseService = styled(FontAwesomeIcon)`
  color: white;
  font-size: 29px;
  margin-left: 30px;
  cursor: pointer;
  display: none;
`;

const Servicess = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-between;
`;

const ServicesOffered = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Offered = styled.li`
  list-style: none;
  margin-bottom: 10px;
  margin-left: 20px;
  border-bottom: 1px solid #7b8158;
  padding-bottom: 10px;
  cursor: pointer;
`;

const NavLink = styled.li`
  list-style: none;
  color: #eaeef1;
  font-size: 20px;
  font-weight: 500;

  transition: all 0.375s ease-in;
  animation-name: Nav;
  animation-duration: 900ms;

  @keyframes Nav {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
      <Servicess>
        <NavLink>Services</NavLink>
        <OpenService
          icon={faAngleDown}
          style={removeHam()}
          onClick={() => menuIconClicked()}
        />
        <CloseService
          icon={faAngleUp}
          style={flipIcons()}
          onClick={() => closeIconClicked()}
        />
      </Servicess>
      <ServicesOffered style={slideMenu()}>
        <Offered>Bindings</Offered>
        <Offered>CAD & Reprography</Offered>
        <Offered>Designs</Offered>
        <Offered>Scanning</Offered>
        <Offered>Laminating</Offered>
        <Offered>Posters</Offered>
        <Offered>Photocopy</Offered>
        <Offered>Textiles</Offered>
      </ServicesOffered>
    </div>
  );
};

export default Services;
