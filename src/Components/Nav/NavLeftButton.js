import React, { Component } from "react";

class NavLeftButton extends Component {
  render() {
    return (
      <li className="nav-left-button-wrapper">
        <a href={this.props.link}>
          <img className="logo" src={this.props.img} alt="" />
        </a>
      </li>
    );
  }
}

export default NavLeftButton;
