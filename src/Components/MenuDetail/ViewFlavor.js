import React, { Component } from "react";
import "Components/MenuDetail/viewFlavor.scss";
class ViewFlavor extends Component {
  render() {
    return (
      <div className="view-flavor consist">
        <h2>추천 플레이버</h2>
        <div className="list-flavor">
          <ul className="list-wrap">
            <li className="list">
              <div className="title"></div>
              <img src="http://www.baskinrobbins.co.kr/upload/product/1654067239.png"></img>
            </li>
          </ul>
          <div className="paging"></div>
        </div>
      </div>
    );
  }
}

export default ViewFlavor;
