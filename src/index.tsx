import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./Global.styles";

import { Provider } from "react-redux";

import store from "./store/store";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
