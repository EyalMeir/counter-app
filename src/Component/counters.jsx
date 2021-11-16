import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 4 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleDelete = (counterId) => {
  //   console.log("Event handleDelete Called", counterId);
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   console.log();
  //   //this.state.count++;
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  // handleIncrement = (counter) => {
  //   console.log("Event Increment Called", counter);
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   console.log(this.state.counters[index]);
  //   this.setState({ counters });
  // };

  render() {
    console.log("Counters - Render");

    //console.log("[Counters]", this.props);
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        {/* <button onClick={this.onReset} className="btn btn-primary btn-sm m-2"> */}
        <button
          //onReset={this.HandReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* this.state.counters.map((counter) */}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
