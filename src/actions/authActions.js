export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  dispatch({ type: "AUTH_START" });
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    await firestore.collection("users").doc(result.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });

    dispatch({ type: "AUTH_END" });
  } catch (error) {
    dispatch({ type: "AUTH_FAIL", payload: error.message });
  }
};
