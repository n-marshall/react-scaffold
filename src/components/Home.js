import React from "react";
import { Helmet } from "react-helmet";

const Home = () =>
  <div>
    <Helmet title="Home" meta={[{ property: "og:title", content: "Home" }]} />
    <h1>Home</h1>
  </div>;

export default Home;
