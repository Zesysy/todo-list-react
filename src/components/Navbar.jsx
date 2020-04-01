import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`;

const Navbar = () => {
  return <Wrapper>I am a Navbar</Wrapper>;
};

export default Navbar;
