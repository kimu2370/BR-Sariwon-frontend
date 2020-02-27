import React, { Component } from "react";
import "Components/Nav/nav-bottom.scss";
import ExtendBottomButton from "Components/Nav/ExtendBottomButton";

const menu = [
  {
    link: "/customer",
    title: "아이스크림"
  },
  {
    link: "/menu/nutrition",
    title: "아이스크림 케이크"
  },
  {
    link: "/about/contact_us",
    title: "음료"
  },
  {
    link: "/about/contact_us",
    title: "커피"
  },
  {
    link: "/about/contact_us",
    title: "디저트"
  }
];
const event = [
  { link: "", title: "진행중 이벤트" },
  { link: "", title: "당첨자 발표" }
];
const store = [
  { link: "", title: "매장 찾기" },
  { link: "", title: "고객센터" }
];
const about = [
  { link: "", title: "공지사항" },
  { link: "", title: "보도자료" },
  { link: "", title: "채용정보" },
  { link: "", title: "점포개설문의" },
  { link: "", title: "CONTACT US" }
];

export default class NavBottom extends Component {
  state = {
    buttonImageUrl:
      "http://www.baskinrobbins.co.kr/assets/images/common/gnb_menu.png",

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
              <div style={{ width: "35px" }}>LOGIN</div>
            </li>
            <li>
              <div style={{ width: "27px", backgroundPosition: "-97px -1px" }}>
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
              <div
                className="right-button"
                style={{
                  width: "164px ",
                  backgroundPosition: "-133px -3px",
                  marginRight: "59px"
                }}
              >
                FLAVOR OF THE MONTH
              </div>
              <a href="">
                <img
                  className={`monthly-icecream ${
                    this.state.isHover === true
                      ? "monthly-icecream-on"
                      : "monthly-icecream-off"
                  }`}
                  style={{ marginTop: 3, marginLeft: -30 }}
                  src="http://www.baskinrobbins.co.kr/assets/images/common/flavor/img_monthly_fom.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <div
                className="right-button"
                style={{
                  width: "42px",
                  backgroundPosition: "-415px -3px",
                  margin: "0 59px"
                }}
              >
                MENU
              </div>
              <ul
                className={`category-list ${
                  this.state.isHover === true
                    ? "category-list-on"
                    : "category-list-off"
                }`}
              >
                {menu.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
            <li>
              <div
                className="right-button"
                style={{
                  width: "42px",
                  backgroundPosition: "-577px -1px",
                  margin: "0 59px"
                }}
              >
                EVENT
              </div>
              <ul
                className={`category-list ${
                  this.state.isHover === true
                    ? "category-list-on"
                    : "category-list-off"
                }`}
              >
                {event.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
            <li>
              <div
                className="right-button"
                style={{
                  width: "42px",
                  backgroundPosition: "-737px -1px",
                  margin: "0 59px"
                }}
              >
                STORE
              </div>
              <ul
                className={`category-list ${
                  this.state.isHover === true
                    ? "category-list-on"
                    : "category-list-off"
                }`}
              >
                {store.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
            <li>
              <div
                className="right-button"
                style={{
                  width: "49px",
                  backgroundPosition: "-897px -1px",
                  margin: "0 59px"
                }}
              >
                ABOUT
              </div>
              <ul
                className={`category-list ${
                  this.state.isHover === true
                    ? "category-list-on"
                    : "category-list-off"
                }`}
              >
                {about.map(button => (
                  <ExtendBottomButton title={button.title} />
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div
          className={`menu-extend ${
            this.state.isHover === true ? "menu-extend-on" : "menu-extend-off"
          }`}
          onMouseEnter={() => {
            this.buttonHover();
          }}
          onMouseLeave={() => {
            this.buttonHoverLeave();
          }}
        >
          <div className="event-image">
            <img
              style={{ marginTop: "65px" }}
              src="http://www.baskinrobbins.co.kr/assets/images/common/img_happypoint_app.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
