import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Home from "./containers/Home";
import Todos from "./containers/Todos";
import Login from "./containers/auth/Login";
import SignUp from "./containers/auth/SignUp";

const Router = () => {
  const loggedIn = useSelector((state) => state.firebase.auth.uid);
  let routes;

  loggedIn
    ? (routes = (
        <>
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={Todos} />
          <Redirect to="/" />
        </>
      ))
    : (routes = (
        <>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Redirect to="/" />
        </>
      ));

  return <Switch>{routes}</Switch>;
};

Router.propTypes = {
  loggedIn: PropTypes.string,
};

export default Router;
