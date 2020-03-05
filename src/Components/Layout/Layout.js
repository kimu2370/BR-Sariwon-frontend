import React, { Component } from "react";
import Nav from "Pages/Nav/Nav";
class Layout extends Component {
  render() {
    return (
      <>
        <Nav />
        {this.props.children}
        {/* <Footer /> */}
      </>
    );
  }
}

export default Layout;
