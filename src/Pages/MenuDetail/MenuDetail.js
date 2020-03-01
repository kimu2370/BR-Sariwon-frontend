import React, { Component } from "react";
import Layout from "Pages/Layout/Layout";
import ViewProduct from "Components/MenuDetail/ViewProduct";
import ViewPrice from "Components/MenuDetail/ViewPrice";
import ViewFlavor from "Components/MenuDetail/ViewFlavor";
import PageMoveButton from "Components/MenuDetail/PageMoveButton";
import "Pages/MenuDetail/menuDetail.scss";
class MenuDetail extends Component {
  render() {
    return (
      <Layout>
        <div className="menu-detail-container">
          <div className="content">
            <div className="inner-content">
              <div className="view-wrap">
                <ViewProduct />
                <ViewPrice />
                <ViewFlavor />
              </div>
              <div className="btn-menu-list">
                <a href="https://www.baskinrobbins.co.kr/menu/list.php?top=A&sub=A01"></a>
              </div>
            </div>
            <PageMoveButton />
          </div>
        </div>
      </Layout>
    );
  }
}

export default MenuDetail;
