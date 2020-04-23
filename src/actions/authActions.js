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
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // Send the verification email
    const user = firebase.auth().currentUser;
    firebase.auth().useDeviceLanguage(); // To apply the default browser preference  & update the language code
    await user.sendEmailVerification();

    await firestore.collection("users").doc(response.user.uid).set({
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
  } catch (error) {
    console.log(error.message);
  }
};

// Login action creator
export const signIn = (data) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.AUTH_FAIL, payload: error.message });
  }
  dispatch({ type: actions.AUTH_END });
};

// Clean up state
export const cleanUp = () => ({
  type: actions.CLEAN_UP,
});

// Verify email actionTypes
// Doesn't work with some mail-providers such as @sfr or @wanadoo
// No solutions found or could provide your own SMTP
export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  dispatch({ type: actions.VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    firebase.auth().useDeviceLanguage();
    await user.sendEmailVerification();

    dispatch({ type: actions.VERIFY_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.VERIFY_FAIL, payload: error.message });
  }
};

// Send recover password
export const recoverPassword = (data) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  dispatch({ type: actions.RECOVERY_START });
  try {
    // send email here
    firebase.auth().useDeviceLanguage();
    await firebase.auth().sendPasswordResetEmail(data.email);

    dispatch({ type: actions.RECOVERY_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.RECOVERY_FAIL, payload: error.message });
  }
};

// Edit profile
export const editProfile = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const { uid: userId, email: userEmail } = getState().firebase.auth;

  dispatch({ type: actions.PROFILE_EDIT_START });
  try {
    //edit the user profile
    if (data.email !== userEmail) {
      await user.updateEmail(data.email);
    }

    await firestore.collection("users").doc(userId).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });

    if (data.password.length > 0) {
      await user.updatePassword(data.password);
    }

    dispatch({ type: actions.PROFILE_EDIT_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: error.message });
  }
};

// Delete user
export const deleteUser = () => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actions.DELETE_START });
  try {
    await firestore.collection("users").doc(userId).delete();
    await firestore.collection("todos").doc(userId).delete();

    await user.delete();
  } catch (error) {
    dispatch({ type: actions.DELETE_FAIL, payload: error.message });
  }
};
