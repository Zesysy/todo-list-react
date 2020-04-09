import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--color-mainLight);
  color: var(--color-white);
  font-size: 1.3rem;
  border-radius: 1.5rem;
  border: none;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Error = styled.div`
  color: var(--color-error);
  visibility: ${({ show }) => (show ? "visibile" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "20px" : "10px")});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 2rem;
  font-size: 1.3rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
