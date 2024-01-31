import { FaLongArrowAltRight } from "react-icons/fa";
import book1 from "../assests/book4 4.png";
import book2 from "../assests/book3 4.png";
import book3 from "../assests/book16 1.png";

import Footer from "../components/Footer";
import { useState } from "react";
import Popup from "../components/PopUp";
import NewUser from "../components/Form";

const Release = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-custom-light-tomato">
      <div className=" pt-10  ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="uppercase text-sm font-extralight">
            Some quality items
          </h2>
          <h1 className="w-full flex items-center  py-3">
            <hr className="flex-grow border-t-1  border-[#E0E0E0] mr-4" />
            <span className="text-4xl text-custom-purple font-bold">
              New Release Books
            </span>
            <hr className="flex-grow border-t-1 border-[#E0E0E0]  ml-4" />
          </h1>
        </div>
        <div className="flex py-8 flex-wrap gap-3 justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className=" group shadow-lg rounded-md mx-2 bg-white relative flex items-center flex-col justify-center overflow-hidden max-h-96 transition ease-in-out">
              <img src={book1} className="" />
              <div className="transition-x-0 group-hover:bottom-16 transition-all duration-300  right group-hover:transition-y-full group-hover: -bottom-20 absolute">
                <button onClick={() => setShowForm(!showForm)}
                  className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                  Pay once
                </button>
              </div>
            </div>
            <h1 className="text-1xl px-2 text-custom-purple font-bold py-2 capitalize whitespace-nowrap">
              Once upon a time
            </h1>
            <h2 className="uppercase text-xs font-extralight">Kilen marry</h2>
            <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className=" group shadow-lg rounded-md mx-2 bg-white relative flex items-center flex-col justify-center overflow-hidden max-h-96 transition ease-in-out">
              <img src={book2} className="" />
              <div className="transition-x-0 group-hover:bottom-16 transition-all duration-300  right group-hover:transition-y-full group-hover: -bottom-20 absolute">
                <button onClick={() => setShowForm(!showForm)}
                  className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                  Pay once
                </button>
              </div>
            </div>
            <h1 className="text-1xl px-2 text-custom-purple font-bold py-2 capitalize whitespace-nowrap">
              Great travel at desert
            </h1>
            <h2 className="uppercase text-xs font-extralight">Sanchit Howdy</h2>
            <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className=" group shadow-lg rounded-md mx-2 bg-white relative flex items-center flex-col justify-center overflow-hidden max-h-96 transition ease-in-out">
              <img src={book3} className="" />
              <div className="transition-x-0 group-hover:bottom-16 transition-all duration-300  right group-hover:transition-y-full group-hover: -bottom-20 absolute">
                <button onClick={() => setShowForm(!showForm)}
                  className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                  Pay once
                </button>
              </div>
            </div>
            <h1 className="text-1xl px-2 text-custom-purple font-bold py-2 capitalize whitespace-nowrap">
              The lady beauty Scarlett
            </h1>
            <h2 className="uppercase text-xs font-extralight">Arthur Doyle</h2>
            <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className=" group shadow-lg rounded-md mx-2 bg-white relative flex items-center flex-col justify-center overflow-hidden max-h-96 transition ease-in-out">
              <img src={book1} className="" />
              <div className="transition-x-0 group-hover:bottom-16 transition-all duration-300  right group-hover:transition-y-full group-hover: -bottom-20 absolute">
                <button onClick={() => setShowForm(!showForm)}
                  className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                  Pay once
                </button>
              </div>
            </div>
            <h1 className="text-1xl px-2 text-custom-purple font-bold py-2 capitalize whitespace-nowrap">
              Once upon a time
            </h1>
            <h2 className="uppercase text-xs font-extralight">Kilen marry</h2>
            <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
          </div>
        </div>


        {showForm && (

          <Popup>

            <div className="flex justify-between w-full  flex-col ">
              <div className="flex py-2 items-center justify-between font-bolder ">
                <h1 className={`text-[#0095DA] text-[19px] p-2 capitalize ${isLogin ? "text-custom-tomato" : "text-custom-purple"}`}>
                 Start Today
                </h1>
                <button
                  className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
                  onClick={() => setShowForm((prevIsLogin) => !prevIsLogin)}

                >
                  X
                </button>
              </div>
              <NewUser />
            </div>


          </Popup>
        )}
        <div className="h-8 bg-gradient-to-r from-custom-pink to-custom-teal via-custom-white" />
      </div>
    </div>
  );
};

export default Release;
