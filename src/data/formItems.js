import {
  loginFields,
  signUpFields,
  recoverPasswordFields,
} from "../data/fieldItems";

export const loginFormItems = [
  {
    title: "Connectez-vous à votre compte",
    subtitle: "Rentrez vos coordonnées ici",
    fieldItems: loginFields,
    buttonLoading: "Identification en cours...",
    buttonPlaceHolder: "Identification",
  },
];

export const signUpFormItems = [
  {
    title: "Créez un nouveau compte",
    subtitle: "Rentrez vos coordonnées ici",
    fieldItems: signUpFields,
    buttonLoading: "Inscription en cours...",
    buttonPlaceHolder: "Enregistrer",
  },
];

export const recoverPasswordFormItems = [
  {
    title: " Récupérez votre mot de passe",
    subtitle: "Renseignez votre email",
    fieldItems: recoverPasswordFields,
    buttonLoading: "Envoi en cours...",
    buttonPlaceHolder: "Envoyer",
  },
];
