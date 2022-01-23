import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../../redux/_actions/todoActions";
import Todo from "./Todo/Todo";
import { toast } from "react-toastify";
import "./styles.scss";
const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const handleTodoDelete = (id) => {
    const filteredTodo = todos.filter((dt) => dt?.id !== id);

    dispatch(deleteTodo(filteredTodo));
    toast.success("Successfully delete todo");
  };

  const handleAddTodo = () => {
    if (todo) {
      const id = Math.floor(Math.random() * 100);
      const data = {
        id: id,
        userId: 1,
        title: todo,
        completed: false,
      };

      dispatch(addTodo(data));
      toast.success("Todo added");
      setTodo("");
    } else {
      toast.error("Todo title can't be empty");
    }
  };

  const handleUpdateTodoStatus = (id, status) => {
    const updatedTodos = todos.map((dt) =>
      dt?.id !== id ? dt : { ...dt, completed: status }
    );

    dispatch(updateTodo(updatedTodos));
  };

  const handleUpdateTodoTitle = (id, title) => {
    if (title) {
      const updateTodos = todos.map((dt) =>
        dt?.id !== id ? dt : { ...dt, title: title }
      );

      dispatch(updateTodo(updateTodos));
    } else {
      toast.error("Title can't be empty");
    }
  };
  return (
    <>
      <h1>Add your todos...</h1>
      <div className="todo-list-container">
        <div className="todolist-div">
          <div className="input-div">
            <input
              placeholder="Add todo.."
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            <span onClick={handleAddTodo}>Add todo</span>
          </div>
          <div className="list-div">
            {todos?.map((todo) => (
              <Todo
                data={todo}
                deleteTodo={handleTodoDelete}
                updateStatus={handleUpdateTodoStatus}
                updateTitle={handleUpdateTodoTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
