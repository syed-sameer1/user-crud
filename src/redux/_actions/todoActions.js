import { GET_ALL_TODOS, DELETE_TODO, UPDATE_TODO, ADD_TODO } from "../types";

export const getAllTodos = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_TODOS, payload: "" });
  };
};

export const addTodo = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_TODO, payload: data });
  };
};

export const deleteTodo = (data) => {
  return (dispatch) => {
    dispatch({ type: DELETE_TODO, payload: data });
  };
};

export const updateTodo = (data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODO, payload: data });
  };
};
