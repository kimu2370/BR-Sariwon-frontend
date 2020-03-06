import React, { Component } from "react";
import MenuDetail from "./MenuDetail";
import Icecream from "./Icecream";
import IceCake from "./IceCake";
import Drink from "./Drink";
import Coffee from "./Coffee";
import Dessert from "./Dessert";
import { URL } from "config";
class MenuDetailLayout extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      item: {},
      sizes: []
    };
  }

  componentDidMount = () => {
    this.getProductDetail();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getProductDetail();
    }
  };

  getProductDetail = () => {
    const id = this.props.location.search.split("=")[1];
    // console.log(this.props.location.pathname.split("/"));
    const detailURL = `${URL}/product/menu/${id}`;
    fetch(detailURL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            item: res.product[0]
          },
          () => {
            this.getProducts();
          }
        );
      });
  };

  getProducts = () => {
    const listURL = `${URL}/product/menu?type=${this.state.item.menu}`;
    fetch(listURL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          list: res.products
        });
      });
  };

  navPrev = id => {
    const detailURL = `${URL}/product/menu/${id}`;
    fetch(detailURL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          item: res.product[0]
        });
      });
  };

  navNext = id => {
    const detailURL = `${URL}/product/menu/${id}`;
    fetch(detailURL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          item: res.product[0]
        });
      });
  };

  moveFlavorDetail = name => {
    //문자열 이름 오류 수정해야함.
    const flavor = this.state.list.filter(
      item => item.name === name && item.id
    )[0];
    const detailURL = `${URL}/product/menu/${flavor.id}`;
    fetch(detailURL, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          item: res.product[0]
        });
      });
  };

  render() {
    const { list, item: product } = this.state;
    // console.log(this.props.location.pathname);
    return (
      <MenuDetail
        navPrev={this.navPrev}
        navNext={this.navNext}
        productName={product.name}
        list={list}
        productID={product.id}
      >
        {product && product.menu === 1 ? (
          <Icecream
            product={product}
            moveFlavorDetail={this.moveFlavorDetail}
          />
        ) : product.menu === 2 ? (
          <IceCake product={product} moveFlavorDetail={this.moveFlavorDetail} />
        ) : product.menu === 3 ? (
          <Drink product={product} />
        ) : product.menu === 4 ? (
          <Coffee product={product} />
        ) : (
          <Dessert product={product} />
        )}
      </MenuDetail>
    );
  }
}

export default MenuDetailLayout;
