import React from "react";
import { Field } from "formik";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  FormWrapper,
  StyledForm,
  MessageWrapper,
} from "../style/elementsStyle";

import Heading from "./Heading";
import Input from "./form/Input";
import Button from "./form/Button";
import Message from "./Message";
import CustomLink from "./CustomLink";

// Content common to auth containers, includes titles, inputs and their placeholder with rendering conditions depending on the component
const CommonForm = ({
  isValid,
  isSubmitting,
  customLink,
  formItems,
  recover,
}) => {
  const getAuth = useSelector((state) => state.auth);
  const getRecoverPassword = useSelector((state) => state.auth.recoverPassword);

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
          ) : (
            <MessageWrapper>
              <Message error show={getAuth.error}>
                {getAuth.error}
              </Message>
            </MessageWrapper>
          )}
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
};

export default CommonForm;
