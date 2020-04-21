import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../actions";

import { profilePasswordFormItems } from "../../data/formItems";
import CommonForm from "../../components/CommonForm";

const ProfileSchema = yup.object().shape({
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
  password: yup.string().min(8, "Le mot de passe est trop court"),
  confirmPassword: yup.string().when("password", {
    is: (password) => password && password.length > 0, // here we test if the length of the element is greater than 0 & if it exists otherwise error length is undefined
    then: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf([yup.ref("password"), null], `Ce n'est pas le même mot de passe`),
  }),
});

const Profile = () => {
  const dispatch = useDispatch();
  const getFirebase = useSelector((state) => state.firebase);

  useEffect(() => {
    dispatch(actions.cleanUp());
  }, [dispatch]);

  if (!getFirebase.profile.isLoaded) return null; // Check that the state of the firebase profile object is true or not
  return (
    <Formik
      initialValues={{
        firstName: getFirebase.profile.firstName,
        lastName: getFirebase.profile.lastName,
        email: getFirebase.auth.email,
        password: "",
        confirmPassword: "",
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values) => {
        await dispatch(actions.editProfile(values));
      }}
    >
      {({ isSubmitting, isValid }) => (
        <CommonForm
          isValid={isValid}
          isSubmitting={isSubmitting}
          formItems={profilePasswordFormItems}
          profile
        />
      )}
    </Formik>
  );
};

export default Profile;
