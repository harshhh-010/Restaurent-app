import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CardPayment = () => {
  const dispatch = useDispatch();

  const [CardDetails, setCardDetails] = useState({
    cardNumber: "",
    name: "",
    validTill: "",
    houseNumber: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...CardDetails,
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
    	        type="Number"
    	        id="cardNumber"
    	        name="cardNumber"
    	        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    	        placeholder="123412341234"
    	        onChange={handleChange}
    	        required/>
    	    </div>
    	    <div className="mb-3">
    	      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">
    	        Name On Card{" "}
    	      </label>
    	      <input
    	        type="text"
    	        id="name"
    	        name="name"
    	        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    	        placeholder="Name on Card"
    	        onChange={handleChange}
    	        required/>
    	    </div>
					<div className='grid grid-cols-2 gap-4'>
						<div className="mb-3">
    	        <label htmlFor="date" className="block mb-1 text-sm font-medium text-gray-900">
    	         Valid Till{" "}
    	        </label>
    	        <input
    	          type="date"
    	          id="validTill"
    	          name="validTill"
    	          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    	          placeholder="Name on Card"
    	          onChange={handleChange}
    	          required/>
    	      </div>
						<div className="mb-3">
    	        <label htmlFor="cvv" className="block mb-1 text-sm font-medium text-gray-900">
    	         CVV Number{" "}
    	        </label>
    	        <input
    	          type="number"
    	          id="cvv"
    	          name="cvv"
    	          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    	          placeholder="CVV"
    	          onChange={handleChange}
    	          required/>
    	      </div>
					</div>
          <div className='flex flex-wrap justify-center mt-4'>
				    <button type="submit" className="px-8 py-3 bg-peel-orange-custom rounded-full text-black mx-auto font-semibold"> Place Order </button>
			    </div>
    	  </form>
			</div>
  )
}

export default CardPayment
