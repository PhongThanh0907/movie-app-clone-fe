import React from "react";
import Img1 from "../assets/img1.jpeg";

interface Props {
  img: string;
  title: string;
}

const ItemFilmShowTime = (props: Props) => {
  return (
    <div className="mx-6 hover:border hover:border-[#d4dd29] duration-300 border-[#d4dd29] sm:mx-2 h-[380px]">
      <img className="h-[70%] w-full sm:h-[70%]" src={props.img} alt="img" />
      <h1 className="mt-4 mb-8 text-center text-xl font-semibold hover:text-[#d4dd29] duration sm:text-sm sm:mb-4">
        {props.title}
      </h1>
    </div>
  );
};

export default ItemFilmShowTime;
