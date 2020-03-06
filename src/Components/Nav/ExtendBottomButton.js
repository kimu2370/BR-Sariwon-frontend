import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "Components/Nav/extend-bottom-button.scss";

class ExtendBottomButton extends Component {
  handleClick = () => {
    if (this.props.title === "매장 찾기") {
      this.props.history.push("/findstore");
    }
    if (this.props.title === "아이스크림") {
      this.props.history.push("/itemlist?type=1");
    } else if (this.props.title === "아이스크림 케이크") {
      this.props.history.push("/itemlist?type=2");
    } else if (this.props.title === "음료") {
      this.props.history.push("/itemlist?type=3");
    } else if (this.props.title === "커피") {
      this.props.history.push("/itemlist?type=4");
    } else if (this.props.title === "디저트") {
      this.props.history.push("/itemlist?type=5");
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
