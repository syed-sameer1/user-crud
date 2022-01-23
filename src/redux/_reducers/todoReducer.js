import { GET_ALL_TODOS, DELETE_TODO, UPDATE_TODO, ADD_TODO } from "../types";
import { data } from "../../usersData";

const initState = {
  todos: [...data],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_TODOS:
      return {
        todos: [...state.todos],
      };
    case ADD_TODO: {
      return { todos: [action.payload, ...state.todos] };
    }
    case DELETE_TODO: {
      return { todos: [...action.payload] };
    }
    case UPDATE_TODO: {
      return { todos: [...action.payload] };
    }
    default:
      return state;
  }
};
