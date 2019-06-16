import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("app"));
serviceWorker.unregister();
