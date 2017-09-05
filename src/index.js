import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Radium, { Style } from "radium";

import store from "./store";
import { Text } from "./components/UI";

const Thingy = () => <Text>Hello world</Text>;

const App = Radium(Thingy);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <Style
        rules={{
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box"
          }
        }}
      />
    </div>
  </Provider>,
  document.getElementById("app")
);
