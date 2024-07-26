import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/Action/foodCartAction";
import { useNavigate } from "react-router-dom";
import "./TablePage.css";
import rooftop from "../Assets/rooftop.jpg";
import indoor from "../Assets/community-table.jpg";

const TablePage = () => {
  const dispatch = useDispatch();
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const formattedToday = `${year}-${month}-${day}`;
    setMinDate(formattedToday);

    const maxDay = String(today.getDate() + 5).padStart(2, "0");
    const formattedMaxDate = `${year}-${month}-${maxDay}`;
    setMaxDate(formattedMaxDate);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    contact: "",
    education: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserInfo(formData));
    navigate("/");
  };
  return (
    <>
      <div className="TableMain relative py-32  ">
        <h1 className="text-white font-bold text-3xl mb-8 text-center z-10">
          Are You Want To{" "}
          <span className="text-peel-orange-custom font-pacifico font-medium">
            Dine-In
          </span>{" "}
          In Beatiful Aura?
        </h1>
        <h4 className="text-peel-orange-custom font-bold mb-8 text-3xl text-center z-10">
          Book Your Table Now
        </h4>
      </div>

      {/* -------------------------------------------------------------------Left Start----------------------------------------------- */}
      <div className="md:grid grid-cols-2 my-10">
        <div className="p-10">
          <h1 className="tableHead text-peel-orange-custom font-pacifico font-medium relative text-2xl">
            Table Booking{" "}
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
        <div className=" right bg-grey-900 md:mx-10 max-sm:mx-2 max-sm:p-5  rounded-lg  shadow-2xl">
          <form className="md:p-20" onSubmit={handleSubmit}>
            <div className="sm:grid grid-cols-2 gap-2">
              <div class=" mb-3">
                <label
                  for="text"
                  class="block  mb-1 text-sm font-medium text-gray-900 "
                >
                  First Name{" "}
                </label>

                <input
                  type="text"
                  id="first name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your First Name Here"
                  onChange={handleChange}
                  required
                />
              </div>

              <div class=" mb-3">
                <label
                  for="name"
                  class="block  mb-1 text-sm font-medium text-gray-900 "
                >
                  Last Name{" "}
                </label>

                <input
                  type="text"
                  id="first name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Last Name Here"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="option"
                  className="block  mb-1 text-sm font-medium text-gray-900 "
                >
                  Select Sitting
                </label>
                <select
                  id="option"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                  required
                >
                  <option value="option1">Indoor</option>
                  <option value="option2">Rooftop</option>
                </select>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="option"
                  className="block  mb-1 text-sm font-medium text-gray-900 "
                >
                  Select Table Type
                </label>
                <select
                  id="option"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                  required
                >
                  <option value="option1">Normal Table</option>
                  <option value="option2">Customizable Table</option>
                </select>
              </div>
            </div>

            <div className=" mb-3">
              <label
                for="email"
                className="block  mb-1 text-sm font-medium text-gray-900 "
              >
                Email Address{" "}
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="abcd@xyz.com"
                onChange={handleChange}
                required
              />
            </div>
            <div class=" mb-3">
              <label
                for="number"
                className="block  mb-1 text-sm font-medium text-gray-900 "
              >
                Contact Number{" "}
              </label>
              <input
                type="number"
                id="first name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0987654321"
                onChange={handleChange}
                required
              />
            </div>

            <div className="sm:grid grid-cols-2 gap-2">
              <div class="mb-3">
                <label
                  for="date"
                  class="block  mb-1 text-sm font-medium text-gray-900 "
                >
                  Date For Booking{" "}
                </label>

                <input
                  type="date"
                  min={minDate}
                  max={maxDate}
                  id="first name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="mb-3">
                <label
                  for="date"
                  class="block  mb-1 text-sm font-medium text-gray-900 "
                >
                  Number Of Members{" "}
                </label>

                <input
                  type="number"
                  min="1"
                  max="15"
                  placeholder="Enter Number of Member"
                  id="first name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-5 py-3 bg-peel-orange-custom rounded-full text-black mx-auto font-semibold"
              onChange={handleChange}
            >
              BOOK NOW
            </button>
          </form>
        </div>
        {/* ----------------------------------------------------------------form right Start----------------------------------------- */}
      </div>
      <div className="bg-slate-900 my-10" >
        <div className="md:grid grid-cols-2 p-5  md:w-[80%] mx-auto">
          <div className="px-5 flex justify-end ">
            <img src={rooftop} alt="" className="h-80 " />
          </div>
          <div className="py-10">
            <h1 className="text-peel-orange-custom text-2xl font-bold mb-5">
              ROOFTOP TABLE
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
              INDOOR TABLE
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
            <img src={indoor} alt="" className="h-80  " />
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePage;
