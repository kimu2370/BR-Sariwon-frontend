import React, { Component } from "react";
import Item from "Components/Flavor/Item";
import "Components/Flavor/nav.scss";
import DATA from "Components/Flavor/NavData";
class Nav extends Component {
  state = { DATA };

  render() {
    return (
      <nav className="flavor-nav">
        <div className="move-bar">
          {this.state.DATA.map((item, i) => {
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
