import React from "react";
import fairy from "../assets/fairy.webp";
const Navbar = () => {
  return (
    <div className=" flex justify-between md:justify-between items-center relative shadow  bg-[#FFFFFF] text-black">
      <nav className="z-10 sticky top-0 left-0 right-0 w-full max-w-4xl xl:max-w-5xl mx-auto px-1 py-1 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <img src={fairy} alt="" className="  h-20" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black ">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">Our services</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">About</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <button className=" shadow-lg flex items-center justify-center rounded-md bg-[#FFFFFF] text-Black px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              Login
            </button>
            <button className="ml-4 flex items-center justify-center rounded-md bg-[#30CC37] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 hover:bg-[#2F80ED]">
              Register
            </button>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button className="focus:outline-none text-slate-200 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800  focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
