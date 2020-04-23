import React from "react";

import {
  TodoWrapper,
  Controls,
  editStyles,
  deleteStyles,
} from "../../style/todosContainersStyle";

const Todo = ({ todo }) => {
  return (
    <TodoWrapper>
      {todo.todo}
      <Controls>
        <i
          className="fas fa-marker"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Editer"
          style={editStyles}
        ></i>
        <i
          className="fas fa-trash-alt"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Supprimer"
          style={deleteStyles}
        ></i>
      </Controls>
    </TodoWrapper>
  );
};

export default Todo;
