import {
  FaCopyright,
  FaFacebookF,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import logo from "../assests/insightfulink.png";
import { BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex w-full relative gap-20 items-center  bg-custom-tomato flex-col py-5 overflow-hidden">
      <svg
        className="absolute
                         -top-0 -left-0"
        width="89"
        height="158"
        viewBox="0 0 89 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <rect
            x="25.5854"
            y="142.585"
            width="15.4146"
            height="15.4146"
            fill="#F4F4F4"
          />
          <rect
            x="25.5854"
            y="95.0571"
            width="15.4146"
            height="15.4146"
            fill="#F4F4F4"
          />
          <rect
            x="25.5854"
            y="47.5283"
            width="15.4146"
            height="15.4146"
            fill="#F4F4F4"
          />
          <rect x="25.5854" width="15.4146" height="15.4146" fill="#F1AD28" />
          <rect
            x="73.1138"
            y="142.585"
            width="15.4146"
            height="15.4146"
            fill="#F4F4F4"
          />
          <rect
            x="73.1138"
            y="95.0571"
            width="15.4146"
            height="15.4146"
            fill="#F4F4F4"
          />
          <rect
            x="73.1138"
            y="47.5283"
            width="15.4146"
            height="15.4146"
            fill="#ED553B"
          />
          <rect x="73.1138" width="15.4146" height="15.4146" fill="#F4F4F4" />
        </g>
      </svg>
      <div className="text-white gap-10  flex items-start lg:flex-row lg:justify-evenly w-full py-5 flex-col-reverse items-center">
        <div className="p-3 text-center  lg:text-start flex items-center flex-col">
          <img src={logo} alt="" className="h-40 w-40 rounded-full" />
          <h1 className="font-bold text-lg  whitespace-nowrap">
            Discover brilliance in every chapter
          </h1>
          {/* <span className="whitespace-wrap text-sm lg:text-lg"> At Insightfulink we are group of author ,innovator ,creator and interectual property identifier we contribute in world development by proving books for eleveting personal mindset and personal development in different thing </span> */}
          <p className="whitespace-nowrap">Your Journey to Intellectual Enlightenment Begins Here.</p>
          <footer className="flex items-center py-4 whitespace-nowrap">
            <FaCopyright /> 2024 Insightfulink. All Rights Reserved.
          </footer>
        </div>
        <div className="flex gap-3 bg-custom-tomato z-90 justify-around w-full px-3 lg:justify-evenly">
          <ul className=" flex gap-3 flex-col">
            <h1 className="text-3xl font-bold">Company</h1>
            <li className="border-custom-gray  hover:text-black text-white">
              <Link to="/">Home </Link>
            </li>
            <li className="border-custom-gray  text-white hover:text-black">
              <Link to="/books">Books </Link>
            </li>
            <li className="border-custom-gray  text-white hover:text-black">
              <Link to="/release" className="text-nowrap whitespace-nowrap">
                New releases
              </Link>
            </li>
            <li className="border-custom-gray  text-white hover:text-black">
              <Link to="/about-us" className="whitespace-nowrap">
                About us
              </Link>
            </li>
            <li className="border-custom-gray  text-white hover:text-black">
              <Link to="/contact-us" className="whitespace-nowrap">
                Contact us
              </Link>
            </li>
          </ul>

          <ul className=" flex gap-3 flex-col">
            <h1 className="text-3xl font-bold">Connect with us</h1>
            <li className="border-custom-gray  hover:text-black text-white">
              <Link to="#" className="flex items-center gap-2">
                <FaFacebookF /> <span>Facebook</span>
              </Link>
            </li>
            <li className="border-custom-gray  text-white hover:text-black">
              <Link to="/" className="flex items-center gap-2">
                <BsTwitterX /> <span>Twitter</span>
              </Link>
            </li>
            <li className="border-custom-gray  text-white hover:text-black">
              <Link to="/" className="flex items-center gap-2">
                <BsLinkedin /> <span>Linkedin</span>
              </Link>
            </li>
            <li className="border-custom-gray  text-white hover:text-black">
              <Link to="/" className="flex items-center gap-2">
                <BsYoutube /> <span>Youtube</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <svg
        className="absolute bottom-0 right-0"
        width="206"
        height="63"
        viewBox="0 0 206 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <rect y="47.5283" width="15.4146" height="15.4146" fill="#F4F4F4" />
          <rect width="15.4146" height="15.4146" fill="#F4F4F4" />
          <rect
            x="47.5284"
            y="47.5283"
            width="15.4146"
            height="15.4146"
            fill="#F4F4F4"
          />
          <rect x="47.5284" width="15.4146" height="15.4146" fill="#ED553B" />
          <rect
            x="95.0569"
            y="47.5283"
            width="15.4146"
            height="15.4146"
            fill="#F1AD28"
          />
          <rect x="95.0569" width="15.4146" height="15.4146" fill="#F4F4F4" />
          <rect
            x="142.585"
            y="47.5283"
            width="15.4146"
            height="15.4146"
            fill="#F4F4F4"
          />
          <rect x="142.585" width="15.4146" height="15.4146" fill="#F1AD28" />
          <rect
            x="190.114"
            y="47.5283"
            width="15.4146"
            height="15.4146"
            fill="#ED553B"
          />
          <rect x="190.114" width="15.4146" height="15.4146" fill="#F4F4F4" />
        </g>
      </svg>
    </div>
  );
};

export default Footer;
