import React from "react";
import SwiperBooks from "../components/SwiperBooks";
import Categories from "../components/Categories";
import Release from "../components/Releases";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-screen bg-custom-kk-tomato block min-h-screen">
      <SwiperBooks />
      <Categories />
      <Release />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
