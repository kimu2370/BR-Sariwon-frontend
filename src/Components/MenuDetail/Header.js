import React, { Component } from "react";
import DATA from "Components/MenuDetail/Data/Product";
import "Components/MenuDetail/header.scss";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">
          <div className="small-name">{DATA[0].name_en}</div>
          {DATA[0].name}
        </div>
        <div className="description">{DATA[0].description}</div>
        <div className="photo">
          <img src={DATA[0].thumbnail} alt=""></img>
        </div>
        <div className="buy">
          <div className="buy-btn">구매하기</div>
        </div>
      </div>
    );
  }
}

export default Header;
