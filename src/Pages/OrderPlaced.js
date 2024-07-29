import React from 'react'
import image from '../Assets/order-placed.webp'
import { useNavigate } from 'react-router-dom'

const OrderPlaced = () => {
    const navigate = useNavigate();
    const handleBackToHome = () =>{
        navigate('/');
    }
  return (
    <>
    <div className='flex flex-wrap content-center h-96 w-96 pt-96 pb-56 mx-auto'>
      <img src={image} alt="" />
    </div>
    <div className="flex flex-wrap justify-center mb-20">
        <button
          type="submit" onClick={handleBackToHome}
          className="px-8 py-3 bg-peel-orange-custom rounded-full text-black mx-auto font-semibold">
          BACK TO HOME
        </button>
    </div>
    </>
  )
}

export default OrderPlaced
