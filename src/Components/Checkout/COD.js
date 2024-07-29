import React from "react";
import { useNavigate } from "react-router-dom";

const COD = () => {
    const Navigate = useNavigate();
    const handleCODSubmit = (e) => {
        e.preventDefault();
        Navigate('/OrderPlaced');
    }

  return (
    <div>
    <p className="text-center">YOU CAN PAY VIA CASH/UPI ON THE TIME OF DELIVERY</p>
    <div className="flex flex-wrap justify-center mt-4">
      <button
        type="button" onClick={handleCODSubmit}
        className="px-8 py-3 bg-peel-orange-custom rounded-full text-black mx-auto font-semibold">
        PAY NOW
      </button>
    </div>
    </div>
  )
};

export default COD
