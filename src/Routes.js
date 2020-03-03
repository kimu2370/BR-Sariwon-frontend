import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Flavor from "Pages/Flavor/Flavor";
import Nav from "Components/Nav/Nav";
import Login from "Pages/Login/Login";
import Signup from "Pages/Signup/Signup";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Flavor} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
