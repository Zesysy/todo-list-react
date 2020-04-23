import React, { useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";

import {
  TodosWrapper,
  InnerWrapper,
  WrapperContent,
} from "../../style/todosContainersStyle";
import { Container } from "../../style/elementsStyle";

import Heading from "../../components/custom/Heading";
import InputTodo from "./InputTodo";
import { useSelector } from "react-redux";
import Loader from "../../components/utils/Loader";
import Todo from "./Todo";
import Button from "../../components/utils/Button";

const Todos = () => {
  const getUserId = useSelector((state) => state.firebase.auth.uid);
  const [openIsAdding, setOpenIsAdding] = useState(false);

  let content;

  useFirestoreConnect([
    {
      collection: "todos",
      doc: getUserId,
    },
  ]);

  const todos = useSelector((state) => state.firestore.data.todos);

  if (!todos) {
    content = (
      <WrapperContent>
        <Loader isWhite />
      </WrapperContent>
    );
  } else if (!todos[getUserId] || !todos[getUserId].todos) {
    content = (
      <WrapperContent>
        <Heading color="white" size="h2">
          Vous n'avez rien à faire
        </Heading>
      </WrapperContent>
    );
  } else if (todos[getUserId].todos.length === 0) {
    content = (
      <WrapperContent>
        <Heading color="white" size="h2">
          Vous n'avez rien à faire
        </Heading>
      </WrapperContent>
    );
  } else {
    content = (
      <WrapperContent>
        <Heading color="white" size="h2">
          Vous avez {todos[getUserId].todos.length}
          {todos[getUserId].todos.length > 1 ? " tâches" : " tâche"} à faire
        </Heading>
        {todos[getUserId].todos
          .slice(0) // Creates a shallow copy of the object before the reverse to avoid the error: Cannot assign to read only property '0' of object'
          .reverse()
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </WrapperContent>
    );
  }

  return (
    <TodosWrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size="h1" color="white">
            Votre journal de Todos
          </Heading>
          <Heading size="h4" color="white" style={{ textAlign: "center" }}>
            Tout ce que vous avez à faire pour le moment...
          </Heading>
          <Button color="main" contain onClick={() => setOpenIsAdding(true)}>
            Ajouter une tâche
          </Button>
          <InputTodo
            opened={openIsAdding}
            closed={() => setOpenIsAdding(false)}
          />
          {content}
        </InnerWrapper>
      </Container>
    </TodosWrapper>
  );
};

export default Todos;
