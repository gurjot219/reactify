import React, { Component } from "react";
class ConstructorLC extends Component {
  constructor() {
    super();
    console.warn("Constructor");
  }
  render() {
    console.warn("Render");

    return (
      <div>
        <h1>Constructor</h1>
      </div>
    );
  }
}
export default ConstructorLC;
