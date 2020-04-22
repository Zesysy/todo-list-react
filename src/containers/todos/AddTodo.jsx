import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { ButtonsWrapper, StyledForm } from "../../style/elementsStyle";

import Heading from "../../components/custom/Heading";
import Input from "../../components/utils/Input";
import Button from "../../components/utils/Button";
import Modal from "../../components/utils/modal/Modal";

const TodoSchema = yup.object().shape({
  todo: yup
    .string()
    .required("Vous devez renseignez une tâche")
    .min(4, "Trop court"),
});

const AddTodo = () => {
  const [modalOpened, setModalOpened] = useState(false);
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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, isValid }) => (
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
                >
                  Ajouter
                </Button>
                <Button
                  color="main"
                  contain
                  onClick={() => setModalOpened(false)}
                >
                  Annuler
                </Button>
              </ButtonsWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddTodo;
