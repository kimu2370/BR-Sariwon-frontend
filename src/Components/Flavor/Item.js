import React, { Component } from "react";
import "Components/Flavor/item.scss";

class Item extends Component {
  handleClick = e => {
    this.props.section.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
    if (this.props.section.current.offsetTop === 796) {
      this.props.onChange();
    } else {
      this.props.onChange("icecream01");
    }
  };

  render() {
    return (
      <li onClick={this.handleClick}>
        <a className={this.props.className}>
          <img src={this.props.src}></img>
        </a>
      </li>
    );
  }
}

export default Item;
