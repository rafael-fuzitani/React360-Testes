import React, { Component } from "react";
import React360 from "./React360";
import Regua from "./Regua";

import "./App.css";

class App extends Component {
  render() {
    // var foo = new Array(36);

    return (
      <div className="App">
        <img
          className="icon-react360"
          alt=""
          src={require(`./360_degrees.png`)}
        />
        <React360 dir="fachada" numImages={180}>
          <Regua />
        </React360>
      </div>
    );
  }
}

export default App;
