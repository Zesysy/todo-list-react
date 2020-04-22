import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";

import { TodosWrapper, InnerWrapper } from "../../style/todosContainersStyle";
import { Container } from "../../style/elementsStyle";

import Heading from "../../components/custom/Heading";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";

const Todos = () => {
  const getUserId = useSelector((state) => state.firebase.auth.uid);
  useFirestoreConnect([
    {
      collection: "todos",
      doc: getUserId,
    },
  ]);

  const todos = useSelector((state) => state.firestore.data.todos);

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
          <AddTodo />
        </InnerWrapper>
      </Container>
    </TodosWrapper>
  );
};

export default Todos;
