import React from "react";

import { FormWrapper } from "../../style/elementsStyle";

import Heading from "../../components/Heading";

const VerifyEmail = () => {
  return (
    <FormWrapper>
      <Heading noMargin color="white" size="h1">
        Vérifier votre adresse mail
      </Heading>
      <Heading color="white" size="h4" style={{ textAlign: "center" }}>
        Rendez-vous dans votre boîte mail, et s'il vous plaît confirmer votre
        email
      </Heading>
    </FormWrapper>
  );
};

export default VerifyEmail;
