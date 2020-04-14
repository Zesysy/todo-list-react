import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Router from "./Router";
import Loader from "./components/Loader";
import { LoaderWrapper } from "./style/elementsStyle";

function AuthIsLoaded({ children }) {
  // Using the react-redux selector to retrieve the authentication status, which gives access to the isLoaded property
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
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

export default App;
