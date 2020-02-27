import React, { Component } from "react";
import NavLeftButton from "Components/Nav/NavLeftButton";
import NavRightbutton from "Components/Nav/NavRightButton";
import Data from "./NavTopData";
import "Components/Nav/nav-top.scss";

export default class NavTop extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="nav-inside-wrapper">
          <ul className="left-buttons">
            {Data.leftButtons.map(button => (
              <NavLeftButton link={button.link} img={button.img} />
            ))}
          </ul>
          <h1 className="center-logo-wrapper">
            <a className="center-logo" href="http://www.baskinrobbins.co.kr/">
              baskin robbins
            </a>
          </h1>
          <div className="right-buttons">
            {Data.rightButtons.map(button => (
              <NavRightbutton link={button.link} title={button.title} />
            ))}
            <li>
              <a
                href="#modal-search"
                onClick={() => this.props.searchProduct()}
              >
                <img
                  src="http://www.baskinrobbins.co.kr/assets/images/common/icon_search.png"
                  alt=""
                />
              </a>
            </li>
          </div>
        </div>
      </nav>
    );
  }
}
