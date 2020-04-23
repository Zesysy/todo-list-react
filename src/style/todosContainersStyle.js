import styled from "styled-components";

export const TodosWrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

export const TodoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 4rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin-bottom: 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  text-align: center;
  color: var(--color-white);
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

export const editStyles = {
  color: "var(--color-main)",
  margin: "0 1rem",
  cursor: "pointer",
  fontSize: "2rem",
};

export const deleteStyles = {
  color: "var(--color-error)",
  margin: "0 1rem",
  cursor: "pointer",
  fontSize: "2rem",
};

export const DeleteTodoWrapper = styled.div`
  margin: 1rem 0rem;
  font-size: 1.3rem;
  text-align: center;
  color: var(--color-white);
`;
