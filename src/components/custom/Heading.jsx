import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const baseHeader = css`
  color: ${({ color }) =>
    color === "white"
      ? "var(--color-white)"
      : color === "text"
      ? "var(--color-text)"
      : "var(--color-main)"};
  margin-top: 0;
  letter-spacing: 1px;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "3rem")};
`;

const StyledHeading = styled.h1`
  font-size: ${(props) =>
    props.size === "h1"
      ? "2.3rem"
      : props.size === "h2"
      ? "2rem"
      : props.size === "h3"
      ? "1.8rem"
      : props.size === "h4"
      ? "1.5rem"
      : "1.5rem"};
  ${(props) => (props.size === "h1" ? "text-transform: uppercase" : null)};
  ${baseHeader};
`;

const Heading = ({ children, size, color, noMargin, ...rest }) => {
  return (
    <StyledHeading size={size} noMargin={noMargin} color={color} {...rest}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  noMargin: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.object]),
};

export default Heading;
