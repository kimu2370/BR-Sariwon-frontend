import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemBox from "Components/ItemList/ItemBox";
import IMG from "Components/ItemList/Data/Data";
import "./itemList.scss";

export class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    this.itemListFetch();
  };

  itemListFetch = () => {
    const menuType = this.props.location.search.split("=")[1];
    fetch(`http://10.58.2.22:8000/product/menu?type=${menuType}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response =>
        this.setState({ data: response.products, menuType: menuType })
      );
    //   .then(response => console.log("fetch:", this.state.data));
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.location.search.split("=")[1] !==
      this.props.location.search.split("=")[1]
    ) {
      this.itemListFetch();
    }
  };

  render() {
    const menuType = this.props.location.search.split("=")[1];
    // console.log(this.props.location.search);
    console.log(typeof menuType);
    return (
      <div className="item-list">
        <header className="header">
          <img
            className="header-benner"
            src={IMG[menuType - 1].benner}
            alt=""
          />
        </header>
        <div className="line-title">
          <span className="left-spoon" />
          <img src={IMG[menuType - 1].title} alt="icecream" />
          <span className="right-spoon" />
        </div>
        {/* menu-list */}
        <ul className="list">
          {this.state.data &&
            this.state.data.map(item => {
              return (
                <ItemBox
                  id={item.id}
                  name={item.name}
                  thumbnail={item.thumbnail}
                  //   tags1={item.tags.length >= 1 && item.tags[0].name}
                  //   tags2={item.tags.length >= 2 && item.tags[1].name}
                  tags={item.tags.map((el, i) => i < 2 && el.name)}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ItemList);
