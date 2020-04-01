import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1rem;
`;

const Logo = () => {
  return <LogoWrapper>Journal d'une Todo</LogoWrapper>;
};

export default Logo;
