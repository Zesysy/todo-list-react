import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Trop court"),
});

const Login = () => {
  return (
    <div style={{ padding: "3rem" }}>
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
          <Form>
            <Field type="email" name="email" placeholder="Votre email ..." />
            <ErrorMessage name="email" />
            <Field
              type="password"
              name="password"
              placeholder="Votre mot de passe ..."
            />
            <ErrorMessage name="password" />
            <button type="submit">Envoyer</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
