import React from "react";
import Img1 from "../assets/imgcinema.jpg";

interface Props {
  name: string;
  showlike: string;
}

const ItemCinema = (props: Props) => {
  return (
    <div className="m-6 text-[white]">
      <img className="img-cinema" src={Img1} alt="item" />
      <div>
        <h1 className="title-cinema my-4 sm:text-sm">{props.name}</h1>
        <div className="flex justify-between items-center">
          <p className="text-sm text-[gray] sm:text-xs">{props.showlike}</p>
          <button className="button-share sm:text-xs">Chia sẻ</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCinema;
