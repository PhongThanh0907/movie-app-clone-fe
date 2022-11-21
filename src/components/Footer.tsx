import React from "react";
import FooterImg from "../assets/footer.jpg";
import Note from "../assets/dathongbao.png";
import Logo from "../assets/logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="relative">
      <div className="relative text-[white] grid grid-cols-8 w-[80%] m-auto gap-6 pt-[80px] sm:grid-cols-4">
        <div className="relative z-10 col-span-2">
          <h1>VỀ BHD STAR</h1>
          <hr className="w-[15%] h-[4px] bg-[#c3c617] my-2" />
          <ul className="text-[#c3c617]">
            <li className="footer-item">Hệ Thống Rạp</li>
            <li className="footer-item">Tuyển Dụng</li>
            <li className="footer-item">Liên Hệ</li>
            <li>
              <img className="w-[60%]" src={Note} alt="note" />
            </li>
          </ul>
        </div>
        <div className="relative z-10 col-span-6">
          <h1>QUY ĐỊNH & ĐIỀU KHOẢN</h1>
          <hr className="w-[5%] h-[4px] bg-[#c3c617] my-2" />
          <ul className="text-[#c3c617]">
            <li className="footer-item">Quy định thành viên</li>
            <li className="footer-item ">Điều khoản</li>
            <li className="footer-item">Hướng dẫn đặt vé trực tuyến</li>
            <li className="footer-item">Quy định và chính sách chung</li>
            <li className="footer-item">Quy định thành viên</li>
            <li className="footer-item">
              Chính sách bảo vệ thông tin cá nhân của người tiêu dùng
            </li>
          </ul>
        </div>
        <img
          className="absolute z-10 -top-8 left-[45%] sm:left-[35%] sm:w-[30%]"
          src={Logo}
          alt="logo"
        />
      </div>

      <div className="relative z-10 text-center py-8 w-[80%] m-auto">
        <hr className="h-[2px] bg-[gray] my-8" />
        <p className="relative text-[white] z-10 text-sm">
          © 2015 BHD Star Cineplex
        </p>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={FooterImg}
        alt="background"
      />
    </div>
  );
};

export default Footer;
