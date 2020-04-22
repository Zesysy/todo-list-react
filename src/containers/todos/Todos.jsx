import React from "react";

import { TodosWrapper, InnerWrapper } from "../../style/todosContainersStyle";
import { Container } from "../../style/elementsStyle";

import Heading from "../../components/custom/Heading";

const Todos = () => {
  return (
    <TodosWrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size="h1" color="white">
            Votre journal de Todos
          </Heading>
          <Heading size="h4" color="white">
            Tout ce que vous avez à faire pour le moment...
          </Heading>
        </InnerWrapper>
      </Container>
    </TodosWrapper>
  );
};

export default Todos;
