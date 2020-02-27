import React, { Component } from "react";
import NavLeftButton from "Components/Nav/NavLeftButton";
import NavRightbutton from "Components/Nav/NavRightButton";
import "Components/Nav/nav-top.scss";

const leftButtons = [
  {
    link: "https://www.facebook.com/baskinrobbins.kr/",
    img: "http://www.baskinrobbins.co.kr/assets/images/common/icon_facebook.png"
  },
  {
    link: "https://twitter.com/BaskinrobbinsKR",
    img: "http://www.baskinrobbins.co.kr/assets/images/common/icon_twitter.png"
  },
  {
    link: "http://blog.naver.com/brgirl31",
    img: "http://www.baskinrobbins.co.kr/assets/images/common/icon_blog.png"
  },
  {
    link: "https://www.instagram.com/baskinrobbinskorea/",
    img: "http://www.baskinrobbins.co.kr/assets/images/common/icon_instgram.png"
  },
  {
    link: "https://www.youtube.com/user/baskinrobbinskorea",
    img: "http://www.baskinrobbins.co.kr/assets/images/common/icon_youtube.png"
  }
];
const rightButtons = [
  {
    link: "/customer",
    title: "고객센터"
  },
  {
    link: "/menu/nutrition",
    title: "영양정보"
  },
  {
    link: "/about/contact_us",
    title: "CONTACT US"
  }
];
export default class NavTop extends Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="nav-inside-wrapper">
          <ul className="left-buttons">
            {leftButtons.map(button => (
              <NavLeftButton link={button.link} img={button.img} />
            ))}
          </ul>
          <h1 className="center-logo-wrapper">
            <a className="center-logo" href="http://www.baskinrobbins.co.kr/">
              baskin robbins
            </a>
          </h1>
          <div className="right-buttons">
            {rightButtons.map(button => (
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
