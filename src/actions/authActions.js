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
    console.log(result);
  } catch (error) {}
};
