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
  const links = [
    { id: 0, path: "/", placeholder: "Accueil" },
    { id: 1, path: "/todos", placeholder: "Todos" },
  ];

  return (
    <Nav mobile={mobile}>
      {" "}
      <Ul mobile={mobile}>
        {" "}
        {links.map(({ path, placeholder }, key) => (
          <NavItem mobile={mobile} clicked={clicked} link={path} key={key}>
            {" "}
            {placeholder}{" "}
          </NavItem>
        ))}{" "}
      </Ul>{" "}
    </Nav>
  );
};

NavItems.propTypes = {
  mobile: PropTypes.bool,
  clicked: PropTypes.func,
};

export default NavItems;
