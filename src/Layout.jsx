import React from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
`;

const Layout = ({ children }) => {
  return (
    <>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Layout;
