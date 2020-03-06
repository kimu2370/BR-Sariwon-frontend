import React, { Component } from "react";
import "Components/Nav/allergyItem.scss";

class AllergyItem extends Component {
  state = {
    isChecked: false
  };

  componentDidUpdate() {}

  render() {
    return (
      <div className="allergic-check">
        <label className="allergic-checkbox-label">
          <input
            className="allergic-checkbox"
            type="checkbox"
            onClick={() => {
              this.setState({ isChecked: !this.state.isChecked }, () =>
                this.props.addAllergy(this.props.allergy, this.state.isChecked)
              );
            }}
          />
          <span className="allergic-checkbox-custom"></span>
        </label>
        <span className="allergic-name">{this.props.allergy}</span>
      </div>
    );
  }
}

export default AllergyItem;
