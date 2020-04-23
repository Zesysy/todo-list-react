import * as actions from "../actions/todosActionsTypes";

// Add a todo
export const addTodo = (data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actions.ADD_TODO_START });
  try {
    const result = await firestore.collection("todos").doc(userId).get();

    const newTodo = {
      id: new Date().valueOf(), // To get a unique id
      todo: data.todo,
    };

    if (!result.data()) {
      firestore
        .collection("todos")
        .doc(userId)
        .set({
          todos: [newTodo],
        });
    } else {
      firestore
        .collection("todos")
        .doc(userId)
        .set({
          todos: [...result.data().todos, newTodo],
        });
    }

    dispatch({ type: actions.ADD_TODO_SUCCESS });
    return true; // To close the modal
  } catch (error) {
    dispatch({ type: actions.ADD_TODO_FAIL, payload: error.message });
  }
};