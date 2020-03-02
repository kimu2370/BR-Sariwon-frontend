import React, { Component } from "react";
import "Components/MenuDetail/viewPrice.scss";
class ViewPrice extends Component {
  render() {
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
            {this.props.sizes.map((item, i) => {
              return (
                i < 4 && (
                  <li className={`cc${i + 1}`}>
                    <div className="title">{item.name}</div>
                    <div>{item.description}</div>
                    <div className="price">{item.price}</div>
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
            {this.props.sizes.map((item, i) => {
              return (
                i > 3 && (
                  <li className={`hp${i - 3}`}>
                    <div className="title">{item.name}</div>
                    <div>{item.description}</div>
                    <div className="price">{item.price}</div>
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
