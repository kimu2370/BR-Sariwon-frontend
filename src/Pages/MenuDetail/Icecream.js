import React, { Component } from "react";
import ViewProduct from "Components/MenuDetail/ViewProduct";
import ViewPrice from "Components/MenuDetail/ViewPrice";
import ViewFlavor from "Components/MenuDetail/ViewFlavor";
import { URL } from "config";
class Icecream extends Component {
  state = {
    sizes: []
  };
  componentDidMount() {
    this.getIcecreamSize();
  }

  getIcecreamSize() {
    const url = `${URL}/product/size`;
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          sizes: res.sizes
        });
      });
  }

  render() {
    const product = this.props.product;
    const sizes = this.state.sizes;
    return (
      <>
        <ViewProduct product={product} menuID={product.menu} />
        <ViewPrice sizes={sizes} />
        <ViewFlavor
          product={product}
          moveFlavorDetail={this.props.moveFlavorDetail}
        />
      </>
    );
  }
}

export default Icecream;
