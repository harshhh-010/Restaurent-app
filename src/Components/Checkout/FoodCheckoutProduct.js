import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateQuantity } from "../../redux/Action/foodCartAction";

const FoodCheckoutProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const totalValue = useSelector(state => state.cart.totalValue);

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };
  return (
    <div>
      
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-center">Name</th>
              <th className="px-4 py-2 border-b text-center">Quantity</th>
              <th className="px-4 py-2 border-b text-center">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2 w-2/5 text-center">
                  <h4 className="text-lg">{item.name}</h4>
                </td>
                <td className="px-4 py-2 w-1/5 text-center">
                  <p>{item.quantity}</p>
                </td>
                <td className="px-4 py-2 w-1/5 text-center">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <div className=" mr-5">
            <h4 className="text-lg font-semibold ">
              Total Payable: ${totalValue.toFixed(2)}
            </h4>
          </div>
        </div>
      </div>
  );
};

export default FoodCheckoutProduct;
