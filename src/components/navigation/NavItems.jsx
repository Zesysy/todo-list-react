import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

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
  const auth = useSelector((state) => state.firebase.auth);
  let links;

  auth.uid && !auth.emailVerified
    ? (links = (
        <Ul mobile={mobile}>
          <NavItem mobile={mobile} clicked={clicked} link="/logout">
            Déconnexion
          </NavItem>
        </Ul>
      ))
    : auth.uid && auth.emailVerified
    ? (links = (
        <Ul mobile={mobile}>
          <NavItem mobile={mobile} clicked={clicked} link="/">
            Accueil
          </NavItem>
          <NavItem mobile={mobile} clicked={clicked} link="/todos">
            Todos
          </NavItem>
          <NavItem mobile={mobile} clicked={clicked} link="/profile">
            Profile
          </NavItem>
          <NavItem mobile={mobile} clicked={clicked} link="/logout">
            Déconnexion
          </NavItem>
        </Ul>
      ))
    : (links = (
        <Ul mobile={mobile}>
          <NavItem mobile={mobile} clicked={clicked} link="/">
            Accueil
          </NavItem>
          <NavItem mobile={mobile} clicked={clicked} link="/login">
            Connexion
          </NavItem>
          <NavItem mobile={mobile} clicked={clicked} link="/signup">
            Inscription
          </NavItem>
        </Ul>
      ));

  return <Nav mobile={mobile}>{links}</Nav>;
};

NavItems.propTypes = {
  mobile: PropTypes.bool,
  clicked: PropTypes.func,
};

export default NavItems;
