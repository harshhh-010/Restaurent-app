import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const UpiPayment = () => {
  const dispatch = useDispatch();

  const [upiDetails, setUpiDetails] = useState({
    upiId: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpiDetails({
      ...upiDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCardDetails({ ...CardDetails }));
  };

  return (
    <div className="right bg-grey-900 md:mx-5 max-sm:mx-3 max-sm:p-2 rounded-lg shadow-md mb-5">
      <form className="md:p-5" onSubmit={handleSubmit}>
      <div className="mb-3">
    	      <label htmlFor="cardNumber" className="block mb-1 text-sm font-medium text-gray-900">
    	        Card Number{" "}
    	      </label>
    	      <input
    	        type=""
    	        id="cardNumber"
    	        name="cardNumber"
    	        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    	        placeholder="123412341234"
    	        onChange={handleChange}
    	        required/>
    	    </div>
      </form>
    </div>
  )
}

export default UpiPayment
