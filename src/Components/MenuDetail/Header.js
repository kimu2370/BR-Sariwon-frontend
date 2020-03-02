import React, { Component } from "react";
import "Components/MenuDetail/header.scss";
class Header extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="header">
        <div className="name">
          <div className="small-name">{product.name_en}</div>
          {product.name}
        </div>
        <div className="description">{product.description}</div>
        <div
          className={
            product.name !== undefined &&
            (product.name.indexOf("팩") > 0 ||
              product.name.indexOf("망고 소르베") > 0 ||
              product.name.indexOf("둘세 데 레체") > 0)
              ? "photo"
              : "photo con"
          }
        >
          <img src={product.thumbnail} alt=""></img>
        </div>
        <div className="buy">
          <div className="buy-btn">구매하기</div>
        </div>
      </div>
    );
  }
}

export default Header;
