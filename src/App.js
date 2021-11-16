//import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Counters from "./Component/counters";
import NavBar from "./Component/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App Counstructor", this.props);
  }
  componentDidMount() {
    //Ajax Call
    console.log("App-Mounted");
  }

  // handleReset = () => {
  //   console.log("Event handleReset call");
  // };

  // handleDelete = (counterId) => {
  //   console.log("Event handleDelete Called", counterId);
  // };

  // handleIncrement = (counter) => {
  //   console.log("Event handleIncrement Called", counter);
  // };

  handleReset = () => {
    console.log("Event handleReset call");
    //this.state.count++;
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event handleDelete Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log("Event handleIncrement Called", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    console.log("Event handleDecrement Called", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  render() {
    console.log("App-Render");

    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          //totalCounters={this.state.counters.length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}

export default App;
