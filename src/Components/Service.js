import React from "react";
import { useNavigate } from "react-router-dom";
import order from "../Assets/online-food.jpg";
import table from "../Assets/table-book.jpg";
import hotel from "../Assets/hotel-room.jpg";



const Service = () => {
  const navigate = useNavigate();

  const handleOrderClick = (e) => {
    navigate(`/menu`);
  };
  const handleTableClick = (e) => {
    navigate(`/TablePage`);
  };
  const handleRoomClick = (e) => {
    navigate(`/RoomPage`);
  };


  return (
    <div>
      <div className="md:grid md:grid-cols-3 lg:px-20 md:gap-5  lg:my-10 md:my-5 lg:gap-20 p-10 ">
        <div className="h-auto bg-white p-3 rounded-xl mb-5 shadow-2xl " onClick={handleOrderClick}>
          <img src= {order} alt="" className=" md:h-56 w-full object-cover rounded-xl"/>
          <div className="text-center p-5 ">
            <p className="mb-2 font-bold  md:text-2xl text-slate-900">ORDER FOOD</p>
            <p className="font-medium text-sm text-slate-900">
              Get Your Food On Your Doorsteps
            </p>
            
          </div>
        </div>

        <div className="h-auto bg-white p-3 rounded-xl mb-5 shadow-2xl" onClick={handleTableClick}>
          <img src= {table} alt="" className=" md:h-56 w-full object-cover rounded-xl"/>
          <div className="text-center p-5 ">
            <p className="mb-2 font-bold sm:text-xl md:text-2xl text-slate-900">BOOK TABLE</p>
            <p className="font-medium text-sm text-slate-900">
               Book Your Seats In Your Comfort Zone
            </p>
          </div>
        </div>

        <div className="h-auto bg-white p-3 rounded-xl mb-5 shadow-2xl" onClick={handleRoomClick}>
          <img src= {hotel} alt="" className=" md:h-56 w-full object-cover rounded-xl"/>
          <div className="text-center p-5 ">
            <p className="mb-2 font-bold sm:text-xl md:text-2xl text-slate-900">BOOK ROOMS</p>
            <p className="font-medium text-sm text-slate-900">
              Book Rooms For Stay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
