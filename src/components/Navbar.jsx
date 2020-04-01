import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
      <ul>
        <li>Home</li>
        <li>Todos</li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
