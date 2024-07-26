import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/Action/foodCartAction";
import { useNavigate } from "react-router-dom";
import "./RoomPage.css";
import Single from '../Assets/Single-bed-room.jpg';
import Delux from '../Assets/super-delux.jpeg';
import Super from '../Assets/deluxe-room.jpg';
import Luxe from '../Assets/luxe.jpg';

const RoomPage = () => {
  const dispatch = useDispatch();
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [checkoutMinDate, setCheckoutMinDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const formattedToday = `${year}-${month}-${day}`;
    setMinDate(formattedToday);

    const maxMonth = String(today.getMonth() + 3).padStart(2, "0");
    const formattedMaxDate = `${year}-${maxMonth}-${day}`;
    setMaxDate(formattedMaxDate);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    roomType: "",
    roomPreference: "",
    email: "",
    contact: "",
    numberOfMembers: 1,
    numberOfRooms: 1,
    checkIn: "",
    checkOut: "",
  });

  const roomPrices = {
    "Single Room": 100,
    "Delux Room": 150,
    "Super Delux Room": 200,
    "Luxe Room": 250,
  };

  const smokingRoomExtra = 50;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "checkIn") {
      const checkInDate = new Date(value);
      checkInDate.setDate(checkInDate.getDate() + 1);
      const day = String(checkInDate.getDate()).padStart(2, "0");
      const month = String(checkInDate.getMonth() + 1).padStart(2, "0");
      const year = checkInDate.getFullYear();
      const formattedCheckoutMinDate = `${year}-${month}-${day}`;
      setCheckoutMinDate(formattedCheckoutMinDate);
      setFormData({
        ...formData,
        checkIn: value,
        checkOut: formattedCheckoutMinDate,
      });
    }
  };

  const calculatePrice = () => {
    const roomPrice = roomPrices[formData.roomType] || 0;
    const preferenceExtra = formData.roomPreference === "Smoking" ? smokingRoomExtra : 0;
    const numberOfRooms = formData.numberOfRooms || 1;
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const numberOfDays = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24) || 1;

    return (roomPrice + preferenceExtra) * numberOfRooms * numberOfDays;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculatePrice();
    dispatch(setUserInfo({ ...formData, totalPrice }));
    navigate("/");
  };
  return (
    <>
      <div className="RoomMain relative py-32  ">
        <h1 className="text-white font-bold text-3xl mb-8 text-center z-10">
          You Deserve Luxurious {" "}
          <span className="text-peel-orange-custom font-pacifico font-medium">
            Stay
          </span>{" "}
          !!!
        </h1>
        <h4 className="text-peel-orange-custom font-bold mb-8 text-3xl text-center z-10">
          Book A Room Now
        </h4>
      </div>

      {/* -------------------------------------------------------------------Left Start----------------------------------------------- */}
      <div className="md:grid grid-cols-2 my-10">
        <div className="p-10">
          <h1 className="tableHead text-peel-orange-custom font-pacifico font-medium relative text-2xl">
            Hotel Booking{" "}
          </h1>
          <p className="mt-5 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            commodi error aliquam consequatur doloremque veritatis eaque quasi
            doloribus perspiciatis harum, quam expedita voluptas non quod, modi
            suscipit! Animi, minus itaque?
          </p>
          <p className="mt-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            commodi numquam eius eaque fugiat error nesciunt excepturi tempore
            officia quia vel veritatis nihil, aliquid .
          </p>
          <ul className="list-disc my-5 ml-5 font-semibold">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              aperiam!
            </li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              ratione!
            </li>
          </ul>
        </div>
        {/* -----------------------------------------------------------------Left end-------------------------------------------------- */}

        {/* ----------------------------------------------------------------form right Start----------------------------------------- */}
        <div className="right bg-grey-900 md:mx-10 max-sm:mx-3 max-sm:p-5 rounded-lg shadow-2xl">
          <form className="md:p-20" onSubmit={handleSubmit}>
            <div className="sm:grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-900">
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
                <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-900">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter Your Last Name Here"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label htmlFor="roomType" className="block mb-1 text-sm font-medium text-gray-900">
                  Select Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="Single Room">Single Room - $100</option>
                  <option value="Delux Room">Delux Room - $150</option>
                  <option value="Super Delux Room">Super Delux Room - $200</option>
                  <option value="Luxe Room">Luxe Room - $250</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="roomPreference" className="block mb-1 text-sm font-medium text-gray-900">
                  Room Preference
                </label>
                <select
                  id="roomPreference"
                  name="roomPreference"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Room Preference</option>
                  <option value="Non-Smoking">Non-Smoking</option>
                  <option value="Smoking">Smoking - Extra $50</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">
                Email Address{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="abcd@xyz.com"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label htmlFor="contact" className="block mb-1 text-sm font-medium text-gray-900">
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
              <div className="mb-3">
                <label htmlFor="numberOfMembers" className="block mb-1 text-sm font-medium text-gray-900">
                  Number Of Members{" "}
                </label>
                <input
                  type="number"
                  id="numberOfMembers"
                  name="numberOfMembers"
                  min="1"
                  max="3"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label htmlFor="checkIn" className="block mb-1 text-sm font-medium text-gray-900">
                  Check-In Date{" "}
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  min={minDate}
                  max={maxDate}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="checkOut" className="block mb-1 text-sm font-medium text-gray-900">
                  Check-Out Date{" "}
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  min={checkoutMinDate}
                  max={maxDate}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">

            <div className="mb-3">
                <label htmlFor="numberOfMembers" className="block mb-1 text-sm font-medium text-gray-900">
                  Number Of Rooms{" "}
                </label>
                <input
                  type="number"
                  id="numberOfRooms"
                  name="numberOfRooms"
                  min="1"
                  max="3"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="totalPrice" className="block mb-1 text-sm font-medium text-gray-900">
                  Total Price
                </label>
                <input
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  value={`$${calculatePrice()}`}
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  readOnly
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
              <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">
                I agree with the{" "}
                <a href="/" className="text-blue-600 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-peel-orange-custom rounded-full text-black mx-auto font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
        {/* ----------------------------------------------------------------form right Ends----------------------------------------- */}
      <div className="bg-slate-900 my-10" >
        <div className="md:grid grid-cols-2 p-5  md:w-[80%] mx-auto">
          <div className="px-5 flex justify-end ">
            <img src={Single} alt="" className=" object-cover" />
          </div>
          <div className="py-10">
            <h1 className="text-peel-orange-custom text-2xl font-bold mb-5">
              Single Room
            </h1>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              aspernatur nobis. Ullam quidem officiis velit cum perspiciatis,
              ipsa, quia quis earum, placeat sed fuga. Aperiam.
            </p>
            <ul className="list-disc ml-5 text-gray-300 mt-5">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white my-10" >
        <div className="md:grid grid-cols-2 p-5  md:w-[80%] mx-auto">
          <div className="py-10">
            <h1 className="text-peel-orange-custom text-2xl font-bold mb-5">
              Delux Room
            </h1>
            <p className="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              aspernatur nobis. Ullam quidem officiis velit cum perspiciatis,
              ipsa, quia quis earum, placeat sed fuga. Aperiam.
            </p>
            <ul className="list-disc ml-5 text-black mt-5 font-medium">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
            </ul>
          </div>
          <div className="px-5 flex ">
            <img src={Delux} alt="" className=" object-cover " />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 my-10" >
        <div className="md:grid grid-cols-2 p-5  md:w-[80%] mx-auto">
          <div className="px-5 flex justify-end ">
            <img src={Super} alt="" className=" object-cover" />
          </div>
          <div className="py-10">
            <h1 className="text-peel-orange-custom text-2xl font-bold mb-5">
              Super Delux Room
            </h1>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              aspernatur nobis. Ullam quidem officiis velit cum perspiciatis,
              ipsa, quia quis earum, placeat sed fuga. Aperiam.
            </p>
            <ul className="list-disc ml-5 text-gray-300 mt-5">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white my-10" >
        <div className="md:grid grid-cols-2 p-5  md:w-[80%] mx-auto">
          <div className="py-10">
            <h1 className="text-peel-orange-custom text-2xl font-bold mb-5">
              Luxe Room
            </h1>
            <p className="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              aspernatur nobis. Ullam quidem officiis velit cum perspiciatis,
              ipsa, quia quis earum, placeat sed fuga. Aperiam.
            </p>
            <ul className="list-disc ml-5 text-black mt-5 font-medium">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sint!</li>
            </ul>
          </div>
          <div className="px-5 flex ">
            <img src={Luxe} alt="" className=" object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomPage;
