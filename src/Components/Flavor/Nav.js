import React, { Component } from "react";
import Item from "Components/Flavor/Item";
import "Components/Flavor/nav.scss";
import NavImgSrc from "Components/Flavor/NavData";
class Nav extends Component {
  render() {
    return (
      <nav className="flavor-nav">
        <div className="move-bar">
          {NavImgSrc.map((item, i) => {
            return (
              <Item
                key={i}
                onChange={this.props.onChange}
                moveIceCream={this.props.moveIceCream}
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
