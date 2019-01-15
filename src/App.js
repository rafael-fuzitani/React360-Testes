import React, { Component } from "react";
import React360 from "./React360";
import Regua from "./Regua";
import "./insolacao.css";

import "./App.css";

class App extends Component {
  render() {
    // var foo = new Array(36);

    return (
      <div className="App">
        <React360 dir="fachada" numImages={180}>
          <Regua />
        </React360>
      </div>
    );
  }
}

export default App;
