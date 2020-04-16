import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import * as actions from "../../actions";

import CommonForm from "../../components/CommonForm";
import { recoverPasswordFormItems } from "../../data/formItems";

const RecoverSchema = yup.object().shape({
  email: yup.string().email("Email invalide").required("L'email est requis"),
});

const RecoverPassword = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.cleanUp());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={RecoverSchema}
      onSubmit={async (values) => {
        await dispatch(actions.recoverPassword(values));
      }}
    >
      {({ isSubmitting, isValid }) => (
        <CommonForm
          isValid={isValid}
          isSubmitting={isSubmitting}
          loginFormItems={recoverPasswordFormItems}
          recover
        />
      )}
    </Formik>
  );
};

export default RecoverPassword;
