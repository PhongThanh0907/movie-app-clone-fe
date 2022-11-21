import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackGround from "../../assets/bg-cinema-10.png";
import MovieImg from "../../assets/img1.jpeg";
import Button from "../../components/Button";
import { AiOutlineClose } from "react-icons/ai";
import movieAPI from "../../api/movieAPI";

const Movie = () => {
  const [movieDetail, setMovieDetail] = useState<any>({});
  const { id } = useParams<{ id: string | any }>();
  const fetchMovie = async () => {
    try {
      const res = await movieAPI.getMovie(id);
      setMovieDetail(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movieDetail);
  useEffect(() => {
    fetchMovie();
  }, [id]);
  console.log(id);

  const [showTrailer, setShowTrailer] = useState(false);
  return (
    <div className="relative">
      <div className="relative z-10 text-[white] flex text-2xl py-6 w-[75%] m-auto sm:text-xl sm:justify-center">
        <Link to="/">
          <h1 className="title-cinema">Trang Chủ</h1>
        </Link>
        <p className="px-3">|</p>
        <h1>{movieDetail.tenPhim}</h1>
      </div>
      <div className="relative z-10 text-[white] grid grid-cols-6 w-[75%] m-auto gap-8 sm:w-[90%] sm:grid-cols-1 sm:gap-0">
        <div className="sm:w-[70%] sm:m-auto sm:my-3">
          <img src={movieDetail.photos} alt="img-movie" />
        </div>
        <div className="col-span-4">
          <h1 className="text-2xl sm:text-xl">{movieDetail.tenPhim}</h1>
          <p className="py-4 text-[gray] sm:text-xs">{movieDetail.desc}</p>
          <div className="grid grid-cols-5 sm:text-[10px]">
            <ul className="col-span-1">
              <li className="py-1">Phân Loại</li>
              <li className="py-1">Đạo diễn</li>
              <li className="py-1">Diễn viên</li>
              <li className="py-1">Thể loại</li>
              <li className="py-1">Khởi chiếu</li>
              <li className="py-1">Thời lượng</li>
              <li className="py-1">Ngôn ngữ</li>
            </ul>
            <ul className="col-span-4">
              <li className="py-1 font-bold text-[red]">
                {movieDetail.classify}
              </li>
              <li className="py-1"> {movieDetail.director}</li>
              <li className="py-1"> {movieDetail.actions}</li>
              <li className="py-1"> {movieDetail.category}</li>
              <li className="py-1">{movieDetail.startDay}</li>
              <li className="py-1">{movieDetail.time}</li>
              <li className="py-1">Phụ đề tiếng Việt</li>
            </ul>
          </div>
          <div className="flex pt-10 sm:justify-center sm:mb-[60px]">
            <div className="mr-4">
              <button
                className="py-2 px-6 bg-mainColor rounded text-[white] font-semibold hover:bg-[white] hover:text-mainColor duration-300"
                onClick={() => setShowTrailer(!showTrailer)}
              >
                Xem Trailer
              </button>
            </div>
            <div>
              <Link to="/movie/id">
                <Button name="MUA VÉ NGAY" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={BackGround}
        alt="background"
      />
      {showTrailer && (
        <div className="absolute top-0 z-50 w-full h-[100vh] transparent sm:h-[350px]">
          <button className="text-[white] absolute right-10 border rounded-full p-2">
            <AiOutlineClose
              className="text-2xl sm:text-xs"
              onClick={() => setShowTrailer(false)}
            />
          </button>

          <iframe
            className="h-full w-[80%] m-auto"
            width="560"
            height="315"
            src={`"${movieDetail.trailer}"`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Movie;
