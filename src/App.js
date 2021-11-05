//import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Counters from "./Component/counters";
import NavBar from "./Component/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </div>
    );
  }
}

export default App;
