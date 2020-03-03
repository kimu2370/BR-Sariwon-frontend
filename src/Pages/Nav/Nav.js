import React, { Component } from "react";
import "Pages/Nav/nav.scss";
import "Components/Nav/NavLeftButton";
import NavTop from "Components/Nav/NavTop";
import NavBottom from "Components/Nav/NavBottom";
import NavModal from "Components/Nav/NavModal";

export default class Nav extends Component {
  state = {
    isModalClicked: false
  };

  searchProduct = value => {
    this.setState({ isModalClicked: !this.state.isModalClicked });
    // console.log("!!!");
  };

  render() {
    console.log(this.state.isModalClicked);
    return (
      <header className="header">
        <NavTop
          searchProduct={this.searchProduct}
          isModalClicked={this.state.isModalClicked}
        />
        <NavBottom />
        <NavModal isModalClicked={this.state.isModalClicked} />
      </header>
    );
  }
}
