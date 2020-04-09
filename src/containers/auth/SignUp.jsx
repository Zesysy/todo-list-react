import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { FormWrapper, StyledForm } from "../../style/elementsStyle";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";
import Heading from "../../components/Heading";

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
    .min(8, "Le mot de passe est top court"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], `Ce n'est pas le même mot de passe`)
    .required("Vous devez confirmer votre mot de passe"),
});

const SignUp = () => {
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
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
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
            <Field
              type="text"
              name="firstName"
              placeholder="Votre prénom"
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Votre nom"
              component={Input}
            />
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
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirmez votre mot de passe ..."
              component={Input}
            />
            <Button disabled={!isValid} type="submit">
              Enregistrer
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUp;