import React, { Component } from "react";
import ViewProduct from "Components/MenuDetail/ViewProduct";
class Drink extends Component {
  render() {
    const product = this.props.product;
    return (
      <>
        <ViewProduct product={product} menuID={product.menu} />
      </>
    );
  }
}

export default Drink;
