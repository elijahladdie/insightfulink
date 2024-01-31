import { FaLongArrowAltRight } from "react-icons/fa";
import book1 from "../assests/book4 4.png";
import book2 from "../assests/book3 4.png";
import book3 from "../assests/book16 1.png";
import { Link } from "react-router-dom";

const Release = () => {
  return (
    <div className=" pt-10  bg-custom-bg-light-tomato">
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
      <div className="flex my-8 flex-wrap gap-3 justify-center">
        <div className="flex items-center justify-center flex-col">
          <div className=" group shadow-lg rounded-md mx-2 bg-white relative flex items-center flex-col justify-center overflow-hidden max-h-96 transition ease-in-out">
            <img src={book1} className="" />
            <div className="transition-x-0 group-hover:bottom-16 transition-all duration-300  right group-hover:transition-y-full group-hover: -bottom-20 absolute">
              <Link to="/products" className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                Pay once
              </Link>
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
              <Link to="/products" className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                Pay once
              </Link>
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
              <Link to="/products" className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                Pay once
              </Link>
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
              <Link to="/products" className="uppercase bg-custom-tomato px-24 py-3 text-color  text-white whitespace-nowrap">
                Pay once
              </Link>
            </div>
          </div>
          <h1 className="text-1xl px-2 text-custom-purple font-bold py-2 capitalize whitespace-nowrap">
            Once upon a time
          </h1>
          <h2 className="uppercase text-xs font-extralight">Kilen marry</h2>
          <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
        </div>
      </div>
      <hr className="flex-grow border-t-1 border-[#E0E0E0]  mx-4 py-2" />
      <div className="  flex items-center w-full justify-end  text-custom-tomato  px-3 gap-1 pb-3">
        <span className="font-bold">View all Products </span>
        <FaLongArrowAltRight />
      </div>

      <div className="h-8 bg-gradient-to-r from-custom-pink to-custom-teal via-custom-white"/>
    </div>
  );
};

export default Release;
