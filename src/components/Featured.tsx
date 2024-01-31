
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1Img from "../assests/book.png";
import slide2Img from "../assests/bg_cover_test.avif";
import slide3Img from "../assests/bg_img_again.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaLongArrowAltRight } from "react-icons/fa";
//

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Featured = () => {
  const img = new Image();
  img.src = slide1Img;

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="bg-gradient-to-r from-rose-100 via-teal-50 to-blue-gray-100"
    >
      <SwiperSlide>
        <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap lg:flex-nowrap md:flex-nowrap">
          <div>
            <img src={slide1Img} alt="" className="h-80 lg:h-full md:h-96" />
          </div>
          <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
            <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
              Featured Book
            </h1>

            <div className="text-custom-tomato flex items-start flex-col font-bold tracking-wider ">
              <hr className="w-10 border-t-2 border-custom-tomato" />{" "}
              <span>By Timbur Hood</span>
            </div>
            <div>
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                Birds gonna be happy
              </h1>
              <p>
                Come, little brothers, busy yourselves as you wouldwish to be
                happy hereafter."Then there was a twittering and fluttering as
                the good birds set to work with a will,
              </p>
              <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
            </div>

            <Link to="books" className="!#  cursor-pointer font-extralight uppercase   text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
              view more
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap lg:flex-nowrap md:flex-nowrap">
          <div>
            <img src={slide2Img} alt="" className="h-80 lg:h-full md:h-96" />
          </div>
          <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
            <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
              Featured Book
            </h1>

            <div className="text-custom-tomato flex items-start flex-col font-bold tracking-wider ">
              <hr className="w-10 border-t-2 border-custom-tomato" />{" "}
              <span>By Brian Meeks </span>
            </div>
            <div>
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                Killing Heming way
              </h1>
              <p>
                Come, little brothers, busy yourselves as you wouldwish to be
                happy hereafter."Then there was a twittering and fluttering as
                the good birds set to work with a will,
              </p>
              <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
            </div>

            <Link to="books" className="!#  font-extralight uppercase   text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
              view more
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap lg:flex-nowrap md:flex-nowrap">
          <div>
            <img src={slide3Img} alt="" className="h-80 lg:h-full md:h-96" />
          </div>
          <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
            <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
              Featured Book
            </h1>

            <div className="text-custom-tomato flex items-start flex-col font-bold tracking-wider ">
              <hr className="w-10 border-t-2 border-custom-tomato" />{" "}
              <span>By Daniel Anthony Porto</span>
            </div>
            <div>
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                Cinema
              </h1>
              <p>
                Come, little brothers, busy yourselves as you wouldwish to be
                happy hereafter."Then there was a twittering and fluttering as
                the good birds set to work with a will,
              </p>
              <span className="font-bold text-custom-tomato py-3">$ 85.00</span>
            </div>

            <Link to="books" className="!#  font-extralight uppercase   text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
              view more
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};
export default Featured;
