import React, { Component } from "react";
import "Components/FindStore/store.scss";
import Layout from "Pages/Layout/Layout";

/*
 * 매장 찾기 목록 아이템
 */
class Store extends Component {
  render() {
    const { lat, lng, moveStore, number } = this.props;
    return (
      <li className="store-wrapper">
        <article>
          <h3 onClick={() => moveStore(lat, lng, number - 1)}>
            <small>{number}</small>
            <span>{this.props.name}</span>
            <div className="store-favorite-button-wrapper">
              <img
                className="store-favorite-button"
                src="http://www.baskinrobbins.co.kr/assets/images/store/ico_favorite.png"
                alt=""
              />
            </div>
          </h3>
          <div className="store-info">
            <address>
              <span>{this.props.address}</span>
            </address>
            <span>{this.props.phoneNumber}</span>
            <span>{this.props.businessTime}</span>
          </div>
        </article>
      </li>
    );
  }
}

export default Store;
