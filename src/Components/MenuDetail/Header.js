import React, { Component } from "react";
import "Components/MenuDetail/header.scss";
class Header extends Component {
  render() {
    // menu = 1이 아니면 콘 이미지를 띄우지 않게 해야 한다.
    const { product } = this.props;
    return (
      <div className="header">
        <div className="name">
          <div className="small-name">{product.name_en}</div>
          {product.name}
        </div>
        <div className="description">{product.description}</div>
        {/* product 가 아이스크림일때 와 아닐 때 콘 이미지 유무 */}
        {product.menu === 1 ? (
          <div
            className={
              product.name !== undefined &&
              (product.name.indexOf("팩") > -1 ||
                product.name.indexOf("망고 소르베") > -1 ||
                product.name.indexOf("둘세 데 레체") > -1)
                ? "photo"
                : "photo con"
            }
          >
            <img className="img" src={product.thumbnail} alt=""></img>
          </div>
        ) : (
          <div className="photo">
            <img src={product.thumbnail} alt=""></img>
          </div>
        )}

        <div className="buy">
          <div className="buy-btn">구매하기</div>
        </div>
      </div>
    );
  }
}

export default Header;
