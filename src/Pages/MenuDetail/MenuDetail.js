import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PageMoveButton from "Components/MenuDetail/PageMoveButton";
import "Pages/MenuDetail/menuDetail.scss";

class MenuDetail extends Component {
  handleClick = () => {
    this.props.history.push(`/itemlist?type=${this.props.productMenu}`);
  };

  //이전 다음 버튼 상태 처리를 위한 함수
  filteredListIndexForMove = () => {
    const { list, productName } = this.props;
    const result = [];
    if (list !== undefined) {
      list.filter(
        (item, i) => item.name === productName && result.push(i - 1, i, i + 1)
      );
    }
    return result;
  };

  render() {
    const { navPrev, navNext, productName, list } = this.props;
    return (
      <div className="menu-detail-container">
        <div className="content">
          <div className="inner-content">
            <div className="view-wrap">{this.props.children}</div>
            <div className="btn-menu-list">
              <span onClick={this.handleClick}>목록</span>
            </div>
          </div>
          <PageMoveButton
            navPrev={navPrev}
            navNext={navNext}
            productName={productName}
            list={list}
            filteredListIndexForMove={this.filteredListIndexForMove}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(MenuDetail);
