import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import { loadState, saveState } from "./LocalStorage";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
