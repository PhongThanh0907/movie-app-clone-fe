import React from "react";
import Banner from "./Banner";
import ListFilm from "./ListFilm";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Banner />
      <ListFilm />
    </>
  );
};

export default Home;
