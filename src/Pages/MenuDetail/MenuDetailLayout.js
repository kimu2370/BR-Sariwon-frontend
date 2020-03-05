import React, { Component } from "react";
import MenuDetail from "./MenuDetail";
import Icecream from "./Icecream";
import IceCake from "./IceCake";
import Drink from "./Drink";
import Coffee from "./Coffee";
import Dessert from "./Dessert";
class MenuDetailLayout extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      item: {},
      sizes: []
    };
  }

  componentDidMount() {
    this.getProductDetail();
  }

  //config url 과 window.location.search 사용하여 수정해야함.

  getProductDetail = () => {
    const id = window.location.search.split("=")[1];
    const url = `http://10.58.2.22:8000/product/menu/${id}`;
    fetch(url, {
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
    const url = `http://10.58.2.22:8000/product/menu?type=${this.state.item.menu}`;
    fetch(url, {
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
    const url = `http://10.58.2.22:8000/product/menu/${id}`;
    fetch(url, {
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
    const url = `http://10.58.2.22:8000/product/menu/${id}`;
    fetch(url, {
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
    return (
      <MenuDetail
        navPrev={this.navPrev}
        navNext={this.navNext}
        productName={product.name}
        list={list}
        productID={product.id}
      >
        {product && product.menu === 1 ? (
          <Icecream product={product} />
        ) : product.menu === 2 ? (
          <IceCake product={product} />
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
