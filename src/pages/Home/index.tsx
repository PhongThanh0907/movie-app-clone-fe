import React from "react";
import Banner from "./Banner";
import ListFilm from "./ListFilm";
import Promotion from "./Promotion";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banner />
      <ListFilm />
      <Promotion />
    </>
  );
};

export default Home;
