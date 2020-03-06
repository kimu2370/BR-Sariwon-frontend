import React, { Component } from "react";
import Header from "./Header";
import ProductInfo from "./ProductInfo";
class ViewProduct extends Component {
  render() {
    const { product, menuID } = this.props;
    return (
      <div className="view-menu">
        {/* 구매하기 버튼 전까지 Header */}
        <Header product={product} />
        {/* 추천,맛 전까지 ProductInfo */}
        <ProductInfo product={product} menuID={menuID} />
      </div>
    );
  }
}

export default ViewProduct;
