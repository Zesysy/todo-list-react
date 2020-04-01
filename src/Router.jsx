import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./containers/Home";
import Todos from "./containers/Todos";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/todos" component={Todos} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
