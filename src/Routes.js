import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "Pages/Nav/Nav";
import Flavor from "Pages/Flavor/Flavor";
import Login from "Pages/Login/Login";
import Signup from "Pages/Signup/Signup";
import MenuDetail from "Pages/MenuDetail/MenuDetail";
import FindStore from "Pages/FindStore/FindStore";
import ItemList from "Pages/ItemList/ItemList";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Flavor} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/menu/detail" component={MenuDetail} />
          <Route exact path="/findstore" component={FindStore} />
          <Route exact path="/itemlist" component={ItemList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
