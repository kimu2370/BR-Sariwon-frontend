import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Flavor from "Pages/Flavor/Flavor";
import Login from "Pages/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Flavor} /> */}
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
