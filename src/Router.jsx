import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./containers/Home";
import Todos from "./containers/Todos";
import Login from "./containers/auth/Login";
import SignUp from "./containers/auth/SignUp";
import Logout from "./containers/auth/Logout";
import VerifyEmail from "./containers/auth/VerifyEmail";

const Router = () => {
  let routes;

  const getAuth = useSelector((state) => state.firebase.auth);

  getAuth.uid && !getAuth.emailVerified
    ? (routes = (
        <>
          <Route path="/verify-email" exact component={VerifyEmail} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/verify-email" />
        </>
      ))
    : getAuth.uid && getAuth.emailVerified
    ? (routes = (
        <>
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={Todos} />
          <Route path="/logout" component={Logout} />
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

export default Router;
