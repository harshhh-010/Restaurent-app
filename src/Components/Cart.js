import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/Action/foodCartAction';
import image from "../Assets/1F.jpg";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalValue = useSelector(state => state.cart.totalValue);
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };
  const handleCheckoutFood = (e) =>{
    navigate('/checkOutPage')
  }

  return (
    <div className="container mx-auto py-20">
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-center">Image</th>
                  <th className="px-4 py-2 border-b text-center">Name</th>
                  <th className="px-4 py-2 border-b text-center">Price</th>
                  <th className="px-4 py-2 border-b text-center">Quantity</th>
                  <th className="px-4 py-2 border-b text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2 w-1/5">
                      <img src={image} alt={item.name} className="h-40 w-full object-cover" />
                    </td>
                    <td className="px-4 py-2 w-2/5 text-center">
                      <h4 className="text-lg">{item.name}</h4>
                    </td>
                    <td className="px-4 py-2 w-1/5 text-center">
                      <p>${(item.price) * (item.quantity)}</p>
                    </td>
                    <td className="px-4 py-2 w-1/5">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="border rounded px-2 py-1 w-full"
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td className="px-4 py-2 w-1/5">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4 gap-4">
            <div className="w-1/4">
              <h4 className="text-lg font-semibold">Total Value: ${totalValue.toFixed(2)}</h4>
            </div>
          </div>
          <div>
          <div className='flex justify-center mt-10'>
              <button onClick={handleCheckoutFood} className='px-8 py-2 bg-peel-orange-custom rounded-full font-bold'>ORDER NOW</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
