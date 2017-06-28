import React from "react";
import { Route, DefaultRoute } from "react-router";

import App from "./components/App";
import Home from "./components/Home";

/* create a group of routes with nesting */
const routes = (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home} />
  </Route>
);

export default routes;
