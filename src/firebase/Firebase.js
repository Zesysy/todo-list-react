import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyB7KaZujI3CMeOqhm2SSuCTW58Ph0tkCK0",
  authDomain: "todosauth-4dff7.firebaseapp.com",
  databaseURL: "https://todosauth-4dff7.firebaseio.com",
  projectId: "todosauth-4dff7",
  storageBucket: "todosauth-4dff7.appspot.com",
  messagingSenderId: "45148762165",
  appId: "1:45148762165:web:5efeb2b5faf10e76eec17c",
  measurementId: "G-WD8GJZCR0C",
};

firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
