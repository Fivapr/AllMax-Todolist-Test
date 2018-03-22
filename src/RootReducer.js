import { combineReducers } from "redux";
import { todosReducer } from "./Todos/Reducer";

export const rootReducer = combineReducers({
  todosReducer: todosReducer
});
