import { FaRegMoon } from "react-icons/fa";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import React from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between py-4 px-4 ">
      <div>
        <img src={logo} alt="" className="w-40 h-10" />
      </div>
      <div className="flex">
        <div className="bg-gray-200 m-1 px-2 rounded-md py-1 hover:bg-gray-300">
          <FaRegMoon className="text-gray-600" size={24} />
        </div>
        <div className="hidden md:flex">
          <button className="py-1 px-4 bg-red-500 text-white rounded-lg hover:text-blue hover:bg-red-600 m-1">
            Log in
          </button>

          <button className="py-1 px-4 bg-gray-200  rounded-lg hover:text-blue hover:bg-gray-300 m-1">
            Sign up
          </button>
        </div>
        <div
          className=" flex md:hidden m-2 cursor-pointer"
          onClick={() => setNav(true)}
        >
          <BiMenuAltRight size={30} />
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed right-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur z-40"
              : ""
          }
        >
          <div
            className={
              nav
                ? "shadow-xl fixed right-0 top-0 w-3/5 bg-white z-40 text-red-500 h-full p-10 ease-in duration-300"
                : "fixed top-0 right-[-100%] p-10 duration-300 ease-in h-full z-40 "
            }
          >
            <div className="flex items-center justify-between w-full text-red-500">
              <img src={logo} height={100} width={100} alt="pic" />

              <div onClick={() => setNav(false)} className="cursor-pointer p-3">
                <FaTimes size={30} />
              </div>
            </div>
            <div className="pt-5">
              <h2 className="text-black text-lg cursor-pointer hover:text-red-500">
                Create an account
              </h2>

              <h2 className="text-black text-lg cursor-pointer hover:text-red-500">
                Already have an account
              </h2>
            </div>

            <div>
              {/* <a href='http://shrtco.de/ywZsv' target="_blank" className='bg-blue-600 w-full ml-3 rounded-md hover:bg-blue-800 px-4 py-2'>Register</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
