import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { FormWrapper, StyledForm } from "../../style/elementsStyle";
import Input from "../../components/form/Input";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Trop court"),
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
          <h1>Identifiez-vous ici</h1>
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
            <button type="submit">Envoyer</button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
