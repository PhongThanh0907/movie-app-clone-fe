import React from "react";
import Promotion from "../Home/Promotion";
import ListShowFilms from "./ListShowFilms";

type Props = {};

const HomeShowTimes = (props: Props) => {
  return (
    <div>
      <ListShowFilms />
      <Promotion />
    </div>
  );
};

export default HomeShowTimes;
