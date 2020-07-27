
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { reducer } from "./store/reducers";
import { BrowserRouter as Router } from 'react-router-dom'


// Redux
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")

);


