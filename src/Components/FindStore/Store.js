import React, { Component } from "react";
import "Components/FindStore/store.scss";
// import Layout from "Pages/Layout/Layout";

/*
 * 매장 찾기 목록 아이템
 */
class Store extends Component {
  render() {
    const {
      lat,
      lng,
      moveStore,
      number,
      name,
      address,
      phoneNumber,
      businessTime
    } = this.props;
    return (
      <li className="store-wrapper">
        <article>
          <h3 onClick={() => moveStore(lat, lng, number - 1)}>
            <small>{number}</small>
            <span>{name}</span>
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
              <span>{address}</span>
            </address>
            <span>{phoneNumber}</span>
            <span>{businessTime}</span>
          </div>
        </article>
      </li>
    );
  }
}

export default Store;
