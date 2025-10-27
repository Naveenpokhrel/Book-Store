import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-gradient-to-r from-blue-100 via-purple-50 to-pink-50 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-24 relative z-10 w-full">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h3 className="text-blue-600 font-semibold text-lg md:text-xl uppercase tracking-wider animate-fadeIn">
            Explore Books You’ll Love
          </h3>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight animate-slideUp">
            Find Your Next <span className="text-blue-600">Book</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 font-medium animate-slideUp delay-150">
            Up to <span className="text-blue-600 font-bold">40% Off</span> This Week
          </h2>

          <p className="text-gray-600 max-w-xl leading-relaxed text-sm md:text-base mx-auto md:mx-0 animate-fadeIn delay-300">
            Discover the joy of reading with our carefully curated collection of books.
            Whether you're searching for the latest bestsellers, timeless classics,
            or hidden gems, we’ve got something for every reader. Enjoy fast delivery,
            secure checkout, and unbeatable prices — your next great read is just a click away!
          </p>

          {/* BUTTON */}
          <div className="pt-4 animate-fadeIn delay-500">
            <Link to="/shop">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 hover:bg-blue-700 transition-all duration-300 shadow-lg mx-auto md:mx-0">
                Shop Now
                <FaArrowRight className="text-sm" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/10 pointer-events-none"></div>

      
     
    </section>
  );
};

export default Hero;
