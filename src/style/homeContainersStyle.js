import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 10rem);
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    max-width: 80%;
    margin: auto;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const Icon = styled.a`
  text-decoration: none;
  color: var(--color-text);
  font-size: 2.5rem;
  cursor: pointer;
  margin: 5px;

  &:hover {
    color: var(--color-mainLighter);
    text-decoration: none;
  }
`;




