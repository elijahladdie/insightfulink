import React, { useState } from 'react';
import { SiBookstack } from "react-icons/si";
import { FaBell } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Books from '../components/Admin/Books';
import UserBooks from '../components/Admin/UserBook';


const AdminDashboard = () => {
  const [books, setBooks] = useState(false)

  const data = [
    {
      name: '2020 - 2021',
      Books: 1200,
      amt: 2400,
    },
    {
      name: '2021 - 2022',
      Books: 3000,
      amt: 2210,
    },
    {
      name: '2022 - 2023',
      Books: 2000,
      amt: 2290,
    },
    {
      name: '2023- 2024',
      Books: 2780,
      amt: 2000,
    },


  ];


  return (
    <main className=' flex   flex-col  items-center w-full h-full m-3  '>
      <div className='text-lg leading-8 text-custom-tomato'>
        <h3>Welcome back User , </h3>
      </div>
      <div className=" my-4 w-screen flex items-center justify-center h-full">
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Books" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>

        <div className="flex gap-4 flex-col">
          <div className=" bg-yellow-200 h-24  text-black w-32 shadow hover:shadow-lg rounded p-5 gap-3 grid">
            <div className=" flex items-center justify-center gap-3">
              <h3>BOOKS</h3>

              <h1>10</h1>
            </div>
            <SiBookstack className='card_iicon' />
          </div>



          <div className="bg-green-700 text-white h-24 min-w-32 shadow hover:shadow-lg rounded p-5 gap-3 grid">
            <div className=" flex items-center justify-center gap-3">
              <h3>NOT SUBSCRIBED</h3>
            </div>
            < FaBell className='card_iicon' />
          </div>
        </div>
      </div>
      <nav className='flex gap-5'>
        <button className={`hover:underline ${books ? "underline" : ""}`} onClick={() => setBooks(true)}>Books</button>
      </nav>
      <div className='my-4'>
        <UserBooks  />
      </div>

    </main>
  );
}

export default AdminDashboard
