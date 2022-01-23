import React, { useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
const Todo = ({ data, deleteTodo, updateStatus, updateTitle }) => {
  const [updateTodoTitle, setUpdateTodoTitle] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="todo-container">
      {!showEdit ? (
        <div className="todo-title">
          {data?.title}{" "}
          <span onClick={() => setShowEdit(true)}>
            <FontAwesomeIcon icon={faEdit} />
          </span>
        </div>
      ) : (
        <div className="todo-title">
          {" "}
          <input
            value={updateTodoTitle}
            onChange={(e) => setUpdateTodoTitle(e.target.value)}
          />{" "}
          <span
            onClick={() => {
              setShowEdit(false);
              updateTitle(data?.id, updateTodoTitle);
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </div>
      )}
      <div className="buttons-div">
        {data?.completed === false ? (
          <span
            onClick={() => updateStatus(data?.id, true)}
            className="status-button"
          >
            Complete todo
          </span>
        ) : (
          <span
            onClick={() => updateStatus(data?.id, false)}
            className="incomplete-button"
          >
            In complete Todo
          </span>
        )}
        <div onClick={() => deleteTodo(data?.id)} className="delete-button">
          Delete todo
        </div>
      </div>
    </div>
  );
};

export default Todo;
