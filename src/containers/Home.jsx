import React from "react";
import { useSelector } from "react-redux";

import {
  HomeContainer,
  HomeContent,
  Icon,
  IconsWrapper,
} from "../style/homeContainersStyle";

import Footer from "../components/utils/Footer";
import Heading from "../components/custom/Heading";
import Loader from "../components/utils/Loader";

const Home = () => {
  const items = [
    {
      id: 0,
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/sylene-manusset/",
    },
    {
      id: 1,
      icon: "fab fa-github-alt",
      link: "https://github.com/Zesysy",
    },
    { id: 2, icon: "fas fa-code", link: "https://www.sylene-manusset.com/" },
  ];

  const getProfile = useSelector((state) => state.firebase.profile);

  return !getProfile.isLoaded ? (
    <Loader />
  ) : (
    <HomeContainer>
      <HomeContent>
        <Heading
          size="h2"
          color="text"
          style={{ textAlign: "center", marginBottom: "7rem" }}
        >
          Bienvenue{getProfile.firstName ? " " + getProfile.firstName : null},
          <br /> prêt(e) à écrire dans votre journal ?!
        </Heading>
        <Heading
          size="h4"
          color="text"
          style={{ textAlign: "center", marginTop: "8rem", marginBottom: "0" }}
        >
          Vous souhaitez me retrouver ?
          <br />
          C'est par ici <i className="fas fa-arrow-down"></i>
        </Heading>
        <IconsWrapper>
          {items.map(({ link, icon }, key) => (
            <Icon key={key} href={link} target="_blank">
              <i className={icon}></i>
            </Icon>
          ))}
        </IconsWrapper>
      </HomeContent>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
