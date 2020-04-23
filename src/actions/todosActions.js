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
    const response = await firestore.collection("todos").doc(userId).get();

    const newTodo = {
      id: new Date().valueOf(), // To get a unique id
      todo: data.todo,
    };

    if (!response.data()) {
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
          todos: [...response.data().todos, newTodo],
        });
    }

    dispatch({ type: actions.ADD_TODO_SUCCESS });
    return true; // To close the modal
  } catch (error) {
    dispatch({ type: actions.ADD_TODO_FAIL, payload: error.message });
  }
};

// Delete a todo
export const deleteTodo = (id) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actions.DELETE_TODO_START });
  try {
    const response = await firestore.collection("todos").doc(userId).get();
    const previousTodos = response.data().todos;
    const newTodos = previousTodos.filter((todo) => todo.id !== id);

    await firestore.collection("todos").doc(userId).update({
      todos: newTodos,
    });

    dispatch({ type: actions.DELETE_TODO_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.DELETE_TODO_FAIL, payload: error.message });
  }
};
