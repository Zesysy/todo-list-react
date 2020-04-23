import React, { useState } from "react";

import {
  TodoWrapper,
  Controls,
  editStyles,
  deleteStyles,
} from "../../style/todosContainersStyle";

import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }) => {
  const [openIsDeleting, setOpenIsDeleting] = useState(false);
  const [openIsEditing, setOpenIsEditing] = useState(false);

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
          onClick={() => setOpenIsEditing(true)}
        ></i>
        <i
          className="fas fa-trash-alt"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Supprimer"
          style={deleteStyles}
          onClick={() => setOpenIsDeleting(true)}
        ></i>
        <DeleteTodo
          todo={todo}
          show={openIsDeleting}
          close={() => setOpenIsDeleting(false)}
        />
      </Controls>
    </TodoWrapper>
  );
};

export default Todo;
