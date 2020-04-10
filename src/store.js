import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import firebase from "./firebase/Firebase";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import rootReducer from "./reducers";

// Access to the redux extension only in development environment
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

// TODO : Check if necessary to downgrade version with "npm i --save react-redux@5.1.1 react-redux-firebase@2.2.4", because if using this way of doing with current version "TypeError: Object (…) is not a function "
const store = createStore(
  rootReducer,
  composeEnhancers(
    // reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;
