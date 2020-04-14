import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Router from "./Router";
import Loader from "./components/Loader";
import { LoaderWrapper } from "./style/elementsStyle";

function AuthIsLoaded({ children }) {
  // Connect to redux state using selector hook
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
