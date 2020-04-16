import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) =>
    color === "white" ? "var(--color-white)" : "var(--color-main"};
  padding: 2rem 2rem;
  font-size: 1.3rem;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

const CustomLink = ({ link, color, children }) => {
  return (
    <StyledLink to={link} color={color}>
      {children}
    </StyledLink>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default CustomLink;
