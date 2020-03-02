import React, { Component } from "react";
import "Components/Common/selectBox.scss";

class SelectBox extends Component {
  state = {
    selectType: "",
    selected: false,
    text: this.props.defaultText
  };

  selectedClicked = () => {
    this.setState({ selected: !this.state.selected });
  };

  // 목록의 아이템 클릭
  optionClicked = (id, name) => {
    this.setState({ selected: false, text: name });
    if (this.props.type === "city") {
      this.setState(this.props.changeSelected(id, "city"));
    }
    if (this.props.type === "district") {
      this.setState(this.props.changeSelected(id, "district"));
    }
  };

  render() {
    const { list, itemId, itemName, widthSize, heightSize } = this.props;

    console.log("selectbox list:", this.props.list);
    return (
      <div className="select-box-container">
        <div className="select-box">
          {/* select list */}

          <div
            className={`options-container ${
              this.state.selected === true ? "active" : ""
            }`}
          >
            <div
              style={{ width: `${widthSize}px`, height: `${heightSize}px` }}
              className="option"
              onClick={e => {
                const id = "";
                const name = e.currentTarget.childNodes[1].innerHTML;
                this.optionClicked(id, name);
              }}
            >
              <input type="radio" className="radio" name="category" />
              <label className="option-name">{this.props.defaultText}</label>
            </div>
            {list.map(item => (
              <div
                style={{ width: `${widthSize}px`, height: `${heightSize}px` }}
                className="option"
                onClick={e => {
                  const id = e.currentTarget.childNodes[0].value;
                  const name = e.currentTarget.childNodes[1].innerHTML;
                  this.optionClicked(id, name);
                }}
              >
                <input
                  type="radio"
                  className="radio"
                  name="category"
                  value={item[itemId]}
                />
                <label className="option-name">{item[itemName]}</label>
              </div>
            ))}
          </div>

          <div>
            <div
              className="selected"
              style={{
                width: `${widthSize}px`,
                height: `${heightSize}px`
              }}
              onClick={() => this.selectedClicked()}
            >
              <label className="option-name">{this.state.text}</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBox;
