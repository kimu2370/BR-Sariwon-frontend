import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "Pages/Nav/Nav";
import Flavor from "Pages/Flavor/Flavor";
import Login from "Pages/Login/Login";
import FindStore from "Pages/FindStore/FindStore";

class Routes extends Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Flavor} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/findstore" component={FindStore} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
