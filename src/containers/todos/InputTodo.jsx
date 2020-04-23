import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Field } from "formik";
import * as yup from "yup";

import {
  ButtonsWrapper,
  StyledForm,
  MessageWrapperModal,
} from "../../style/elementsStyle";
import { AddTodoItems, EditTodoItems } from "../../data/todosItems";
import * as actions from "../../actions";

import Heading from "../../components/custom/Heading";
import Input from "../../components/utils/Input";
import Button from "../../components/utils/Button";
import Modal from "../../components/utils/modal/Modal";
import Message from "../../components/utils/Message";

const TodoSchema = yup.object().shape({
  todo: yup
    .string()
    .required("Vous devez renseignez une tâche")
    .min(4, "Trop court"),
});

const InputTodo = ({ opened, closed, editTodo }) => {
  const dispatch = useDispatch();
  const getTodos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(actions.cleanUpTodo());
  }, [dispatch]);

  return (
    <>
      <Modal opened={opened} closed={closed}>
        <Heading noMargin size="h1" color="text">
          {editTodo
            ? EditTodoItems.map((item) => item.title)
            : AddTodoItems.map((item) => item.title)}
        </Heading>
        <Heading size="h4" color="text">
          {editTodo
            ? EditTodoItems.map((item) => item.subtitle)
            : AddTodoItems.map((item) => item.subtitle)}
        </Heading>
        <Formik
          initialValues={{
            todo: editTodo ? editTodo.todo : "",
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { resetForm }) => {
            const response = editTodo
              ? await dispatch(actions.editTodo(editTodo.id, values))
              : await dispatch(actions.addTodo(values));
            if (response) {
              closed();
            }
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <StyledForm>
              <Field
                type="text"
                name="todo"
                placeholder="Notez votre todo..."
                component={Input}
              />
              <ButtonsWrapper>
                <Button
                  color="main"
                  contain
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={
                    getTodos.loading
                      ? editTodo
                        ? EditTodoItems.map((item) => item.buttonLoading)
                        : AddTodoItems.map((item) => item.buttonLoading)
                      : null
                  }
                >
                  {editTodo
                    ? EditTodoItems.map((item) => item.buttonPlaceHolder)
                    : AddTodoItems.map((item) => item.buttonPlaceHolder)}
                </Button>
                <Button
                  color="main"
                  type="button"
                  contain
                  onClick={() => {
                    closed();
                    resetForm();
                  }}
                >
                  Annuler
                </Button>
              </ButtonsWrapper>
            </StyledForm>
          )}
        </Formik>
        <MessageWrapperModal>
          <Message error show={getTodos.error}>
            {getTodos.error}
          </Message>
        </MessageWrapperModal>
      </Modal>
    </>
  );
};

InputTodo.propTypes = {
  opened: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
  editTodo: PropTypes.shape({
    todo: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default InputTodo;
