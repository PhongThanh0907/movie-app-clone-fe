import React, { useState, useEffect } from "react";
import { CgFormatJustify } from "react-icons/cg";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";
import lineHeader from "../assets/line-header1.png";
import Logo from "../assets/logo.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        scrolled
          ? "bg-[black] flex justify-between items-center h-[60px] relative duration-300 z-30"
          : "bg-[black] flex justify-between items-center h-[80px] relative  duration-300 z-30"
      }
    >
      <div className="flex items-center gap-5">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-center px-4 py-2 transparent cursor-pointer"
        >
          {openMenu ? (
            <>
              <AiOutlineClose className="m-auto text-3xl text-mainColor sm:text-xl" />
              <p className="text-sm text-[white] font-bold">ĐÓNG</p>
            </>
          ) : (
            <>
              <CgFormatJustify className="m-auto text-3xl text-mainColor sm:text-xl" />
              <p className="text-sm text-[white] font-bold">MENU</p>
            </>
          )}

          {!openMenu ? (
            <div className="absolute bg-[black] left-0 p-3 pl-10 text-sm text-[#bfbfbf] top-0 transition w-[350px] opacity-0"></div>
          ) : (
            <div className="absolute bg-[black] left-0 p-3 pl-10 text-xl text-[#bfbfbf] top-[80px] text-left transition w-[350px] sm:w-[280px]">
              <ul className="pr-20 sm:text-sm">
                <Link to="/lich-chieu-theo-phim">
                  <li className="menu-list">LỊCH CHIẾU</li>
                </Link>
                <Link to="/he-thong-rap">
                  <li className="menu-list">HỆ THỐNG RẠP</li>
                </Link>
                <a href="#promotion">
                  <li className="menu-list">KHUYẾN MÃI | SỰ KIỆN</li>
                </a>
                <Link to="/">
                  <li className="menu-list">DỊCH VỤ QUẢNG CÁO</li>
                </Link>
                <Link to="/">
                  <li className="menu-list">TUYỂN DỤNG</li>
                </Link>
                <Link to="/">
                  <li className="menu-list">VỀ CHÚNG TÔI</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className="sm:hidden">
          <Button name="Mua Vé" />
        </div>
      </div>

      <div className="z-10 absolute left-[47%] top-[22%] sm:left-[43%]">
        <Link to="/">
          <img className="w-[70%] sm:w-[50%]" src={Logo} alt="" />
        </Link>
      </div>

      <div className="flex gap-4 pr-6 items-center">
        <div className="text-[white] grid grid-cols-4 gap-4 sm:hidden">
          <AiOutlineInstagram className="menu-item" />
          <FaTiktok className="menu-item" />
          <AiFillYoutube className="menu-item" />
          <FaFacebookF className="menu-item" />
        </div>
        <div className="lt:px-4">
          <button className="lt:hidden sm:text-[white] sm:text-xl p-3 transparent sm:ml-3">
            <AiOutlineUser />
          </button>
          <div className="sm:hidden">
            <Link to="/dang-nhap">
              <Button name="Đăng Nhập" />
            </Link>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-[-39%] left-[17%] sm:hidden"
        src={lineHeader}
        alt="logo"
      />
    </div>
  );
};

export default Header;
