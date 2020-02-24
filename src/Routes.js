import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Flavor from "Pages/Flavor/Flavor";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Flavor} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
