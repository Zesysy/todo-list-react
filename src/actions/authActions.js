import * as actions from "../actions/authActionsTypes";

// Sign up action creator
export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  dispatch({ type: actions.AUTH_START });
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    await firestore.collection("users").doc(result.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });

    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.AUTH_FAIL, payload: error.message });
  }
  dispatch({ type: actions.AUTH_END });
};

// Logout action creator
// Here not dispatch actions, because if the user is not logged in he will be redirected
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};

// Login action creator
export const signIn = (data) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};
