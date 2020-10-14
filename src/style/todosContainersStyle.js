import styled from "styled-components";

export const TodosWrapper = styled.main`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

export const TodoWrapper = styled.div`
  width: 80%;
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
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-text);
`;

export const TodoList = styled.div `
  display: flex;
  flex-direction: column;
`

export const TodoContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 0;
  border-bottom: 1px #fbc1bb solid;
`

export const TodoContent = styled.div `
  cursor: pointer;
`

export const TodoDate = styled.div `
  display: flex;
  align-items: center;
  border: 6px solid var(--color-main);
  background-color: var(--color-main);
  color: var(--color-white);
  border-radius: 50px;
  min-width: 70px;
  justify-content: space-between;
  `