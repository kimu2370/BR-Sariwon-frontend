import React, { Component } from "react";
import "Components/Nav/nav-right-button.scss";

class NavRightbutton extends Component {
  render() {
    return (
      <li>
        <div>{this.props.title}</div>
      </li>
    );
  }
}

export default NavRightbutton;
