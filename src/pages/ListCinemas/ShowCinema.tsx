import React from "react";
import ItemCinema from "../../components/ItemCinema";
import BackGround from "../../assets/showtime.jpg";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { getCinemaList } from "../../redux/cinema";

type Props = {};

const ShowCinema = (props: Props) => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.cinema
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCinemaList());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(data);
  return (
    <div className="pt-10 relative pb-10">
      <h1 className="text-[white] relative z-10 text-center text-3xl my-4 sm:text-xl">
        HỆ THỐNG RẠP
      </h1>
      <div className="grid grid-cols-4 w-[75%] m-auto relative z-10 sm:w-[90%] sm:grid-cols-2">
        {data.map((item, index) => (
          <ItemCinema key={index} name={item.nameCinema} showlike={item.like} />
        ))}
      </div>
      <img
        className="absolute top-0 left-0 h-full w-full"
        src={BackGround}
        alt="background"
      />
    </div>
  );
};

export default ShowCinema;
