import React from "react";
import { Link } from "react-router-dom";
import BackGround from "../../assets/bg-cinema-10.png";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="h-[70vh] relative flex items-center justify-center sm:h-[50vh]">
      <div className="text-center relative z-10 text-[white]">
        <h1 className="text-2xl py-8">Đăng Nhập</h1>
        <div className="bg-[#1c262f] py-10 w-[600px] sm:w-[100%]">
          <div className="flex justify-between items-center w-[90%] m-auto my-6">
            <h1 className="text-[#bfc9d2] font-semibold">Email (*)</h1>
            <input
              className="focus:outline-none focus:shadow-outline py-1 px-2 bg-[#37424b] rounded w-[60%]"
              type="email"
            />
          </div>
          <div className="flex justify-between items-center w-[90%] m-auto">
            <h1 className="text-[#bfc9d2] font-semibold">Mật khẩu (*)</h1>
            <input
              className="focus:outline-none focus:shadow-outline py-1 px-2 bg-[#37424b] rounded w-[60%]"
              type="password"
            />
          </div>
          <div className="flex justify-between items-center w-[90%] m-auto my-6 sm:text-sm sm:w-full gap-2">
            <button className="bg-[#64b12a] px-10 py-3 rounded sm:px-6 sm:py-2">
              ĐĂNG NHẬP
            </button>
            <Link to="/dang-ky">
              <p className="text-[#bfc9d2]">
                Bạn chưa có tài khoản{" "}
                <button className="text-[white] underline hover:text-[#64b12a] duration-300">
                  Đăng Ký
                </button>{" "}
                ngay
              </p>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={BackGround}
        alt=""
      />
    </div>
  );
};
export default Login;
