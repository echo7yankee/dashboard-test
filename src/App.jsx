import React, { Component } from "react";

import NavTop from "./components/Navigation/NavTop";
import NavLeft from "./components/Navigation/NavLeft";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavTop />
        <div className="display-flex">
          <NavLeft />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
