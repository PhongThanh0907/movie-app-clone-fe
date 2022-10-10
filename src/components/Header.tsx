import React, { useState, useEffect } from "react";
import { CgFormatJustify } from "react-icons/cg";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineClose,
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
          ? "bg-[black] flex justify-between items-center h-[50px] relative duration-300 z-50"
          : "bg-[black] flex justify-between items-center h-[80px] relative  duration-300 z-50"
      }
    >
      <div className="flex items-center gap-5">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-center px-4 py-2 transparent cursor-pointer"
        >
          {openMenu ? (
            <>
              <AiOutlineClose className="m-auto text-3xl text-mainColor" />
              <p className="text-sm text-[white] font-bold">ĐÓNG</p>
            </>
          ) : (
            <>
              <CgFormatJustify className="m-auto text-3xl text-mainColor" />
              <p className="text-sm text-[white] font-bold">MENU</p>
            </>
          )}

          {!openMenu ? (
            <div className="absolute bg-[black] left-0 p-3 pl-10 text-sm text-[#bfbfbf] top-0 transition w-[350px] opacity-0"></div>
          ) : (
            <div className="absolute bg-[black] left-0 p-3 pl-10 text-xl text-[#bfbfbf] top-[80px] text-left transition w-[350px]">
              <ul className="pr-20">
                <Link to="/">
                  <li className="menu-list">LỊCH CHIẾU</li>
                </Link>
                <Link to="/">
                  <li className="menu-list">HỆ THỐNG RẠP</li>
                </Link>
                <Link to="/">
                  <li className="menu-list">KHUYẾN MÃI | SỰ KIỆN</li>
                </Link>
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
        <div>
          <Button name="Mua Vé" />
        </div>
      </div>

      <div className="z-10 absolute left-[47%] top-[22%]">
        <Link to="/">
          <img className="w-[70%]" src={Logo} alt="" />
        </Link>
      </div>

      <div className="flex gap-4 pr-6 items-center">
        <div className="text-[white] grid grid-cols-4 gap-4">
          <AiOutlineInstagram className="menu-item" />
          <FaTiktok className="menu-item" />
          <AiFillYoutube className="menu-item" />
          <FaFacebookF className="menu-item" />
        </div>
        <div className="px-4">
          <Button name="Đăng Nhập" />
        </div>
      </div>
      <img
        className="absolute bottom-[-39%] left-[17%]"
        src={lineHeader}
        alt="logo"
      />
    </div>
  );
};

export default Header;
