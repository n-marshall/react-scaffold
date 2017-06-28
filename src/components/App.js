import React from "react";
import Router from "react-router";

const App = () =>
  <div>
    <nav>
      <ul>
        <li>
          <Router.Link to="home">Home</Router.Link>
        </li>
        <li>
          <Router.Link to="news">News</Router.Link>
        </li>
        <li>
          <Router.Link to="about">About</Router.Link>
        </li>
      </ul>
    </nav>
    <Router.RouteHandler />
  </div>;

export default App;
