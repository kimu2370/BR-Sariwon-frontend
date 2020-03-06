import React, { Component } from "react";
import ViewProduct from "Components/MenuDetail/ViewProduct";
import ViewFlavor from "Components/MenuDetail/ViewFlavor";
class Coffee extends Component {
  render() {
    const product = this.props.product;
    return (
      <>
        <ViewProduct product={product} menuID={product.menu} />
        <ViewFlavor product={product} />
      </>
    );
  }
}

export default Coffee;
