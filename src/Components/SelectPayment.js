import React, { useState } from 'react';

import CardPayment from './CardPayment';



const SelectPayment = () => {
	const [selectedPayment, setSelectedPayment] = useState(null);

	const handleCardClick = () => {
		setSelectedPayment('card');
	};

	const handleUPIClick = () => {
		setSelectedPayment('upi');
	};

	const handleCODClick = () => {
		setSelectedPayment('cod');
	};
	

  return (
    <div>
      <div className=" grid grid-cols-3 gap-5 mt-14 mb-10">
        <div className={`card w-100% p-3 rounded-md ${selectedPayment === 'card' ? 'bg-peel-orange-custom' : 'bg-gray-300'}`} onClick={handleCardClick}>
          <h1 className='font-bold'>PAY BY CARD</h1>
          <p className='text-sm'>Credit / Debit / ATM Card</p>
        </div>
        <div className={`card w-100% p-3 rounded-md ${selectedPayment === 'upi' ? 'bg-peel-orange-custom' : 'bg-gray-300'}`} onClick={handleUPIClick}>
          <h1 className='font-bold'>PAY BY UPI</h1>
          <p className='text-sm'>Phone Pe / GPay / Paytm</p>
        </div>
        <div className={`card w-100% p-3 rounded-md ${selectedPayment === 'cod' ? 'bg-peel-orange-custom' : 'bg-gray-300'}`} onClick={handleCODClick} >
          <h1 className='font-bold'>PAY ON DELIVERY</h1>
          <p className='text-sm'>Cash / UPI</p>
        </div>
      </div>
			<div className="payment-container mt-5">
        {selectedPayment === 'card' && <CardPayment />}
        {/* {selectedPayment === 'upi' && <UPIPayment />} */}
        {/* {selectedPayment === 'cod' && <CODPayment />} */}
      </div>
			<div className='flex flex-wrap justify-center mt-4'>
				<button type="submit" className="px-8 py-3 bg-peel-orange-custom rounded-full text-black mx-auto font-semibold"> Place Order </button>
			</div>

		</div>
  )
}

export default SelectPayment
