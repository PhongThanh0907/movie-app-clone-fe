import ItemFilm from "../../components/ItemFilm";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackGround from "../../assets/background1.jpg";
import { getMovieList } from "../../redux/movies";

const ListFilm = () => {
  const [tabs, setTab] = useState(false);
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

  console.log(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const settingsSM = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-[10px] relative h-[600px] sm:h-[500px]">
      <div className="relative top-0 z-10 left-0 text-[white] h-full">
        <div className="text-center pt-8 flex justify-center gap-6 text-xl sm:text-sm sm:gap-2">
          <h1
            onClick={() => setTab(false)}
            className="hover:underline hover:text-mainColor duration"
          >
            PHIM ĐANG CHIẾU
          </h1>
          <h1
            onClick={() => setTab(true)}
            className="hover:underline hover:text-mainColor duration"
          >
            PHIM SẮP CHIẾU
          </h1>
          <h1 className="hover:underline hover:text-mainColor duration">
            VÉ BÁN TRƯỚC
          </h1>
        </div>
        {tabs ? (
          <>
            <div className="w-[90%] m-auto sm:hidden">
              <Slider className="gap-2 " {...settings}>
                {data
                  .filter((item) => item.upcomingMovie)
                  .map((itemData) => (
                    <ItemFilm
                      key={itemData._id}
                      img={itemData.photos}
                      title={itemData.tenPhim}
                      idFilm={itemData._id}
                    />
                  ))}
              </Slider>
            </div>
            <div className="w-[85%] m-auto lt:hidden">
              <Slider className="gap-2 " {...settingsSM}></Slider>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="w-[90%] m-auto sm:hidden">
              <Slider className="gap-2 " {...settings}>
                {data
                  .filter((item) => !item.upcomingMovie)
                  .map((itemData, index) => (
                    <ItemFilm
                      key={index}
                      img={itemData.photos}
                      title={itemData.tenPhim}
                      idFilm={itemData._id}
                    />
                  ))}
              </Slider>
            </div>
            <div className="w-[85%] m-auto lt:hidden">
              <Slider className="gap-2 " {...settingsSM}></Slider>
            </div>
          </>
        )}
      </div>
      <img
        className="absolute top-0 z-0 h-full w-full"
        src={BackGround}
        alt="background"
      />
    </div>
  );
};

export default ListFilm;
