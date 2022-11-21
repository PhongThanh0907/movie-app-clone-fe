import React from "react";
import { Link } from "react-router-dom";
import BackGround from "../../assets/bg-cinema-10.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { getCinemaList } from "../../redux/cinema";

type Props = {};

const Information = (props: Props) => {
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
    <div className="relative text-[white]">
      <div className="relative z-10 w-[75%] m-auto pt-12 sm:w-[90%]">
        <h1 className="text-center text-2xl sm:text-xl">
          VUI LÒNG CHỌN THÔNG TIN VÉ
        </h1>
        <hr className="h-[2px] bg-mainColor border-mainColor my-4" />
        <div className="flex w-[90%] m-auto">
          <div className="p-3 bg-mainColor">
            <h1>Thứ 7</h1>
            <p>15-10</p>
          </div>
          <div className="p-3 hover:bg-mainColor">
            <h1>Chủ Nhật</h1>
            <p>16-10</p>
          </div>
        </div>
        {data.map((item) => (
          <div className="grid grid-cols-6 gap-6 w-[90%] m-auto py-10">
            <div className="col-span-2 w-[80%] p-4 bg-[#1c2936] shadow-2xl sm:text-sm">
              <h1>{item.nameCinema}</h1>
              <p className="text-sm text-[#90a0ba] my-2 sm:hidden">
                {item.address}
              </p>
            </div>
            <div className="grid grid-cols-5 col-span-4 gap-6 sm:grid-cols-2">
              <Link to="/movie/id/detail">
                <div>
                  <h1 className="showtime-item">13:10</h1>
                </div>
              </Link>

              <div>
                <h1 className="showtime-item">13:10</h1>
              </div>
              <div>
                <h1 className="showtime-item">13:10</h1>
              </div>
              <div>
                <h1 className="showtime-item">13:10</h1>
              </div>
              <div>
                <h1 className="showtime-item">13:10</h1>
              </div>
              <div>
                <h1 className="showtime-item">13:10</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={BackGround}
        alt="background"
      />
    </div>
  );
};

export default Information;
