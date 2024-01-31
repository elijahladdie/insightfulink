
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1Img from "../assests/e51e86de0acce7ba8a9582e3be31b204.png";
import slide2Img from "../assests/bg_cover_test.avif";
import slide3Img from "../assests/bg_img_again.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaLongArrowAltRight } from "react-icons/fa";
//


// import required modules
import { Pagination,Autoplay,Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const SwiperBooks = () => {
  const img = new Image();
  img.src = slide1Img;
  img.onload = () => {
    console.log(img.width, "****",img.height)
  }
  console.log(img)
  return (
    <>
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
        className="bg-gradient-to-r from-pink-200 via-teal-50 to-gray-100 w-full"
      >
        <SwiperSlide>
          <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap-reverse lg:flex-nowrap md:flex-nowrap">
            <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                The assignment
              </h1>
              <p >
                "The Assignment" is a fun book #1 in a series of 8 illustrated
                children's books for the 3rd grade level, or ages 8-10. You'll
                travel with Anna during the summer between second and third
                grade and become totally entrenched in this little girl's woe's
                as she manages to overcome her trials in a myriad of ways.
                You'll laugh and you'll cry with Anna Renee Riley. And, you just
                might end up becoming one of her best friends.
              </p>
              <Link to="/products" className="!#  font-extralight uppercase   text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
                Read more
                <FaLongArrowAltRight />
              </Link>
            </div>
            <div>
              <img src={slide1Img} alt="" className="h-80 lg:h-full md:h-96" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap-reverse lg:flex-nowrap md:flex-nowrap">
            <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                Killing <small className="text-2xl">Hemmingway</small>
              </h1>
              <p >
                "Killing Hemmingway" is a fun book #1 in a series of 8 illustrated
                children's books for the 3rd grade level, or ages 8-10. You'll
                travel with Anna during the summer between second and third
                grade and become totally entrenched in this little girl's woe's
                as she manages to overcome her trials in a myriad of ways.
                You'll laugh and you'll cry with Anna Renee Riley. And, you just
                might end up becoming one of her best friends.
              </p>
              <Link to="/products" className="!#  font-extralight uppercase  text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
                Read more
                <FaLongArrowAltRight />
              </Link>
            </div>
            <div>
              <img src={slide2Img} alt="" className="h-80 lg:h-full md:h-96" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap-reverse lg:flex-nowrap md:flex-nowrap">
            <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                CINEMA
              </h1>
              <p >
                " Cinema " is a fun book #1 in a series of 8 illustrated
                children's books for the 3rd grade level, or ages 8-10. You'll
                travel with Anna during the summer between second and third
                grade and become totally entrenched in this little girl's woe's
                as she manages to overcome her trials in a myriad of ways.
                You'll laugh and you'll cry with Anna Renee Riley. And, you just
                might end up becoming one of her best friends.
              </p>
              <Link to="/products" className="!#  font-extralight uppercase  text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
                Read more
                <FaLongArrowAltRight />
              </Link>
            </div>
            <div>
              <img src={slide3Img} alt="" className="h-80 lg:h-full md:h-96" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap-reverse lg:flex-nowrap md:flex-nowrap">
            <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                The assignment
              </h1>
              <p >
                "The Assignment" is a fun book #1 in a series of 8 illustrated
                children's books for the 3rd grade level, or ages 8-10. You'll
                travel with Anna during the summer between second and third
                grade and become totally entrenched in this little girl's woe's
                as she manages to overcome her trials in a myriad of ways.
                You'll laugh and you'll cry with Anna Renee Riley. And, you just
                might end up becoming one of her best friends.
              </p>
              <Link to="/products" className="!#  font-extralight uppercase  text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
                Read more
                <FaLongArrowAltRight />
              </Link>
            </div>
            <div>
              <img src={slide1Img} alt="" className="h-80 lg:h-full md:h-96" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap-reverse lg:flex-nowrap md:flex-nowrap">
            <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                Killing <small className="text-2xl">Hemmingway</small>
              </h1>
              <p >
                "Killing Hemmingway" is a fun book #1 in a series of 8 illustrated
                children's books for the 3rd grade level, or ages 8-10. You'll
                travel with Anna during the summer between second and third
                grade and become totally entrenched in this little girl's woe's
                as she manages to overcome her trials in a myriad of ways.
                You'll laugh and you'll cry with Anna Renee Riley. And, you just
                might end up becoming one of her best friends.
              </p>
              <Link to="/products" className="!#  font-extralight uppercase  text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
                Read more
                <FaLongArrowAltRight />
              </Link>
            </div>
            <div>
              <img src={slide2Img} alt="" className="h-80 lg:h-full md:h-96" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap-reverse lg:flex-nowrap md:flex-nowrap">
            <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                CINEMA
              </h1>
              <p >
                " Cinema " is a fun book #1 in a series of 8 illustrated
                children's books for the 3rd grade level, or ages 8-10. You'll
                travel with Anna during the summer between second and third
                grade and become totally entrenched in this little girl's woe's
                as she manages to overcome her trials in a myriad of ways.
                You'll laugh and you'll cry with Anna Renee Riley. And, you just
                might end up becoming one of her best friends.
              </p>
              <Link to="/products" className="!#  font-extralight uppercase  text-base whitespace-nowrap flex flex-row border  border-custom-purple rounded-lg items-center w-fit px-4 py-2 gap-2  t ">
                Read more
                <FaLongArrowAltRight />
              </Link>
            </div>
            <div>
              <img src={slide3Img} alt="" className="h-80 lg:h-full md:h-96" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperBooks;
