import React from "react";

import { DeleteTodoWrapper } from "../../style/todosContainersStyle";
import { ButtonsWrapper } from "../../style/elementsStyle";

import Modal from "../../components/utils/modal/Modal";
import Button from "../../components/utils/Button";
import Heading from "../../components/custom/Heading";

const DeleteTodo = ({ show, close, todo }) => {
  return (
    <Modal opened={show} closed={close}>
      <Heading noMargin size="h1" color="white">
        Tâche terminée
      </Heading>
      <Heading size="h4" color="white">
        Êtes-vous sûr de vouloir la supprimer ?
      </Heading>
      <DeleteTodoWrapper>{todo.todo}</DeleteTodoWrapper>
      <ButtonsWrapper>
        <Button color="red" contain>
          Supprimer
        </Button>
        <Button color="main" contain onClick={close}>
          Annuler
        </Button>
      </ButtonsWrapper>
    </Modal>
  );
};

export default DeleteTodo;
