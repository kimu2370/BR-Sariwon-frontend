import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ExtendBottomButton from "Components/Nav/ExtendBottomButton";
import Data from "./NavBottomData";
import "Components/Nav/nav-bottom.scss";

export class NavBottom extends Component {
  state = {
    isHover: false,
    logged: false
  };

  buttonHover = () => {
    this.setState({ isHover: true });
  };

  buttonHoverLeave = () => {
    this.setState({ isHover: false });
  };

  handleLogin = () => {
    const token = window.localStorage.getItem("token");
    token
      ? window.localStorage.removeItem("token")
      : this.props.history.push("/login");
  };
  handleJoin = () => {
    const token = window.localStorage.getItem("token");
    token ? this.props.history.push("/") : this.props.history.push("/signup");
  };

  componentDidMount() {
    const token = window.localStorage.getItem("token");
    console.log(token);
    token ? this.setState({ logged: true }) : this.setState({ logged: false });
  }

  render() {
    console.log("hover: ", this.state.isHover);
    return (
      <div className="menu-wrapper">
        <div className="menu-area">
          <ul className="nav-menu-left">
            <li>
              <div
                className={
                  this.state.logged ? "nav-menu-logout" : "nav-menu-login"
                }
                onClick={this.handleLogin}
              >
                LOGIN
              </div>
            </li>
            <li>
              <div
                className={
                  this.state.logged ? "nav-menu-mypage" : "nav-menu-join"
                }
                onClick={this.handleJoin}
              >
                JOIN
              </div>
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
              <a href="1">
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

export default withRouter(NavBottom);
