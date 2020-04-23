import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import * as yup from "yup";

import {
  ButtonsWrapper,
  StyledForm,
  MessageWrapperModal,
} from "../../style/elementsStyle";
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

const AddTodo = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const getTodos = useSelector((state) => state.todos);

  return (
    <>
      <Button color="main" contain onClick={() => setModalOpened(true)}>
        Ajouter une tâche
      </Button>
      <Modal opened={modalOpened} closed={() => setModalOpened(false)}>
        <Heading noMargin size="h1" color="text">
          Créez votre nouvelle tâche
        </Heading>
        <Heading size="h4" color="text">
          Notez votre todo et cliquez sur ajouter
        </Heading>
        <Formik
          initialValues={{
            todo: "",
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { resetForm }) => {
            const result = await dispatch(actions.addTodo(values));
            if (result) {
              setModalOpened(false);
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
                  loading={getTodos.loading ? "Ajout..." : null}
                >
                  Ajouter
                </Button>
                <Button
                  color="main"
                  type="button"
                  contain
                  onClick={() => {
                    setModalOpened(false);
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

export default AddTodo;
