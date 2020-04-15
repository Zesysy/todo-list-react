import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import {
  FormWrapper,
  StyledForm,
  MessageWrapper,
} from "../../style/elementsStyle";
import { signUpFields } from "../../data/fieldItems";
import * as actions from "../../actions";

import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Heading from "../../components/Heading";
import Message from "../../components/Message";

const SignUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Votre prénom est requis")
    .min(3, "Trop court")
    .max(25, "Trop long"),
  lastName: yup
    .string()
    .required("Votre nom est requis")
    .min(3, "Trop court")
    .max(25, "Trop long"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe est top court"), // minimum accept to Firebase
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], `Ce n'est pas le même mot de passe`)
    .required("Vous devez confirmer votre mot de passe"),
});

// TODO: See to merge them with Login
const SignUp = () => {
  const getAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.cleanUp());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values) => {
        await dispatch(actions.signUp(values));
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Créez un nouveau compte
          </Heading>
          <Heading size="h4" color="white">
            Rentrez vos coordonnées ici
          </Heading>
          <StyledForm>
            {signUpFields.map(({ type, name, placeholder }, key) => (
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
              loading={getAuth.loading ? "Inscription en cours..." : null}
              type="submit"
            >
              Enregistrer
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

export default SignUp;
