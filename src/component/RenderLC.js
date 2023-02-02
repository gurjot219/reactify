import React, { Component } from "react";
class RenderLC extends Component {
  constructor() {
    super();
    this.state = {
      data: "Guru",
    };
    console.warn("Constructor", this.state.data);
  }

  componentDidMount() {
    console.warn("Mounted", this.state.data);
  }
  render() {
    console.warn("Render", this.state.data);
    return (
      <div>
        <h1>Render {this.state.data}</h1>
        <button onClick={() => this.setState({ data: "Walia" })}>
          Update Name
        </button>
      </div>
    );
  }
}
export default RenderLC;
