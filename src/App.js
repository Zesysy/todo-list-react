import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Layout from "./components/utils/Layout";
import Router from "./Router";
import Loader from "./components/utils/Loader";
import { LoaderWrapper } from "./style/elementsStyle";

function AuthIsLoaded({ children }) {
  // Connect to redux state using selector hook
  const getAuth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(getAuth))
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <Layout>
          <Router />
        </Layout>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

AuthIsLoaded.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
