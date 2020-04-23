import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { DeleteTodoWrapper } from "../../style/todosContainersStyle";
import { ButtonsWrapper, MessageWrapperModal } from "../../style/elementsStyle";
import * as actions from "../../actions";

import Modal from "../../components/utils/modal/Modal";
import Button from "../../components/utils/Button";
import Heading from "../../components/custom/Heading";
import Message from "../../components/utils/Message";

const DeleteTodo = ({ opened, closed, todo }) => {
  const dispatch = useDispatch();
  const getDeleteTodo = useSelector((state) => state.todos.deleteTodo);

  return (
    <Modal opened={opened} closed={closed}>
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
        <Button color="main" contain onClick={closed}>
          Annuler
        </Button>
      </ButtonsWrapper>
      <MessageWrapperModal>
        <Message error opened={getDeleteTodo.error}>
          {getDeleteTodo.error}
        </Message>
      </MessageWrapperModal>
    </Modal>
  );
};

DeleteTodo.propTypes = {
  opened: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    todo: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default DeleteTodo;
