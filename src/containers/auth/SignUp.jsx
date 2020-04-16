import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import * as actions from "../../actions";

import { signUpFormItems } from "../../data/formItems";
import CommonForm from "../../components/CommonForm";

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

const SignUp = () => {
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
        <CommonForm
          isValid={isValid}
          isSubmitting={isSubmitting}
          loginFormItems={signUpFormItems}
        />
      )}
    </Formik>
  );
};

export default SignUp;
