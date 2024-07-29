import React, { useState } from "react";
import logo from '../Assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed z-10 w-[100%]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="Logo"/>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
            onClick={handleNavToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isNavOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'block py-2 px-3  bg-peel-orange-custom rounded md:bg-transparent md:text-peel-orange-custom md:p-0 dark::text-peel-orange-custom' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peel-orange-custom md:p-0 dark:text-white md:dark:hover:text-peel-orange-custom dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}
                  aria-current="page"
                  onClick={closeNav}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) => isActive ? 'block py-2 px-3   bg-peel-orange-custom rounded md:bg-transparent md:text-peel-orange-custom md:p-0 dark::text-peel-orange-custom' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peel-orange-custom md:p-0 dark:text-white md:dark:hover:text-peel-orange-custom dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}
                  onClick={closeNav}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tablepage"
                  className={({ isActive }) => isActive ? 'block py-2 px-3   bg-peel-orange-custom rounded md:bg-transparent md:text-peel-orange-custom md:p-0 dark::text-peel-orange-custom' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peel-orange-custom md:p-0 dark:text-white md:dark:hover:text-peel-orange-custom dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}
                  onClick={closeNav}
                >
                  Dine-In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/roompage"
                  className={({ isActive }) => isActive ? 'block py-2 px-3  text-peel-orange-custom bg-peel-orange-custom rounded md:bg-transparent md:text-peel-orange-custom md:p-0 dark::text-peel-orange-custom' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peel-orange-custom md:p-0 dark:text-white md:dark:hover:text-peel-orange-custom dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}
                  onClick={closeNav}
                >
                  Hotel Rooms
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-auto relative" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLink to="/cart">
                <FontAwesomeIcon className="cart-icon text-white text-3xl" icon={faCartShopping}/>
                {totalQuantity > 0 && 
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 p-2 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                    {totalQuantity}
                  </div>
                }
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
