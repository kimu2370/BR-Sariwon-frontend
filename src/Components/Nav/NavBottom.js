import React, { Component } from "react";
import ExtendBottomButton from "Components/Nav/ExtendBottomButton";
import Data from "./NavBottomData";
import "Components/Nav/nav-bottom.scss";

export default class NavBottom extends Component {
  state = {
    isHover: false
  };

  buttonHover = () => {
    this.setState({ isHover: true });
  };

  buttonHoverLeave = () => {
    this.setState({ isHover: false });
  };

  render() {
    console.log("hover: ", this.state.isHover);
    return (
      <div className="menu-wrapper">
        <div className="menu-area">
          <ul className="nav-menu-left">
            <li>
              <div className="nav-menu-login">LOGIN</div>
            </li>
            <li>
              <div className="nav-menu-join">JOIN</div>
            </li>
          </ul>
          <ul
            className="nav-menu-right"
            onMouseEnter={() => {
              this.buttonHover();
            }}
            onMouseLeave={() => {
              this.buttonHoverLeave();
            }}
          >
            <li>
              <div className="right-button-flavor">FLAVOR OF THE MONTH</div>
              <a href="">
                <img
                  className={`monthly-icecream ${
                    this.state.isHover
                      ? "monthly-icecream-on"
                      : "monthly-icecream-off"
                  }`}
                  src="http://www.baskinrobbins.co.kr/assets/images/common/flavor/img_monthly_fom.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <div className="right-button-menu">MENU</div>
              <ul
                className={`category-list ${
                  this.state.isHover ? "category-list-on" : "category-list-off"
                }`}
              >
                {Data.menu.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
            <li>
              <div className="right-button-event">EVENT</div>
              <ul
                className={`category-list ${
                  this.state.isHover ? "category-list-on" : "category-list-off"
                }`}
              >
                {Data.event.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
            <li>
              <div className="right-button-store">STORE</div>
              <ul
                className={`category-list ${
                  this.state.isHover ? "category-list-on" : "category-list-off"
                }`}
              >
                {Data.store.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
            <li>
              <div className="right-button-about">ABOUT</div>
              <ul
                className={`category-list ${
                  this.state.isHover ? "category-list-on" : "category-list-off"
                }`}
              >
                {Data.about.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div
          className={`menu-extend ${
            this.state.isHover ? "menu-extend-on" : "menu-extend-off"
          }`}
          onMouseEnter={() => {
            this.buttonHover();
          }}
          onMouseLeave={() => {
            this.buttonHoverLeave();
          }}
        >
          <div className="event-image-wrapper">
            <img
              className="event-image"
              src="http://www.baskinrobbins.co.kr/assets/images/common/img_happypoint_app.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
