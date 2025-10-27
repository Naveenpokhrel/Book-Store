import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";
import logoImg from "../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  // Focus search input when it opens
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">

        {/* LEFT: LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl sm:text-2xl text-gray-900 whitespace-nowrap"
        >
          <img
            src={logoImg}
            alt="Book Hub"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
          />
          <span>
            Book Hub<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* CENTER: NAVBAR + SEARCH */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Navbar (hidden on mobile) */}
          <div className="hidden md:flex">
            <Navbar />
          </div>

          {/* SEARCH ICON + INPUT */}
          <div className="relative flex items-center">
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Search"
            >
              <FaSearch size={18} />
            </button>

            {/* Animated Search Input */}
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search your favorite books..."
              className={`absolute left-8 md:left-10 top-1/2 transform -translate-y-1/2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm sm:text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm ${
                showSearch
                  ? "w-44 sm:w-56 md:w-64 opacity-100 ml-2"
                  : "w-0 opacity-0 pointer-events-none"
              }`}
            />
          </div>
        </div>

        {/* RIGHT: ICONS */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* CART ICON */}
          <Link
            to="/cart"
            className="relative text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
            aria-label="Shopping Cart"
          >
            <TbShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </Link>

          {/* LOGIN BUTTON */}
          <Link
            to="/login"
            className="hidden sm:inline-block bg-blue-600 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base shadow-sm"
          >
            Login
          </Link>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMenuOpened(!menuOpened)}
            className="md:hidden text-gray-700 text-xl p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {menuOpened ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVBAR (dropdown) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200 overflow-hidden ${
          menuOpened
            ? "max-h-96 opacity-100 visible py-3"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <Navbar containerStyle="px-4" setMenuOpened={setMenuOpened} />
      </div>
    </header>
  );
};

export default Header;
