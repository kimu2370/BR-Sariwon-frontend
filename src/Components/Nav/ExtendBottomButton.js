import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "Components/Nav/extend-bottom-button.scss";

class ExtendBottomButton extends Component {
  handleClick = () => {
    if (this.props.title === "매장 찾기") {
      this.props.history.push("/findstore");
    }
  };

  render() {
    return (
      <li className="ExtendBottomButton">
        <span onClick={this.handleClick}>{this.props.title}</span>
      </li>
    );
  }
}

export default withRouter(ExtendBottomButton);
