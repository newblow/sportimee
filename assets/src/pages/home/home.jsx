import React, { useEffect, useState } from "react";
import axios from "axios";
import process from "process";
import Footer from "../../components/layouts/footer";
import Header from "../../components/layouts/header";
import Intro from "./Intro";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  console.log(process.env.URL_TEST);

  useEffect(() => {
      AOS.init();
    axios
      .get(process.env.URL_TEST)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Bien joué");
      });
  }, []);

  return (
    <>
      <Header />
      <Intro/>
      <Footer />
    </>
  );
};

export default Home;
