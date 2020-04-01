import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./containers/Home";
import Todos from "./containers/Todos";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todos" component={Todos} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
