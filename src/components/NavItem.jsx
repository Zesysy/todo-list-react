import React from "react";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const A = styled.a`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 1.3rem;
  padding: 1rem;
  margin: 0 1rem;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    border-bottom: 2px solid var(--color-white);
  }
`;

const NavItem = ({ link, children }) => {
  return (
    <Li>
      <A href="https://www.google.com/">{children}</A>
    </Li>
  );
};

export default NavItem;
