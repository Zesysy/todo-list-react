import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: ${({ contain }) => (contain ? "auto" : "100%")};
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: var(--color-white);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: ${({ color }) =>
    color === "red"
      ? "var(--color-error)"
      : color === "main"
      ? "var(--color-main)"
      : "var(--color-mainLighter)"};
  margin: 1.5rem 0 2rem 0;
  border: none;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    margin-bottom: 0rem;
  }
`;

const Button = ({ children, disabled, loading, contain, color, ...rest }) => {
  return (
    <StyledButton color={color} contain={contain} disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  contain: PropTypes.bool,
  color: PropTypes.string,
  rest: PropTypes.oneOfType([PropTypes.object]),
};

export default Button;
