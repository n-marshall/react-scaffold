import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";

import routes from "./routes";

window.React = React;

Router.run(routes, Router.HistoryLocation, Root => {
  ReactDOM.render(<Root />, document.getElementById("app"));

  console.log("Rendered app on client");
});
