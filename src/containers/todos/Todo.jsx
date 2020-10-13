import React, { useState, Suspense } from "react";
import { DateTime } from "luxon";
import PropTypes from "prop-types";

import {
  TodoWrapper,
  Controls,
  editStyles,
  deleteStyles,
} from "../../style/todosContainersStyle";
import Loader from "../../components/utils/Loader";

const DeleteTodo = React.lazy(() => import("./DeleteTodo"));
const InputTodo = React.lazy(() => import("./InputTodo"));

const Todo = ({ todo }) => {
  const [openIsDeleting, setOpenIsDeleting] = useState(false);
  const [openIsEditing, setOpenIsEditing] = useState(false);

  let dt = DateTime.fromISO(todo.todoFor);

  return (
    <TodoWrapper>
      {dt.toLocaleString(DateTime.DATE_FULL)}
      <div>
        {todo.todo}
      </div>
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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </Controls>
    </TodoWrapper>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    todoFor: PropTypes.string,
    todo: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Todo;
