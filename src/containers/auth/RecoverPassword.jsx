import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field } from "formik";
import * as yup from "yup";

import {
  FormWrapper,
  StyledForm,
  MessageWrapper,
} from "../../style/elementsStyle";
import * as actions from "../../actions";

import Heading from "../../components/Heading";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Message from "../../components/Message";

const RecoverSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
});

const RecoverPassword = () => {
  const getRecoverPassword = useSelector((state) => state.auth.recoverPassword);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.cleanUp());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={RecoverSchema}
      onSubmit={async (values) => {
        await dispatch(actions.recoverPassword(values));
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Récupérez votre mot de passe
          </Heading>
          <Heading size="h4" color="white">
            Renseignez votre email
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Votre email..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={getRecoverPassword.loading ? "Envoi en cours..." : null}
              type="submit"
            >
              Envoyer
            </Button>
            <MessageWrapper>
              <Message error show={getRecoverPassword.error}>
                {getRecoverPassword.error}
              </Message>
            </MessageWrapper>
            <MessageWrapper>
              <Message success show={getRecoverPassword.error === false}>
                Message envoyé avec succés
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default RecoverPassword;
