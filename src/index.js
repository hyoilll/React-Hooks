import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UseInput from "./Hooks/UseInput";
import UseEffect from "./Hooks/UseEffect";
import UseTitle from "./Hooks/UseTitle";
import UseClick from "./Hooks/UseClick";
import UseConfirm from "./Hooks/UseConfirm";
import UsePreventLeave from "./Hooks/UsePreventLeave";

ReactDOM.render(
  <React.StrictMode>
    <UsePreventLeave />
  </React.StrictMode>,
  document.getElementById("root")
);
