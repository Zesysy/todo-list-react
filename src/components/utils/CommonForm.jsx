import React from "react";
import { Field } from "formik";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  FormWrapper,
  StyledForm,
  MessageWrapper,
  DeleteAccountWrapper,
} from "../../style/elementsStyle";

import Heading from "../custom/Heading";
import Input from "./Input";
import Button from "./Button";
import Message from "./Message";
import CustomLink from "../custom/Link";

// Content common to auth containers, includes titles, inputs and their placeholder with rendering conditions depending on the component
const CommonForm = ({
  isValid,
  isSubmitting,
  customLink,
  formItems,
  recover,
  profile,
  openedModal,
}) => {
  const getAuth = useSelector((state) => state.auth);
  const getRecoverPassword = useSelector((state) => state.auth.recoverPassword);
  const getProfileEdit = useSelector((state) => state.auth.profileEdit);

  return (
    formItems && (
      <FormWrapper>
        <Heading noMargin size="h1" color="white">
          {formItems.map((item) => item.title)}
        </Heading>
        <Heading size="h4" color="white">
          {formItems.map((item) => item.subtitle)}
        </Heading>
        <StyledForm>
          {formItems.map((item) =>
            item.fieldItems.map(({ type, name, placeholder }, key) => (
              <Field
                key={key}
                type={type}
                name={name}
                placeholder={placeholder}
                component={Input}
              />
            ))
          )}
          <Button
            disabled={!isValid || isSubmitting}
            loading={
              getAuth.loading
                ? formItems.map((item) => item.buttonLoading)
                : null
            }
            type="submit"
          >
            {formItems.map((item) => item.buttonPlaceHolder)}
          </Button>
          {customLink ? (
            <CustomLink link="/recover" color="white">
              Mot de passe oublié ?
            </CustomLink>
          ) : null}
          {recover ? (
            <>
              <MessageWrapper>
                <Message error show={getRecoverPassword.error}>
                  {getRecoverPassword.error}
                </Message>
              </MessageWrapper>
              <MessageWrapper>
                <Message success show={getRecoverPassword.error === false}>
                  Message envoyé avec succés
                </Message>
              </MessageWrapper>
            </>
          ) : profile ? (
            <>
              <MessageWrapper>
                <Message error show={getProfileEdit.error}>
                  {getProfileEdit.error}
                </Message>
              </MessageWrapper>
              <MessageWrapper>
                <Message success show={getProfileEdit.error === false}>
                  Votre profile a été mis à jour
                </Message>
              </MessageWrapper>
            </>
          ) : (
            <MessageWrapper>
              <Message error show={getAuth.error}>
                {getAuth.error}
              </Message>
            </MessageWrapper>
          )}
          {openedModal ? (
            <DeleteAccountWrapper onClick={openedModal}>
              Supprimer votre compte
            </DeleteAccountWrapper>
          ) : null}
        </StyledForm>
      </FormWrapper>
    )
  );
};

CommonForm.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  customLink: PropTypes.bool,
  formItems: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  recover: PropTypes.bool,
  profile: PropTypes.bool,
};

export default CommonForm;
