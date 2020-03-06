import React, { Component } from "react";
import "Components/MenuDetail/productInfo.scss";
import SocialIcon from "Components/Common/SocialIcon";
class ProductInfo extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-info">
        <div className="date-wrap">
          {product.menu === 1 ? (
            <>
              <span className="text">
                {product.release_date !== "" ? "출시일" : ""}
              </span>
              <span className="option">{product.release_date}</span>
            </>
          ) : product.menu === 2 ? (
            <div className="proudct-wrap">
              <span className="text">아이스크림</span>
              <span className="option">
                {product.flavors.map(item => item.name).join(", ")}
              </span>
            </div>
          ) : product.menu === 3 ? (
            <>
              <span className="text">아이스크림 선택</span>
              <span className="option">
                {product.icecream_option.indexOf("가능") > 0 ? "가능" : "불가"}
              </span>
            </>
          ) : product.menu === 4 ? (
            <>
              <span className="text">
                <img
                  className="link-store"
                  src="http://www.baskinrobbins.co.kr/assets/images/menu/btn_store.gif"
                  alt=""
                ></img>
              </span>
            </>
          ) : (
            <span className="text"></span>
          )}
        </div>
        <SocialIcon product={product} />
      </div>
    );
  }
}

export default ProductInfo;
