import React, { useEffect, useState } from 'react';
import { SiBookstack } from "react-icons/si";
import { FaHome, } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Books from './Books';
import Users from './Users';
import { BsBook } from 'react-icons/bs';
import axios from 'axios';
import formatMoney from '../../utils/formatMoney';
import { toast } from 'react-toastify';


const AdminDashboard = () => {
  const [books, setBooks] = useState(false)
  const [nav, setNav] = useState(false)
const [userData,setUserData] = useState<any>();
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
  const data = [
    {
      name: '2020 - 2021',
      Subscribers: 1200,
      Users: 2400,
      amt: 2400,
    },
    {
      name: '2021 - 2022',
      Subscribers: 3000,
      Users: 1398,
      amt: 2210,
    },
    {
      name: '2022 - 2023',
      Subscribers: 2000,
      Users: 1800,
      amt: 2290,
    },
    {
      name: '2023- 2024',
      Subscribers: 2780,
      Users: 3908,
      amt: 2000,
    },
  ];

  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await axios.get("https://insight-backend-tfbb.onrender.com/user/total");
      setUserData({totalUsers:data.totalUsers, totalBalance:data.totalBalance})
    }
    fetchData();
  },[])



  return (
    <main className=' flex flex-row   w-full h-full divide-x  '>
      <div className='w-64 '>
        <button onClick={() => setNav(!nav)} data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-custom-tomato rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
        <aside id="separator-sidebar" className={` top-14 left-0 z-40 w-64 h-screen transition-transform ${!nav ? "-translate-x-full" : "translate-x-0"} sm:translate-x-0`} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto ">
            <ul className="space-y-2 font-medium">
              <li  >
                <button onClick={() => setNav(!nav)} className=" shadow hover:shadow-lg  w-full py-4  flex justify-start  text-start items-center p-2 text-custom-tomato rounded-lg  group">
                  <svg className="w-5 h-5 text-custom-tomato transition duration-75  group-hover:text-custom-tomato " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </button>
              </li>

              <li>
                <button onClick={() => setBooks(!books)} className=" shadow hover:shadow-lg  w-full py-4  flex justify-start  text-start items-center p-2 text-custom-tomato rounded-lg  group">
                  <svg className="flex-shrink-0 w-5 h-5 text-custom-tomato transition duration-75 text-custom-tomato " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </button>
              </li>
              <li>
                <button onClick={() => setBooks(!books)} className=" shadow hover:shadow-lg  w-full py-4  flex justify-start  text-start items-center p-2 text-custom-tomato rounded-lg  group">
                  <BsBook />
                  <span className="flex-1 ms-3 whitespace-nowrap">Books</span>
                </button>
              </li>

             
            </ul>

          </div>
        </aside>
      </div>

      <div className='flex  gap-5 flex-col px-2 w-10/12 '>
        <div className="w-full p-6 bg-white  rounded-lg shadow hover:shadow-lg flex justify-between items-center">
          <div className='flex items-center'>

            <FaHome className='text-2xl text-custom-tomato ' />
            <h5 className=" text-2xl font-semibold tracking-tight text-custom-tomato">Dashboard</h5>
          </div>
          <div className='flex items-center'>

            <FaHome className='text-sm text-custom-tomato ' />
            <h5 className=" text-sm font-semibold tracking-tight text-custom-tomato">&nbsp; / Dashboard / {books ? "books" : "users"}</h5>
          </div>
        </div>
        <div className='flex w-full gap-2'>

          <ResponsiveContainer aspect={2} height={"100%"} width={1000} className={"shadow-md p-2 rounded"}>
            <LineChart data={data}
              margin={{ top: 0, right: 3, left: 0, bottom: 2 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Subscribers" stroke="#ED553B" />
              <Line type="monotone" dataKey="Users" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex gap-2 flex-row justify-between flex-wrap lg-flex-nowrap">
            <div className="w-full p-2 px-6 bg-white flex flex-col justify-between  shadow hover:shadow-md rounded-lg shadow bg-custom-light-tomato ">
              <SiBookstack className='text-custom-tomato text-2xl mb-2' />
              <div>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-custom-tomato ">Books </h5>
              </div>
              <p className="mb-2 font-normal text-custom-tomato ">{total}</p>

            </div>
            <div className="w-full p-2 px-6 bg-white flex flex-col justify-between  shadow hover:shadow-md rounded-lg shadow bg-custom-light-tomato ">
              < FaUsers className='text-custom-tomato text-2xl mb-2' />

              <div>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-custom-tomato "> Users</h5>
              </div>
              <p className="mb-2 font-normal text-custom-tomato ">{userData?.totalUsers}</p>

            </div>
            <div className="w-full p-2 px-6 bg-white flex flex-col justify-between  shadow hover:shadow-md rounded-lg shadow bg-custom-light-tomato ">
              <svg className="w-7 h-7 text-custom-tomato  mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
              <div>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-custom-tomato ">SUBSCRIPTIONS</h5>
              </div>
              <p className="mb-2 font-normal text-custom-tomato ">{formatMoney(userData?.totalBalance)}</p>

            </div>
          </div>



        </div>
        <div className='my-4 w-full '>
          {books ? <Books /> : <Users />}
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard
