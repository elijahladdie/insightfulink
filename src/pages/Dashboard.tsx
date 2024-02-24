import React, { ChangeEvent, useEffect, useState } from 'react';
import { SiBookstack } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { FaDollarSign, FaX } from "react-icons/fa6";
import UserBooks from '../components/Admin/UserBook';
import Popup from '../components/PopUp';
import { toast } from 'react-toastify';
import axios from 'axios';
interface UserFormData {
  balance: number;
  username?: string;
}

interface AccessInfo {
  data: { subscription_status: string, username: string, access_level: number; };
}

const AdminDashboard = () => {
  const [user, setUser] = useState<AccessInfo | null>(null);
  const [books, setBooks] = useState(false)
  const [total, setTotal] = useState<any>();
  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axios.get("https://insight-backend-tfbb.onrender.com/books/total");
      setTotal(data.totalBooks);

      if (!data.message) {

        toast.error(data.error);
      }
    };
    getBooks();
  }, []);
  useEffect(() => {
    const access_info = localStorage.getItem("access_info");
    if (access_info !== null) {
      setUser(JSON.parse(access_info));
    }
  }, []);
  const { subscription_status, username } = user?.data || { sub: '' };

  const [formData, setFormData] = useState<UserFormData>({
    balance: 0,
    username: ''
  });
  const handleSubscribe = async () => {
    // setFormData({
    //   ...formData?.username = username 
    // })
    try {

      const { data } = await axios.put(`https://insight-backend-tfbb.onrender.com/user/subscribe`, formData)
      if (data.message) {
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      username: username,
    });
  };

  return (
    <main className=' flex   flex-col  items-center w-full h-full my-3  '>
      <div className='text-lg leading-8 text-custom-tomato'>
        <h3>Welcome back {username}!  </h3>
      </div>
      <div className=" my-4 w-screen flex items-center justify-center h-full">


        <div className="flex gap-4 flex-row">
          <div className=" bg-yellow-200 h-24  text-black w-32 shadow hover:shadow-lg rounded p-5 gap-3 grid">
            <div className=" flex items-center justify-center gap-3">
              <h3>BOOKS</h3>

              <h1>{total}</h1>
            </div>
            <SiBookstack className='card_iicon' />
          </div>

          <div className="bg-custom-tomato text-white h-24 min-w-32 shadow hover:shadow-lg rounded p-5 gap-3 grid">
            <div className=" flex items-center justify-center gap-3">
              {subscription_status === "inactive" &&
                <h3>NOT SUBSCRIBED</h3>}
              {subscription_status !== "inactive" &&
                <h3>SUBSCRIBED</h3>}
            </div>
            < FaBell className='card_iicon' />
          </div>
          {subscription_status === "inactive" &&
            <div
              onClick={() => setBooks(!books)} className="bg-custom-light-tomato text-custom-tomato h-24 min-w-32 shadow hover:shadow-lg rounded p-5 gap-3 grid">
              <div className=" flex items-center justify-center gap-3">
                <h3>SUBSCRIBE NOW</h3>
              </div>
              <FaDollarSign className='card_iicon' />
            </div>
          }
        </div>
      </div>

      <div className='my-4 px-8 min-w-[60%] '>
        <UserBooks status={subscription_status} />
      </div>
      {books && <Popup >
        <div className='flex flex-col gap-4 w-96 min-h-24'>
          <div className='flex justify-between items-center'>

            <h1>Pay to subscribe  </h1>
            <span
              onClick={() => setBooks(!books)}
              className='bg-red-500 p-1 rounded-full cursot pointer'>
              <FaX className='text-white block ' />
            </span>
          </div>
          <div className="w-full">
            <label>Amount  <code aria-disabled="true">100K</code></label>
            <br />
            <input
              type="number"
              required
              placeholder="Enter amount 100K"
              name="balance"
              value={formData.balance}
              onChange={handleInputChange}
              className="block w-full outline-none rounded-md px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
            />
          </div>
          <button
            onClick={handleSubscribe}
            type='submit'
            className="bg-custom-tomato rounded-lg text-white px-4 py-2"
          >
            Subscribe
          </button>
        </div>

      </Popup>}
    </main>
  );
}

export default AdminDashboard
