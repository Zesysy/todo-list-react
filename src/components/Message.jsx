import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledParagraph = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ error, success }) => {
    if (error) return "var(--color-error)";
    if (success) return "var(--color-validation)";
    else return "var(--color-main)";
  }};
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visibile" : "hidden")};
  transition: all 0.2s;
`;

const Message = ({ children, error, success, show }) => {
  return (
    <StyledParagraph error={error} success={success} show={show}>
      {children}
    </StyledParagraph>
  );
};

Message.propTypes = {
  children: PropTypes.node,
  error: PropTypes.bool,
  success: PropTypes.bool,
  show: PropTypes.string,
};

export default Message;
