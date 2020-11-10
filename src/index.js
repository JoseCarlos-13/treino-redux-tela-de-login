import React from "react";
import ReactDOM from "react-dom";
import { theStore } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

const store = theStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
