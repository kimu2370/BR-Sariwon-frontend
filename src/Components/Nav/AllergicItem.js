import React, { Component } from "react";

class AllergicItem extends Component {
  render() {
    return (
      <div className="allergic-check">
        <label className="allergic-checkbox-label">
          <input className="allergic-checkbox" type="checkbox" />
          <span className="allergic-checkbox-custom"></span>
        </label>
        <span className="allergic-name">{this.props.allergic}</span>
      </div>
    );
  }
}

export default AllergicItem;
