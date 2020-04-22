import React from "react";
import { useState } from "react";

import { ButtonsWrapper } from "../../style/elementsStyle";

import Button from "../../components/utils/Button";
import Modal from "../../components/utils/modal/Modal";
import Heading from "../../components/custom/Heading";

const AddTodo = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      <Button color="main" contain onClick={() => setModalOpened(true)}>
        Ajouter une tâche
      </Button>
      <Modal opened={modalOpened} closed={() => setModalOpened(false)}>
        <Heading noMargin size="h1" color="text">
          Créez votre nouvelle tâche
        </Heading>
        <Heading size="h4" color="text">
          Notez votre todo et cliquez sur ajouter
        </Heading>
        <p>Todo à noter ici</p>
        <ButtonsWrapper>
          <Button color="main" contain>
            Ajouter
          </Button>
          <Button color="main" contain onClick={() => setModalOpened(false)}>
            Annuler
          </Button>
        </ButtonsWrapper>
      </Modal>
    </>
  );
};

export default AddTodo;
