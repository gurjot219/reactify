import React, { Component } from "react";
class CompDidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.warn("Component did update", preState.counter, this.state.counter);
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
export default CompDidUpdate;
