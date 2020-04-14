import React from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Router from "./Router";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Chargement</div>;
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
