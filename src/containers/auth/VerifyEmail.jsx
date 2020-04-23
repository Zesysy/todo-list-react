import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormWrapper, MessageWrapper } from "../../style/elementsStyle";
import { VerifyEmailWrapper } from "../../style/authContainersStyle";
import * as actions from "../../actions";

import Heading from "../../components/custom/Heading";
import Button from "../../components/utils/Button";
import Message from "../../components/utils/Message";

const VerifyEmail = () => {
  const getVerifyEmail = useSelector((state) => state.auth.verifyEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.cleanUp());
  }, [dispatch]);

  return (
    <FormWrapper>
      <VerifyEmailWrapper>
        <Heading noMargin color="white" size="h1">
          Vérifier votre adresse email
        </Heading>
        <Heading color="white" size="h4" style={{ textAlign: "center" }}>
          Rendez-vous dans votre boîte mail, et s'il vous plaît confirmer votre
          email
        </Heading>
        <Button
          loading={getVerifyEmail.loading ? "Envoi en cours..." : null}
          disabled={getVerifyEmail.loading}
          onClick={() => dispatch(actions.verifyEmail())}
        >
          Renvoyer l'email de confirmation
        </Button>
        <MessageWrapper>
          <Message error show={getVerifyEmail.error}>
            {getVerifyEmail.error}
          </Message>
        </MessageWrapper>
        <MessageWrapper>
          <Message success show={getVerifyEmail.error === false}>
            Message envoyé avec succés
          </Message>
        </MessageWrapper>
      </VerifyEmailWrapper>
    </FormWrapper>
  );
};

export default VerifyEmail;
