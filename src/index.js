import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./resources/scss/bootstrap.min.css";
import "./resources/scss/styles.css";
import "./resources/scss/default-theme.css";
import "./resources/scss/font-awesome.min.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
