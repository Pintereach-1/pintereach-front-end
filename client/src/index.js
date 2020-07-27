import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { reducer } from "./store/reducers";



// Redux
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(reducer, applyMiddleware(thunk, logger));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


