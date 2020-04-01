import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import { Container } from "../style/elementsStyle";

const FixedWrapper = styled.header`
  position: fixed;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <nav>
            <ul>
              <li>Home</li>
              <li>Todos</li>
            </ul>
          </nav>
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
