import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { FormWrapper, StyledForm } from "../../style/elementsStyle";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Heading from "../../components/Heading";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup.string().required("Le mot de passe est requis"),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
            <Field
              type="email"
              name="email"
              placeholder="Votre email ..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Votre mot de passe ..."
              component={Input}
            />
            <Button disabled={!isValid} type="submit">
              Identification
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
