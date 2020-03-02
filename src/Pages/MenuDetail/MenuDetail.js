import React, { Component } from "react";
// import Layout from "Pages/Layout/Layout";
import ViewProduct from "Components/MenuDetail/ViewProduct";
import ViewPrice from "Components/MenuDetail/ViewPrice";
import ViewFlavor from "Components/MenuDetail/ViewFlavor";
import PageMoveButton from "Components/MenuDetail/PageMoveButton";
import "Pages/MenuDetail/menuDetail.scss";
class MenuDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      sizes: []
    };
  }

  componentDidMount() {
    this.getProduct();
  }
  getProduct = () => {
    const url = "http://10.58.2.22:8000/product/detail?item=38";
    fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res.product[0]
        });
      })
      .then(this.getIcecreamSize());
  };
  getIcecreamSize() {
    const url = "http://10.58.2.22:8000/product/size";
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
    return (
      // <Layout>
      <div className="menu-detail-container">
        <div className="content">
          <div className="inner-content">
            <div className="view-wrap">
              <ViewProduct product={this.state.product} />
              <ViewPrice sizes={this.state.sizes} />
              <ViewFlavor />
            </div>
            <div className="btn-menu-list">
              <span>목록</span>
            </div>
          </div>
          <PageMoveButton />
        </div>
      </div>
      // </Layout>
    );
  }
}

export default MenuDetail;
