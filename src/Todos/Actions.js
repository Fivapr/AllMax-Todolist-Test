import * as types from "./ActionTypes.js";

export const ADD_TODO = value => ({
  type: types.ADD_TODO,
  value
});

export const DELETE_TODO = index => ({
  type: types.DELETE_TODO,
  index
});
