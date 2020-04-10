export const signUp = (data) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(result.user.uid);

    await firestore.collection("users").doc(result.user.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
    });
  } catch (error) {}
};
