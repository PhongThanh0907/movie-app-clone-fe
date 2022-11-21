import React from "react";
import { HiOutlineTicket } from "react-icons/hi";
import { Link } from "react-router-dom";
import Img1 from "../assets/img1.jpeg";

interface Props {
  img: string;
  title: string;
  idFilm: string;
}

const ItemFilm = (props: Props) => {
  return (
    <div className="mx-4 h-[440px] mt-10 sm:h-[380px] relative">
      <img
        className="h-[70%] w-full scale-100 duration hover:scale-110 sm:h-[55%]"
        src={props.img}
        alt="img"
      />
      <h1 className="mt-4 mb-8 text-center text-xl font-semibold hover:text-mainColor duration sm:text-sm">
        {props.title}
      </h1>
      <Link to={`/movie/${props.idFilm}`}>
        <button className="flex absolute bottom-0 w-full items-center justify-center gap-2 m-auto py-3 bg-mainColor rounded text-[white] hover:bg-[white] hover:text-mainColor font-bold duration-300 sm:py-1">
          <HiOutlineTicket />
          MUA VÉ
        </button>
      </Link>
    </div>
  );
};

export default ItemFilm;
