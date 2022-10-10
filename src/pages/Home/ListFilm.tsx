import React, { useRef } from "react";
import ItemFilm from "../../components/ItemFilm";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

type Props = {};

const ListFilm = (props: Props) => {
  const slider = useRef<HTMLDivElement | null>(null);
  const slideLeft = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft - 500;
  };

  const slideRight = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft + 500;
  };
  return (
    <div className="pt-[50px]">
      <div>
        <div>
          <h1>PHIM ĐANG CHIẾU</h1>
          <h1>PHIM SẮP CHIẾU</h1>
          <h1>VÉ BÁN TRƯỚC</h1>
        </div>
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
          <div
            id={"slider"}
            className="w-80% m-auto h-full overflow-scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative flex"
          >
            <ItemFilm />
            <ItemFilm />
            <ItemFilm />
            <ItemFilm />
            <ItemFilm />
            <ItemFilm />
            <ItemFilm />
          </div>
          <MdChevronRight
            onClick={slideRight}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        </div>
      </div>
      <div className="flex overflow-x-scroll gap-10 whitespace-nowrap relative">
        <ItemFilm />
        <ItemFilm />
        <ItemFilm />
        <ItemFilm />
        <ItemFilm />
        <ItemFilm />
        <ItemFilm />
      </div>
    </div>
  );
};

export default ListFilm;
