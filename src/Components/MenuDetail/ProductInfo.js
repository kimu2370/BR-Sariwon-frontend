import React, { Component } from "react";
import DATA from "Components/MenuDetail/Data/Product";
import "Components/MenuDetail/productInfo.scss";
class ProductInfo extends Component {
  render() {
    return (
      <div className="product-info">
        <div className="date-wrap">
          <span className="text">출시일</span>
          <span className="date">{DATA[0].release_date}</span>
        </div>
        <div className="nav">
          <ul className="sns">
            <li className="favorite">
              <span>좋아하는 플레이버 등록</span>
            </li>
            <li>
              <a href="#" role="button">
                <img
                  src="http://www.baskinrobbins.co.kr/assets/images/common/icon_facebook.png"
                  alt="FACEBOOK"
                ></img>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <img
                  src="http://www.baskinrobbins.co.kr/assets/images/common/icon_twitter.png"
                  alt="TWITTER"
                ></img>
              </a>
            </li>
            <li>
              <a href="#" role="button">
                <img
                  src="https://www.baskinrobbins.co.kr/assets/images/common/icon_copy.png"
                  alt="COPY"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
