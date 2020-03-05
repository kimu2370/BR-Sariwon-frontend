import React, { Component } from "react";
import "Components/Common/socialIcon.scss";
class SocialIcon extends Component {
  state = {
    isfavorite: false,
    type: false
  };

  handleCopy = e => {
    let curURL = window.location.href;
    navigator.clipboard.writeText(curURL);
    alert("주소가 복사되었습니다.");
  };

  handleFavorite = e => {
    this.setState({
      isfavorite: !this.state.isfavorite
    });
    !this.state.isfavorite
      ? alert("좋아하는 플레이버로 등록되었습니다.")
      : alert("좋아하는 플레이버를 취소하였습니다.");
  };

  render() {
    const { product } = this.props;
    return (
      <div className="nav">
        <ul className="sns">
          {/* 아이스크림 목록이거나 type이 false이면 */}
          {!this.state.type && product.menu === 1 && (
            <li
              className={this.state.isfavorite ? "favorite on" : "favorite"}
              onClick={this.handleFavorite}
            >
              <span>좋아하는 플레이버 등록</span>
            </li>
          )}
          {this.state.type && (
            <li
              className={this.state.isfavorite ? "favorite on" : "favorite"}
              onClick={this.handleFavorite}
            >
              <span>자주가는 매장 등록</span>
            </li>
          )}
          <li>
            <a href="https://www.facebook.com/baskinrobbinskr" role="button">
              <img
                src="http://www.baskinrobbins.co.kr/assets/images/common/icon_facebook.png"
                alt="FACEBOOK"
              ></img>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BaskinrobbinsKR" role="button">
              <img
                src="http://www.baskinrobbins.co.kr/assets/images/common/icon_twitter.png"
                alt="TWITTER"
              ></img>
            </a>
          </li>
          <li>
            <div onClick={this.handleCopy}>
              <img
                src="https://www.baskinrobbins.co.kr/assets/images/common/icon_copy.png"
                alt="COPY"
              ></img>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialIcon;
