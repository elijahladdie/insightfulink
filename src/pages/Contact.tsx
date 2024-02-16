import Footer from "../components/Footer";
import laddie from "../assests/laddie-profile.jpg"
import manzi from "../assests/manzi-profile.jpg"
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [email, setEmail] = useState('');

  const handleCopyEmail = (gmail: any) => {
    setEmail(gmail)
    navigator.clipboard.writeText(email)
      .then(() => {
        toast.success('Email copied to clipboard!');
      })
      .catch(err => {
        toast.error('Failed to copy email: ', err);
      });
  };
  return (
    <div className="flex  flex-col h-screen justify-between">
      <ToastContainer autoClose={2000} position="top-center" />
      <div className="flex justify-center flex-wrap w-full">

        <div className="group w-96 flex justify-center items-center m-4 relative overflow-hidden">
          <img src={laddie} alt="" className="rounded-lg w-full h-96" />
          <div className="absolute group-hover:translate-x-0  flex top-0 left-0 transition duration-300 p-4 bg-slate-100 opacity-50 -translate-x-full items-center  justify-center flex-col w-full h-full">
            <h1 className="font-bold text-3xl p-2">Elie Kuradusenge</h1>
            <ul>
              <li ><Link className="flex items-center gap-2 hover:text-custom-tomato cursor-pointer" target="_blank" to={"https://linkedin.com/in/eliKuradusenge"}><FaLinkedin /> Elie Kuradusenge</Link></li>
              <li className="flex items-center gap-2 hover:text-custom-tomato cursor-pointer" onClick={(e) => handleCopyEmail("elkuradusenge@gmail.com")} ><SiGmail />elkuradusenge@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="group w-80 flex justify-center items-center m-4 relative overflow-hidden ">
          <img src={manzi} alt="" className="rounded-lg w-96 h-96" />
          <div className="absolute group-hover:translate-x-0  flex top-0 left-0 transition duration-300 p-4 bg-slate-100 opacity-50 -translate-x-full items-center  justify-center flex-col w-full h-full">
            <h1 className="font-bold text-2xl p-2">Manzi Hodali Daniel</h1>
            <ul>
              <li className="flex items-center gap-2 hover:text-custom-tomato cursor-pointer" onClick={(e) => handleCopyEmail("manzidan2003@gmail.com")} ><SiGmail />manzidan2003@gmail.com</li>
            </ul>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );  
};

export default Contact;
