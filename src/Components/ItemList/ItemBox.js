import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./itemBox.scss";

class ItemBox extends Component {
  handleItem = () => {
    const productID = this.props.id;
    this.props.history.push(`/menu/detail/${productID}`);
  };

  render() {
    return (
      <div className="ItemBox">
        <li className="item-box">
          <div className="item-main" onClick={this.handleItem}>
            <div className="name">
              <span>{this.props.name}</span>
            </div>
            <span className="item-img">
              <img src={this.props.image} alt="" />
            </span>
          </div>
          <div className="item-middle">
            <div className="hashtag">
              <a href="http://www.baskinrobbins.co.kr/search/result.php?ScHashtag=%23%EB%A1%9C%ED%88%AC%EC%8A%A4%EB%B9%84%EC%8A%A4%EC%BD%94%ED%94%84%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC">
                {this.props.tags1}
              </a>
              <a href="http://www.baskinrobbins.co.kr/search/result.php?ScHashtag=%23%EB%B0%94%EB%8B%90%EB%9D%BC%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC">
                {this.props.tags2}
              </a>
            </div>
            <div className="buy-button">
              <a href="http://bit.ly/2vXU0x9" target=" blank">
                구매
              </a>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default withRouter(ItemBox);
