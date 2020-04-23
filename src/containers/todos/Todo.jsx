import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  TodoWrapper,
  Controls,
  editStyles,
  deleteStyles,
} from "../../style/todosContainersStyle";

import DeleteTodo from "./DeleteTodo";
import InputTodo from "./InputTodo";

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
          opened={openIsDeleting}
          closed={() => setOpenIsDeleting(false)}
        />
        <InputTodo
          editTodo={todo}
          opened={openIsEditing}
          closed={() => setOpenIsEditing(false)}
        />
      </Controls>
    </TodoWrapper>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Todo;
