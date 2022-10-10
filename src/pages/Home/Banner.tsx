import React, { useRef } from "react";
import Banner01 from "../../assets/banner-1.png";
import Banner02 from "../../assets/banner-2.jpg";
import Banner03 from "../../assets/banner-3.jpg";
import Banner04 from "../../assets/banner-4.jpg";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

type Props = {};

const Banner = (props: Props) => {
  const dataImg = [Banner01, Banner02, Banner03, Banner04];
  const slider = React.useRef<HTMLDivElement | null>(null);
  const slideLeft = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft - 1000;
  };

  const slideRight = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft + 1000;
  };

  return (
    <div>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          ref={slider}
          className=" overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative flex"
        >
          {dataImg.map((item, id) => (
            <img className="" key={id} src={item} alt="img" />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Banner;
