import React, { Component } from "react";
import "Components/MenuDetail/viewFlavor.scss";
import COFFEE from "Components/MenuDetail/Data/Data";
class ViewFlavor extends Component {
  state = {
    hotLeft: 0,
    iceLeft: 0
  };
  //left 값 = -1 * (List 전체 가로폭 - 컨테이너 가로폭) * (마우스로 이동한 값? / 컨테이너 가로폭)
  handleMouseHot = e => {
    this.setState({
      hotLeft: -1 * (1435 - 900) * ((e.pageX - 500) / 900)
    });
  };
  handleMouseIce = e => {
    this.setState({
      iceLeft: -1 * (1435 - 900) * ((e.pageX - 500) / 900)
    });
  };

  render() {
    const { product, menu: menuID } = this.props;
    return (
      <div className="view-flavor consist">
        <h2>
          {menuID === 1
            ? "추천 플레이버"
            : menuID === 2
            ? "어떤 맛이 들어있을까?"
            : menuID === 4
            ? "배스킨라빈스 커피는 어떻게 만들어졌을까요?"
            : (menuID === 3 || menuID === 5) && ""}
        </h2>

        {menuID === 1 || menuID === 2 ? (
          <div className="list-flavor">
            <ul className="list-wrap">
              {product.flavors.map(item => {
                return (
                  <li className="list">
                    <div className="title">{item.name}</div>
                    <img src={item.image} alt=""></img>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          menuID === 4 && (
            <div className="view-coffee">
              <div className="hot">
                <img
                  className="hot-img"
                  src="http://www.baskinrobbins.co.kr/assets/images/menu/h_hot_coffee.jpg"
                  alt=""
                ></img>
                <div className="coffee-list">
                  <div
                    className="list-wrap"
                    onMouseMove={this.handleMouseHot}
                    style={{
                      left: `${this.state.hotLeft}px`
                    }}
                  >
                    <ul>
                      {COFFEE.hot.map(item => {
                        return (
                          <li className="wrap-li">
                            <img src={item} alt=""></img>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ice">
                <img
                  className="ice-img"
                  src="http://www.baskinrobbins.co.kr/assets/images/menu/h_ice_coffee.jpg"
                  alt=""
                ></img>
                <div className="slider-coffee-ice">
                  <div className="coffee-list">
                    <div
                      className="list-wrap"
                      onMouseMove={this.handleMouseIce}
                      style={{
                        left: `${this.state.iceLeft}px`
                      }}
                    >
                      <ul>
                        {COFFEE.ice.map(item => {
                          return (
                            <li className="wrap-li">
                              <figure>
                                <img src={item}></img>
                              </figure>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default ViewFlavor;
