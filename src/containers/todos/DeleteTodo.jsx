import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { DeleteTodoWrapper } from "../../style/todosContainersStyle";
import { ButtonsWrapper, MessageWrapperModal } from "../../style/elementsStyle";
import * as actions from "../../actions";

import Modal from "../../components/utils/modal/Modal";
import Button from "../../components/utils/Button";
import Heading from "../../components/custom/Heading";
import Message from "../../components/utils/Message";

const DeleteTodo = ({ show, close, todo }) => {
  const dispatch = useDispatch();
  const getDeleteTodo = useSelector((state) => state.todos.deleteTodo);

  return (
    <Modal opened={show} closed={close}>
      <Heading noMargin size="h1" color="white">
        Tâche terminée
      </Heading>
      <Heading size="h4" color="white">
        Êtes-vous sûr de vouloir la supprimer ?
      </Heading>
      <DeleteTodoWrapper>"{todo.todo}"</DeleteTodoWrapper>
      <ButtonsWrapper>
        <Button
          color="red"
          contain
          onClick={() => dispatch(actions.deleteTodo(todo.id))}
          disabled={getDeleteTodo.loading}
          loading={getDeleteTodo.loading ? "Suppression en cours..." : null}
        >
          Supprimer
        </Button>
        <Button color="main" contain onClick={close}>
          Annuler
        </Button>
      </ButtonsWrapper>
      <MessageWrapperModal>
        <Message error show={getDeleteTodo.error}>
          {getDeleteTodo.error}
        </Message>
      </MessageWrapperModal>
    </Modal>
  );
};

export default DeleteTodo;
