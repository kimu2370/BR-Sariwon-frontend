import React, { Component } from "react";
import "Components/Nav/nav-modal-selector.scss";

class NavModalSelector extends Component {
  state = {
    selected: false,
    selectedText: "전체"
  };

  selectedClicked = () => {
    this.setState({ selected: !this.state.selected });
  };

  optionClicked = value => {
    this.setState({ selected: false, selectedText: value });
  };

  render() {
    console.log("selected: ", this.state.selected);
    console.log("selectedText: ", this.state.selectedText);
    return (
      <div class="container">
        <div class="select-box">
          {/* select list */}
          <div
            class={`options-container ${
              this.state.selected === true ? "active" : ""
            }`}
          >
            <div
              class="option"
              onClick={e => {
                this.optionClicked(e.currentTarget.childNodes[1].innerHTML);
              }}
            >
              <input
                type="radio"
                class="radio"
                id="automobiles"
                name="category"
              />
              <label className="option-name" for="automobiles">
                전체
              </label>
            </div>

            <div
              class="option"
              onClick={e => {
                this.optionClicked(e.currentTarget.childNodes[1].innerHTML);
              }}
            >
              <input
                type="radio"
                class="radio"
                id="automobiles"
                name="category"
              />
              <label className="option-name" for="automobiles">
                아이스크림
              </label>
            </div>

            <div
              class="option"
              onClick={e => {
                this.optionClicked(e.currentTarget.childNodes[1].innerHTML);
              }}
            >
              <input type="radio" class="radio" id="film" name="category" />
              <label className="option-name" for="film">
                아이스크림 케이크
              </label>
            </div>

            <div class="option">
              <input type="radio" class="radio" id="science" name="category" />
              <label className="option-name" for="science">
                음료
              </label>
            </div>

            <div class="option">
              <input type="radio" class="radio" id="art" name="category" />
              <label className="option-name" for="art">
                커피
              </label>
            </div>

            <div class="option">
              <input type="radio" class="radio" id="music" name="category" />
              <label className="option-name" for="music">
                디저트
              </label>
            </div>
          </div>

          <div className="selected" onClick={() => this.selectedClicked()}>
            <label className="option-name" htmlFor="">
              {this.state.selectedText}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default NavModalSelector;
