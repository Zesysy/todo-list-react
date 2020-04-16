import React, { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";

import * as actions from "../../actions";

import CommonForm from "../../components/CommonForm";
import { loginFormItems } from "../../data/formItems";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
  password: yup
    .string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe est top court"),
});

const Login = () => {
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
        <CommonForm
          isValid={isValid}
          isSubmitting={isSubmitting}
          loginFormItems={loginFormItems}
          customLink
        />
      )}
    </Formik>
  );
};

export default Login;
