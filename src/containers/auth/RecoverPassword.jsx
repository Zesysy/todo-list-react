import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

import { FormWrapper, StyledForm } from "../../style/elementsStyle";
import Heading from "../../components/Heading";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";

const RecoverSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
});

const RecoverPassword = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={RecoverSchema}
      onSubmit={async (values) => {
        console.log({ values });
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
            <Button disabled={!isValid || isSubmitting} type="submit">
              Envoyer
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default RecoverPassword;
