import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  width: 100%;
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: var(--color-white);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: var(--color-mainLighter);
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
`;

const Button = ({ children, disabled, loading, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.object]),
};

export default Button;
