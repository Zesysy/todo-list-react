import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  color: ${({ error, success }) =>
    error
      ? "var(--color-error)"
      : success
      ? "var(--color-validation)"
      : "var(--color-main)"};
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visibile" : "hidden")};
  text-align: center;
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
  show: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Message;
