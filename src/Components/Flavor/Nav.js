import React, { Component } from "react";
import Item from "Components/Flavor/Item";
import "Components/Flavor/nav.scss";
class Nav extends Component {
  state = {
    data: [
      {
        className: "btn btn1",
        src:
          "https://www.baskinrobbins.co.kr/assets/images/flavoer/nav_01_off.png"
      },
      {
        className: "btn btn2",
        src:
          "https://www.baskinrobbins.co.kr/assets/images/flavoer/nav_02_off.png"
      },
      {
        className: "btn btn3",
        src:
          "https://www.baskinrobbins.co.kr/assets/images/flavoer/nav_03_off.png"
      },
      {
        className: "btn btn4",
        src:
          "https://www.baskinrobbins.co.kr/assets/images/flavoer/nav_04_off.png"
      }
    ]
  };

  render() {
    return (
      <nav className="nav">
        <div className="move1">
          {this.state.data.map((item, i) => {
            return (
              <Item
                key={i}
                onChange={this.props.onChange}
                iceCream={this.props.iceCream}
                section={this.props.section[i]}
                className={item.className}
                src={item.src}
              />
            );
          })}
        </div>
      </nav>
    );
  }
}

export default Nav;
