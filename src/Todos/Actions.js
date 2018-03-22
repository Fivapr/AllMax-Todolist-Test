import * as types from "./ActionTypes.js";

export const ADD_TODO = todo => ({
  type: types.ADD_TODO,
  todo
});

export const DELETE_TODO = index => ({
  type: types.DELETE_TODO,
  index
});

export const CHANGE_TODO = (todo, index) => ({
  type: types.CHANGE_TODO,
  todo,
  index
});

export const MAKE_COMPLETED = index => ({
  type: types.MAKE_COMPLETED,
  index
});

export const SET_FILTER = filter => ({
  type: types.SET_FILTER,
  filter
});
