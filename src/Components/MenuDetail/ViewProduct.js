import React, { Component } from "react";
import Header from "./Header";
import ProductInfo from "./ProductInfo";
class ViewProduct extends Component {
  render() {
    return (
      <div className="view-menu icecream">
        <Header product={this.props.product} />
        <ProductInfo product={this.props.product} />
      </div>
    );
  }
}

export default ViewProduct;
