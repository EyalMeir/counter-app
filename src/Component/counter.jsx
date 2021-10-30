import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        //<span className="badge badge-primary">{this.formantCount()}</span>
        <button className="btn btn-secondary">Increment</button>
      </React.Fragment>
    );
  }
  formantCount() {
    const { count } = this.state;
    //const x = <h1>Zero</h1>;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
