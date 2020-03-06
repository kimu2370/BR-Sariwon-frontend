import React, { Component } from "react";
import "Components/MenuDetail/viewPrice.scss";
class ViewPrice extends Component {
  render() {
    const { sizes } = this.props;
    return (
      <div className="view-price">
        <section className="conecup">
          <h2>
            <img
              src="https://www.baskinrobbins.co.kr/assets/images/menu/tit_concup.gif"
              alt="cone&cup"
            ></img>
          </h2>
          <ul>
            {sizes.map((item, i) => {
              return (
                i < 4 && (
                  <li key={i} className={`cc${i + 1}`}>
                    <div className="title">{item.name}</div>
                    <div>{item.description}</div>
                    <div className="price">{`${parseInt(
                      item.price
                    ).toLocaleString()}원`}</div>
                  </li>
                )
              );
            })}
          </ul>
        </section>
        <section className="handpack">
          <h2>
            <img
              src="https://www.baskinrobbins.co.kr/assets/images/menu/tit_concup.gif"
              alt="cone&cup"
            ></img>
          </h2>
          <ul>
            {sizes.map((item, i) => {
              return (
                i > 3 && (
                  <li key={i} className={`hp${i - 3}`}>
                    <div className="title">{item.name}</div>
                    <div className="description">{item.description}</div>
                    <div className="price">{`${parseInt(
                      item.price
                    ).toLocaleString()}원`}</div>
                  </li>
                )
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default ViewPrice;
