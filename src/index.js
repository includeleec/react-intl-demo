import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LocaleProvider } from "./IntlContext";

ReactDOM.render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
  document.getElementById("root")
);
