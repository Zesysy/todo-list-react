import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Navbar from "./components/navigation/Navbar";
import NavbarResponsive from "./components/navigation/NavbarResponsive";

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarResponsive />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
