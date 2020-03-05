import React, { Component } from "react";
import "Components/Flavor/item.scss";

class Item extends Component {
  handleClick = e => {
    this.props.section.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });

    //scroll이 796에 도달하면 아이스크림 down 메소드 실행
    if (this.props.section.current.offsetTop === 796) {
      this.props.onChange();
    } else {
      this.props.onChange("move-icecream");
    }
  };

  render() {
    return (
      <li onClick={this.handleClick}>
        <a className={this.props.className}>
          <img src={this.props.src} alt=""></img>
        </a>
      </li>
    );
  }
}

export default Item;
