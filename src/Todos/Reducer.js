import * as types from "./ActionTypes.js";

const initialState = {
  filter: "all",
  todos: []
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            name: action.todo.name,
            description: action.todo.description,
            urgency: action.todo.urgency,
            dateUntil: action.todo.dateUntil,
            completed: false,
            dateCompleted: null
          }
        ]
      };

    case types.CHANGE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          {
            name: action.todo.name,
            description: action.todo.description,
            urgency: action.todo.urgency,
            dateUntil: action.todo.dateUntil,
            completed: action.todo.completed,
            dateCompleted: action.todo.dateCompleted
          },
          ...state.todos.slice(action.index + 1)
        ]
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      };

    case types.MAKE_COMPLETED:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          {
            ...state.todos[action.index],
            completed: true,
            dateCompleted: new Date().toISOString().slice(0, 16)
          },
          ...state.todos.slice(action.index + 1)
        ]
      };

    case types.SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };

    default:
      return state;
  }
};
