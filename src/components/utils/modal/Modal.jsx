import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Backdrop from "./Backdrop";

const WrappedModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? "translate(-50%, -50%)" : "translate(-50%, -150%)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  justify-content: center;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  width: 100%;
  max-width: 50rem;
  box-shadow: 0 0.5rem 3.5em var(--shadow);
  border-radius: 1rem;
  background-color: var(--color-mainLighter);
  transition: all 0.1s;
`;

const InsideWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
`;

// Avoid rendering of all modals
const Modal = React.memo(
  ({ opened, closed, children }) => {
    return ReactDOM.createPortal(
      // Creates a portal. Portals provide a way to render children into a DOM node that exists outside the hierarchy of the DOM component.
      <>
        <Backdrop closed={closed} opened={opened} />
        <WrappedModal opened={opened}>
          <InsideWrapper>{children}</InsideWrapper>
        </WrappedModal>
      </>,
      document.getElementById("id-modal")
    );
  },
  (prevProps, nextProps) => {
    return prevProps.opened === nextProps.opened;
  }
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  opened: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
};

export default Modal;
