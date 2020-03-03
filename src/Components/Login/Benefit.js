import React, { Component } from "react";

class Benefit extends Component {
  render() {
    return <div className="benefit">{this.props.children}</div>;
  }
}

export default Benefit;
