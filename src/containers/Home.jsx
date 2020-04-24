import React from "react";

import { HomeContainer } from "../style/elementsStyle";

import Footer from "../components/utils/Footer";

const Home = () => {
  return (
    <HomeContainer>
      <div
        style={{
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>This is the Home page.</p>
      </div>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
