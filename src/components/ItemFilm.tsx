import React from "react";
import { HiOutlineTicket } from "react-icons/hi";
import Img1 from "../assets/img1.jpeg";

type Props = {};

const ItemFilm = (props: Props) => {
  return (
    <div className="w-[400px] text-center ">
      <img className="h-[20px] w-full" src={Img1} alt="img" />
      <h1 className="mt-2 mb-4">Title Phim</h1>
      <button className="flex items-center justify-center gap-2 m-auto py-2 bg-mainColor w-full rounded text-[white] hover:bg-[white] hover:text-mainColor font-bold duration-300">
        <HiOutlineTicket />
        MUA VÉ
      </button>
    </div>
  );
};

export default ItemFilm;
