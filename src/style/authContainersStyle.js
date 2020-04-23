import styled from "styled-components";

// Style of the different elements to the Auth Containers

export const VerifyEmailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const DeleteAccountWrapper = styled.div`
  cursor: pointer;
  color: var(--color-error);
  font-size: 1.3rem;
  margin-top: 2rem;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
`;
