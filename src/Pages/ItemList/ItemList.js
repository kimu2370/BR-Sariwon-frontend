import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemBox from "Components/ItemList/ItemBox";
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
      .then(response => this.setState({ data: response.products }));
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
    // console.log(this.props.location.search);
    return (
      <div className="item-list">
        <header className="header">
          <div className="header-banner"></div>
        </header>
        <div className="line-title">
          <span className="left-spoon" />
          <img
            src="http://www.baskinrobbins.co.kr/assets/images/menu/h_title_A.png"
            alt="icecream"
          />
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
                  image={item.image}
                  tags1={item.tags.slice(0, 1)}
                  tags2={item.tags.slice(1, 2)}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ItemList);
