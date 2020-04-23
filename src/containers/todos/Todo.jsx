import React from "react";

import { TodoWrapper } from "../../style/todosContainersStyle";

const Todo = ({ todo }) => {
  return <TodoWrapper>{todo.todo}</TodoWrapper>;
};

export default Todo;
