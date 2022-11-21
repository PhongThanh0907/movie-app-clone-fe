import React, { useState } from "react";
import Pro1 from "../../assets/pro1.jpg";
import Pro2 from "../../assets/pro2.png";
import Pro3 from "../../assets/pro3.png";
import Pro4 from "../../assets/pro4.png";
import Pro5 from "../../assets/banner-3.jpg";
import Eve1 from "../../assets/even1.jpg";
import Eve2 from "../../assets/even2jpg.jpg";
import Eve3 from "../../assets/event3.jpg";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

type Props = {};

const Promotion = (props: Props) => {
  const slider = React.useRef<HTMLDivElement | null>(null);
  const [openTab, setOpenTab] = useState(1);
  const slideLeft = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft - 1000;
  };

  const slideRight = () => {
    if (slider.current)
      slider.current.scrollLeft = slider.current.scrollLeft + 1000;
  };

  const imgPromotion = [Pro1, Pro2, Pro3, Pro4, Pro5];

  const imgEvent = [Eve1, Eve2, Eve3];

  return (
    <div id="promotion" className="py-10 bg-[black] text-[white] pb-[100px]">
      <div className="flex justify-center text-xl mb-10">
        <h1
          onClick={() => setOpenTab(1)}
          className="duration hover:text-mainColor hover:underline"
        >
          KHUYẾN MÃI
        </h1>
        <p className="px-4">|</p>
        <h1
          onClick={() => setOpenTab(2)}
          className="duration hover:text-mainColor hover:underline"
        >
          SỰ KIỆN
        </h1>
      </div>
      <div>
        <div className="relative flex items-center group w-[80%] m-auto">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white -left-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
          <div
            ref={slider}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative flex gap-6"
          >
            {openTab === 1
              ? imgPromotion.map((item, id) => (
                  <img
                    className="w-[450px] cursor-pointer h-[250px]"
                    key={id}
                    src={item}
                    alt="logo"
                  />
                ))
              : imgEvent.map((item, id) => (
                  <img
                    className="w-[450px] cursor-pointer h-[250px]"
                    key={id}
                    src={item}
                    alt="logo"
                  />
                ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            className="bg-white -right-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
