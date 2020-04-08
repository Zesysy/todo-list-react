import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import NavItem from "./NavItem";

const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked }) => {
  return (
    <Nav mobile={mobile}>
      <Ul mobile={mobile}>
        <NavItem mobile={mobile} clicked={clicked} link="/">
          Accueil
        </NavItem>
        <NavItem mobile={mobile} clicked={clicked} link="/todos">
          Todos
        </NavItem>
      </Ul>
    </Nav>
  );
};

NavItems.propTypes = {
  mobile: PropTypes.bool,
  clicked: PropTypes.func,
};

export default NavItems;
