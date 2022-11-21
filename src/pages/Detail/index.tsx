import React, { useState } from "react";
import data from "./data.json";

const Detail = () => {
  const [numberTickets, setNumberTickets] = useState(0);
  const [numberVipTickets, setNumberVipTickets] = useState(0);
  const [modalChair, setModalChair] = useState(false);
  const increaseTicket = () => {
    const data = numberTickets + 1;
    setNumberTickets(data);
  };

  const increaseTicketVip = () => {
    const data = numberVipTickets + 1;
    setNumberVipTickets(data);
  };

  const decreaseTicket = () => {
    const data = numberTickets - 1;
    setNumberTickets(data);
  };

  const decreaseTicketVip = () => {
    const data = numberVipTickets - 1;
    setNumberVipTickets(data);
  };

  return (
    <div className="py-16 bg-[black] text-[white]">
      <div className="grid grid-cols-6 w-[75%] m-auto gap-10 sm:grid-cols-1 sm:w-[90%]">
        <div className="grid grid-cols-5 col-span-4 border-[3px] border-mainColor px-4 py-6 h-[180px] relative sm:grid-cols-3 sm:h-full gap-4">
          <div className="col-span-2">
            <h1>Vé</h1>
            <p className="py-4">Adult-Stand-2D</p>
            <p>AAdult-Vip-2D</p>
          </div>
          <div className="col-span-1">
            <h1>Giá</h1>
            <p className="py-4">85,000.00</p>
            <p>95,000.00</p>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <h1>Số lượng</h1>
            <div className="py-3">
              <button
                disabled={numberTickets <= 0}
                className="w-[30px] h-[30px] border border-mainColor text-mainColor"
                onClick={() => decreaseTicket()}
              >
                -
              </button>
              <span className="mx-4">{numberTickets}</span>
              <button
                className="w-[30px] h-[30px] border border-mainColor text-mainColor"
                onClick={() => increaseTicket()}
              >
                +
              </button>
            </div>
            <div>
              <button
                disabled={numberVipTickets <= 0}
                className="w-[30px] h-[30px] border border-mainColor text-mainColor"
                onClick={() => decreaseTicketVip()}
              >
                -
              </button>
              <span className="mx-4">{numberVipTickets}</span>
              <button
                className="w-[30px] h-[30px] border border-mainColor text-mainColor"
                onClick={() => increaseTicketVip()}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <h1>Tổng</h1>
            <p className="py-4">
              {(numberTickets * 85000).toLocaleString("vi-VN")} VND
            </p>
            <p>{(numberVipTickets * 95000).toLocaleString("vi-VN")} VND</p>
          </div>
          {numberTickets > 0 || numberVipTickets > 0 ? (
            <button
              onClick={() => setModalChair(!modalChair)}
              className="absolute -bottom-12 right-0 px-6 py-2 bg-[red] rounded text-xl font-bold"
            >
              Chọn Ghế
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="col-span-2 p-4 bg-[#333333] h-[220px]">
          <h1 className="text-xl font-bold">GIỎ HÀNG CỦA BẠN</h1>
          <hr className="h-[1px] bg-[white]" />
          <div className="grid grid-cols-5 text-sm py-4">
            <div className="col-span-2">
              <p className="py-2">Adult-Stand-2D: </p>
              <p>Adult-Vip-2D: </p>
            </div>
            <div className="col-span-1 text-center">
              <p className="py-2">{numberTickets}</p>
              <p>{numberVipTickets}</p>
            </div>
            <div className="text-right col-span-2">
              <p className="py-2">
                {(numberTickets * 85000).toLocaleString("vi-VN")} VND
              </p>
              <p>{(numberVipTickets * 95000).toLocaleString("vi-VN")} VND</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between py-4">
            <h1>Tổng Cộng</h1>
            <p>
              {(
                numberTickets * 85000 +
                numberVipTickets * 95000
              ).toLocaleString("vi-VN")}{" "}
              VND
            </p>
          </div>
        </div>
      </div>
      {modalChair && (
        <div className=" w-[75%] m-auto justify-center py-8 sm:w-[90%]">
          <h1 className="text-2xl text-mainColor font-bold">Chọn ghế</h1>
          <p className="py-8">
            Vui lòng chọn ghế trong sơ đồ ghế phía dưới. Nếu bạn muốn chọn loại
            ghế khác hoặc thay đổi số lượng vé muốn mua vui lòng nhấp vào Bước 1
            "Chọn Vé" ở thanh công cụ bên trên để quay trở lại màn hình chọn.
          </p>
          <div className="flex gap-6 py-4 justify-center">
            <div className="flex gap-2 justify-center items-center">
              <div className="h-[30px] w-[30px] bg-[red]"></div>
              <h1 className="text-sm">Ghế Đã Chọn</h1>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="h-[30px] w-[30px] bg-[#626366]"></div>
              <h1 className="text-sm">Ghế Trống</h1>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="h-[30px] w-[30px] bg-[#c1c1c1]"></div>
              <h1 className="text-sm">Ghế Đã Bán</h1>
            </div>
          </div>
          <div className="w-[60%] m-auto bg-[#14252d] py-3 sm:w-[90%]">
            <h1 className="text-center my-3 py-2 w-[60%] bg-[#626366] m-auto sm:w-[90%]">
              MÀN HÌNH
            </h1>
            {data.map((item, id) => {
              return (
                <div className="grid grid-cols-5 sm:grid-cols-8">
                  <h1 className="col-span-1 text-right my-1 mx-3 sm:col-span-1 sm:text-[12px]">
                    {item.hang}
                  </h1>
                  <div className="col-span-3 flex justify-center sm:col-span-6 ">
                    {item.danhSachGhe.map((seat, id) => {
                      return (
                        <div className="w-[30px] h-[30px] bg-[#c1c1c1] m-1 text-center sm:w-[16px] sm:h-[16px]">
                          <h1 className="sm:text-[10px]">{seat.soGhe}</h1>
                        </div>
                      );
                    })}
                  </div>
                  <h1 className="col-span-1 my-1  mx-3 sm:col-span-1 sm:text-[12px]">
                    {item.hang}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="w-[35%] m-auto text-center my-6 sm:w-[50%] sm:text-sm">
            <button className="px-6 py-2 bg-[red] rounded text-xl font-bold ">
              XÁC NHẬN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
