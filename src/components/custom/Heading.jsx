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

const H1 = styled.h1`
  ${baseHeader}
  font-size: ${(props) => (props.size === "h1" ? "2.3rem" : "1rem")};
  ${(props) => (props.size === "h1" ? "text-transform: uppercase" : null)};
`;

const H2 = styled.h2`
  ${baseHeader};
  font-size: ${(props) => (props.size === "h2" ? "2rem" : "1rem")};
`;

const H3 = styled.h3`
  ${baseHeader};
  font-size: ${(props) => (props.size === "h3" ? "1.8rem" : "1rem")};
`;

const H4 = styled.h4`
  ${baseHeader};
  font-size: ${(props) => (props.size === "h4" ? "1.5rem" : "1rem")};
`;

const Heading = ({ children, size, color, noMargin, ...rest }) => {
  return size === "h1" ? (
    <H1 size={size} color={color} noMargin={noMargin} {...rest}>
      {children}
    </H1>
  ) : size === "h2" ? (
    <H2 size={size} color={color} noMargin={noMargin} {...rest}>
      {children}
    </H2>
  ) : size === "h3" ? (
    <H3 size={size} color={color} noMargin={noMargin} {...rest}>
      {children}
    </H3>
  ) : size === "h4" ? (
    <H4 size={size} color={color} noMargin={noMargin} {...rest}>
      {children}
    </H4>
  ) : (
    <H1 size={size} color={color} noMargin={noMargin} {...rest}>
      {children}
    </H1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  color: PropTypes.string,
  noMargin: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.object]),
};

export default Heading;
