import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Flavor from "Pages/Flavor/Flavor";
import Nav from "Components/Nav/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Flavor} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
