import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { FormWrapper, StyledForm } from "../../style/elementsStyle";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Heading from "../../components/Heading";
import { loginFields } from "../../data/fieldItems";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe est top court"),
});

// TODO: See to merge them with SignUp
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
            {loginFields.map(({ type, name, placeholder }, key) => (
              <Field
                key={key}
                type={type}
                name={name}
                placeholder={placeholder}
                component={Input}
              />
            ))}
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
