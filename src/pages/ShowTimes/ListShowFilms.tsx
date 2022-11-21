import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemFilmShowTime from "../../components/ItemFilmShowTime";
import BackGroundImg from "../../assets/showtime.jpg";
import { getMovieList } from "../../redux/movies";

type Props = {};

const ListShowFilms = (props: Props) => {
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="relative pt-10">
      <div className="relative z-10 text-[white]">
        <div className="flex text-center justify-center py-8 gap-6">
          <h1 className="title-showtimes sm:text-sm">LỊCH CHIẾU THEO PHIM</h1>
          <p>|</p>
          <h1 className="title-showtimes sm:text-sm">LỊCH CHIẾU THEO RẠP</h1>
        </div>
        <div className="w-[80%] m-auto sm:hidden">
          <Slider {...settings}>
            {data.map((item) => (
              <ItemFilmShowTime img={item.photos} title={item.tenPhim} />
            ))}
          </Slider>
        </div>
        <div className="w-[80%] m-auto lt:hidden">
          <Slider {...mobileSettings}>
            {data.map((item) => (
              <ItemFilmShowTime img={item.photos} title={item.tenPhim} />
            ))}
          </Slider>
        </div>
        <hr className="h-[4px] bg-mainColor w-[70%] border-mainColor m-auto mt-10" />
      </div>

      <img
        className="absolute top-0 left-0 h-full w-full"
        src={BackGroundImg}
        alt="background"
      />
    </div>
  );
};

export default ListShowFilms;
