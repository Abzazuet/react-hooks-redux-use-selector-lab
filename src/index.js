import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// add imports and code
import usersReducer from "./features/users/usersSlice";
import { Provider } from "react-redux"; /* code change */
import { createStore } from "redux"; /* code change */

const store = createStore(usersReducer);

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
