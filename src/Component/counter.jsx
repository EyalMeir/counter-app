import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//import { nativeTouchData } from "react-dom/test-utils";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   //count: 0,
  //   //tags: [],
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // dohandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  //let classes = this.getBadgeClasses();
  // handleIncrement = (product) => {
  //   console.log(product);
  //   //this.state.count++;
  //   this.setState({ count: this.state.count + 1 });
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  render() {
    //console.log(this.props);
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelte(this.props.counter.id)}
          className="btn btn-danger btb-sm m-2"
        >
          delete
        </button>
        {/* //{this.state.tags.length === 0 && "please create a new tag!"}
        //{this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    //const x = <h1>Zero</h1>;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
