import React, { useState } from "react";
import logo from "../assests/insightfulink.png";
import { Link } from "react-router-dom";
import { BsEye, BsLine, BsXLg } from "react-icons/bs";
import { FaChartLine, FaLine } from "react-icons/fa";
import Popup from "./PopUp";
import NewUser from "./Form";
const Navbar = () => {
  const [isNav, setIsNav] = useState(false);
  const [activeNav, setActiveNav] = useState(1);
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="w-screen  bg-white overflow-hidden">
      <div className=" hidden md:flex lg:flex justify-between p-3 gap-8  w-full">
        <img
          className="w-8 h-8 rounded-full "
          src={logo}
          alt="insightfulink"
          title="Insightful Ink"
        />

        <div className=" flex lg:gap-20 gap-3 items-center lg:text-lg text-sm">
          <ul className=" flex gap-3">
            <li
              onClick={() => setActiveNav(1)}
              className={`border-r-2 border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 1 ? "text-custom-tomato" : "text-black"
                }`}
            >
              <Link to="/">Home </Link>
            </li>

            <li
              onClick={() => setActiveNav(2)}
              className={`border-r-2 border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 2 ? "text-custom-tomato" : "text-black"
                }`}
            >
              <Link to="/books">Books </Link>
            </li>
            <li
              onClick={() => setActiveNav(3)}
              className={`border-r-2 border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 3 ? "text-custom-tomato" : "text-black"
                }`}
            >
              <Link to="/release" className="text-nowrap whitespace-nowrap">
                New releases
              </Link>
            </li>
            <li
              onClick={() => setActiveNav(4)}
              className={`border-r-2 border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 4 ? "text-custom-tomato" : "text-black"
                }`}
            >
              <Link to="/about-us" className="whitespace-nowrap">
                About us
              </Link>
            </li>
            <li
              onClick={() => setActiveNav(5)}
              className={` border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 5 ? "text-custom-tomato" : "text-black"
                }`}
            >
              <Link to="contact-us" className="whitespace-nowrap">
                Contact us
              </Link>
            </li>
          </ul>

          <ul className="flex lg:gap-2 gap-1">
            <li
              onClick={() => setActiveNav(6)}
              className={`mr-4 border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 6 ? "text-custom-tomato" : "text-black"
                }`}
            >
              <button onClick={() => setShowForm(!showForm)}>Login </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed z-50  transition top-2 gap-2 right-1 focus:  min-h-8 w-8 
       md:hidden lg:hidden ${isNav ? "hidden" : "block"}`}
        onClick={() => setIsNav(true)}
      >
        <hr className="border-t-2  w-6 border-custom-tomato my-1 " />
        <hr className="border-t-2  w-6 border-custom-tomato  " />
        <hr className="border-t-2  w-6 border-custom-tomato my-1 " />
      </div>


      <div
        className={` transition overflow-hidden duration-300 ease-linear lg:hidden md:hidden ${isNav ? " translate-x-0  " : "-translate-x-full"
          }  absolute z-50 w-screen  h-screen  bg-white p-4`}
      >
        <BsXLg
          className="float-right text-custom-tomato"
          onClick={() => setIsNav(false)}
        />
        <div className=" flex justify-center flex-col  gap-8 items-center h-full ">
          <img
            className="w-8 h-8 rounded-full "
            src={logo}
            alt="insightfulink"
            title="Insightful Ink"
          />
          <div className="flex-col flex lg:gap-20 gap-3 items-center lg:text-lg text-sm">
            <ul className=" flex gap-4 flex-col items-center">
              <li
                onClick={() => setActiveNav(1)}
                className={`text-lg border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 1 ? "text-custom-tomato" : "text-black"
                  }`}
              >
                <Link to="/">Home </Link>
              </li>
              <li
                onClick={() => setActiveNav(2)}
                className={`text-lg border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 2 ? "text-custom-tomato" : "text-black"
                  }`}
              >
                <Link to="/books">Books </Link>
              </li>
              <li
                onClick={() => setActiveNav(3)}
                className={`text-lg border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 3 ? "text-custom-tomato" : "text-black"
                  }`}
              >
                <Link to="/release" className="text-nowrap whitespace-nowrap">
                  New releases
                </Link>
              </li>
              <li
                onClick={() => setActiveNav(4)}
                className={`text-lg border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 4 ? "text-custom-tomato" : "text-black"
                  }`}
              >
                <Link to="/about-us" className="whitespace-nowrap">
                  About us
                </Link>
              </li>
              <li
                onClick={() => setActiveNav(5)}
                className={`text-lg border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 5 ? "text-custom-tomato" : "text-black"
                  }`}
              >
                <Link to="contact-us" className="whitespace-nowrap">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="flex lg:gap-2 gap-1">
              <li
                onClick={() => setActiveNav(6)}
                className={`text-lg border-custom-gray px-3
             hover:text-custom-tomato ${activeNav === 6 ? "text-custom-tomato" : "text-black"
                  }`}

              >
                Login
              </li>
            </ul>
          </div>
        </div>
      </div>




      <section>
        {showForm && (

          <Popup>

            <div className="flex justify-between w-full  flex-col ">
              <div className="flex py-2 items-center justify-between font-bolder ">
                <h1 className={`text-[#0095DA] text-[19px] p-2 capitalize ${isLogin ? "text-custom-tomato" : "text-custom-purple"}`}>
                  Start today
                </h1>
                <button
                  className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
                  onClick={() => setShowForm((prevIsLogin) => !prevIsLogin)}

                >
                  X
                </button>
              </div>
             <NewUser/>
            </div>


          </Popup>
        )}
      </section>
    </div>
  );
};

export default Navbar;
