import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ItemBox from "Components/ItemList/ItemBox";
import IMG from "Components/ItemList/Data/Data";
import "./itemList.scss";

export class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      count: 0,
      initIndex: 0,
      isSearch: false
    };
  }
  componentDidMount = () => {
    const query = this.props.location.search.split("&");
    const type = query[0].split("=")[1];
    console.log("didmount type: ", type);
    if (type === "6") {
      this.searchFetch(query);
    } else {
      this.itemListFetch();
    }
  };

  searchFetch = query => {
    this.setState({ data: [] }, () =>
      fetch(
        `http://10.58.2.22:8000/product/product-search?${query
          .join("&")
          .slice(8)}`,
        { method: "GET" }
      )
        .then(response => response.json())
        .then(response =>
          this.setState({
            data: response.data,
            count: response.count,
            isSearch: true
          })
        )
    );
  };

  itemListFetch = () => {
    const menuType = this.props.location.search.split("=")[1];
    fetch(`http://10.58.2.22:8000/product/menu?type=${menuType}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(response =>
        this.setState({ data: response.products, menuType: menuType }, () =>
          this.setState({
            initIndex: this.props.location.search.split("=")[1] - 1,
            isSearch: false
          })
        )
      );
    //   .then(response => console.log("fetch:", this.state.data));
  };

  componentDidUpdate = prevProps => {
    if (prevProps.location.search !== this.props.location.search) {
      const query = this.props.location.search.split("&");
      const type = query[0].split("=")[1];
      console.log("didupdate type: ", type);
      if (type === "6") {
        this.searchFetch(query);
      } else {
        this.itemListFetch();
      }
    }
  };

  render() {
    const { initIndex } = this.state;
    // const menuType = this.props.location.search.split("=")[1];
    // console.log(this.props.location.search);
    console.log(this.state.data);
    return (
      <div className="item-list">
        <header className="header">
          {!this.state.isSearch && (
            <img className="header-benner" src={IMG[initIndex].benner} alt="" />
          )}
        </header>
        {this.state.isSearch && (
          <div className="line-title">
            {this.state.count
              ? `검색결과 총 ${this.state.count}건 입니다.`
              : `검색결과 총 0 건 입니다.`}
          </div>
        )}
        <div className="line-title">
          <span className="left-spoon" />
          {!this.state.isSearch ? (
            <img src={IMG[initIndex].title} alt="icecream" />
          ) : (
            <img
              className="header-benner"
              src="http://www.baskinrobbins.co.kr/assets/images/search/h_search_result.png"
              alt=""
            />
          )}
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
