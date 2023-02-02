import React, { Component } from "react";
class ShouldCompUpdate extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  shouldComponentUpdate() {
    // it will only allow to render, if it returns true, try and maki it false, altough state has been updated but it wont render again
    return true;
  }

  render() {
    return (
      <div>
        <h1>Comp Did Update {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update Count
        </button>
      </div>
    );
  }
}
export default ShouldCompUpdate;
