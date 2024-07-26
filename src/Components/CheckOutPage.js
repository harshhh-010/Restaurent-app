import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setOrderAdd } from "../redux/Action/foodCartAction";
import { useNavigate } from "react-router-dom";
import pinCodeData from "../indoreArea.json";
import { updateQuantity } from "../redux/Action/foodCartAction";
import SelectPayment from "./SelectPayment";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalValue = useSelector(state => state.cart.totalValue);

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  const [deliveryData, setDeliveryData] = useState({
    firstName: "",
    contact: "",
    pinCode: "",
    houseNumber: "",
    area: "",
    city: "",
    addressType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryData({
      ...deliveryData,
      [name]: value,
    });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(setOrderAdd({ ...deliveryData }));
  };

  return (
    <>
      <div className="lg:grid grid-cols-2 mb-20 pt-36">
        
        <div className="right bg-grey-900 md:mx-10 max-sm:mx-3 max-sm:p-5 rounded-lg shadow-2xl h-max">
          <form className="md:p-20" onSubmit={handleAddSubmit}>
            <div className="sm:grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label
                  htmlFor="firstName"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  First Name{" "}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Your First Name Here"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="contact"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Contact Number{" "}
                </label>
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="0987654321"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label
                  htmlFor="pinCode"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Pin Code{" "}
                </label>
                <input
                  type="number"
                  id="pinCode"
                  name="pinCode"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="123456"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="houseNumber"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  House No./Street{" "}
                </label>
                <input
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  minLength="3"
                  maxLength="20"

                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 ">
              <div className="mb-3">
                <label
                  htmlFor="area"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Area{" "}
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="city"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  City{" "}
                </label>
                <input
                  disabled={true}
                  type="text"
                  id="city"
                  name="city"
                  value="Indore"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                I agree with the{" "}
                <a href="/" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto mx-10">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-center">Name</th>
                <th className="px-4 py-2 border-b text-center">Quantity</th>
                <th className="px-4 py-2 border-b text-center">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
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
              <h4 className="text-lg font-semibold ">Total Payable: ${totalValue.toFixed(2)}</h4>
            </div>
          </div>
          < SelectPayment />
        </div>

      </div>
    </>
  );
};

export default CheckOutPage;
