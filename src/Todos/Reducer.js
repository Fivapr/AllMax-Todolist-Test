import * as types from "./ActionTypes.js";

const initialState = {
  todos: []
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.value]
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      };

    default:
      return state;
  }
};
