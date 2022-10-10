import ScrollDown from "../../assets/scroll-down.png";
import Banner01 from "../../assets/banner-1.png";
import Banner02 from "../../assets/banner-2.jpg";
import Banner03 from "../../assets/banner-3.jpg";
import Banner04 from "../../assets/banner-4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Props = {};

const Banner = (props: Props) => {
  const dataImg = [Banner01, Banner02, Banner03, Banner04];
  // const slider = React.useRef<HTMLDivElement | null>(null);
  // const slideLeft = () => {
  //   if (slider.current)
  //     slider.current.scrollLeft = slider.current.scrollLeft - 1000;
  // };

  // const slideRight = () => {
  //   if (slider.current)
  //     slider.current.scrollLeft = slider.current.scrollLeft + 1000;
  // };

  return (
    <div className="relative">
      <Carousel showThumbs={false}>
        {dataImg.map((item, id) => (
          <img className="h-[95vh] sm:h-[40vh]" key={id} src={item} alt="img" />
        ))}
      </Carousel>
      <img className="absolute bottom-[-17px] " src={ScrollDown} alt="" />
    </div>
  );
};

export default Banner;
