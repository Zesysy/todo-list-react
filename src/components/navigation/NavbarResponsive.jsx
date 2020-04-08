import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import { Container } from "../../style/elementsStyle";
import BurgerMenu from "./BurgerMenu";

const FixedWrapper = styled.header`
  position: fixed;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const NavbarResponsive = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <BurgerMenu
            opened={isOpened}
            clicked={() => setIsOpened(!isOpened)}
          />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default NavbarResponsive;
