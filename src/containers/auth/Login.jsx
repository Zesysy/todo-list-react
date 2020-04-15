import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import {
  FormWrapper,
  StyledForm,
  MessageWrapper,
} from "../../style/elementsStyle";
import { loginFields } from "../../data/fieldItems";
import * as actions from "../../actions";

import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Heading from "../../components/Heading";
import Message from "../../components/Message";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe est top court"),
});

// TODO: See to merge them with SignUp
const Login = () => {
  const getAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.cleanUp());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        await dispatch(actions.signIn(values));
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Connectez-vous à votre compte
          </Heading>
          <Heading size="h4" color="white">
            Rentrez vos coordonnées ici
          </Heading>
          <StyledForm>
            {loginFields.map(({ type, name, placeholder }, key) => (
              <Field
                key={key}
                type={type}
                name={name}
                placeholder={placeholder}
                component={Input}
              />
            ))}
            <Button
              disabled={!isValid || isSubmitting}
              loading={getAuth.loading ? "Identification en cours..." : null}
              type="submit"
            >
              Identification
            </Button>
            <MessageWrapper>
              <Message error show={getAuth.error}>
                {getAuth.error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
