import React from "react";
import categoryA from "../assests/categories-a.jpeg";
import categoryB from "../assests/categories-b.jpeg";
import categoryC from "../assests/categories-c.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="px-5 py-10 bg-white">
      <div className="text-custom-tomato flex items-center gap-3 font-bold tracking-wider py-">
        <hr className="w-5 border-t-2 border-custom-tomato" />{" "}
        <span>Categories</span>
      </div>
      <h2 className="text-custom-purple text-2xl font-bold tracking-wider py-2">
        Explore our Top Categories
      </h2>
      <div className="flex gap-8 justify-evenly flex-row py-3 flex-wrap md:flex-nowrap lg:flex-nowrap">
        <div>
          <img src={categoryA} className="rounded-lg" alt="" />
          <h2 className="text-custom-purple text-2xl font-bold tracking-wider py-2 text-center">
            High Education
          </h2>
        </div>
        <div>
          <img src={categoryB} className="rounded-lg" alt="" />
          <h2 className="text-custom-purple text-2xl font-bold tracking-wider py-2 text-center">
            Managment Books
          </h2>
        </div>
        <div>
          <img src={categoryC} className="rounded-lg" alt="" />
          <h2 className="text-custom-purple text-2xl font-bold tracking-wider py-2 text-center">
            Engineering Books
          </h2>
        </div>
      </div>
      <div className="flex item-center w-full justify-center">
        <Link to="/products" className="uppercase font-extralight text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2 ">
          view more
          <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
};

export default Categories;
