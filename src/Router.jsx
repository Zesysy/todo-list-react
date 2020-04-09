import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./containers/Home";
import Todos from "./containers/Todos";
import Login from "./containers/auth/Login";
import SignUp from "./containers/auth/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/todos" component={Todos} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
