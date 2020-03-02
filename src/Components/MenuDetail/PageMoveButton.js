import React, { Component } from "react";

class PageMoveButton extends Component {
  render() {
    return (
      <div className="page-move-btn icecream">
        <ul className="btn-wrap">
          <li className="prev-btn">
            <div className="btn">
              <span className="image"></span>
              <span className="title"></span>
            </div>
          </li>
          <li className="next-btn">
            <div className="btn">
              <span className="image"></span>
              <span className="title"></span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default PageMoveButton;
