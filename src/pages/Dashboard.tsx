// dashboard.tsx
import React, { useState } from "react";
import Popup from "../components/PopUp";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample user data (replace with actual data)
  const [showUpdate, setShowUpdate] = useState(false);
  const [showBookUpdate, setShowBookUpdate] = useState(false);
  const [formData, setFormData] = useState({
    access_level: "",
    user_name: "",
    user_fullNames: "",
    password: "",
    transaction_status: "approved",
    subscription_status: "",
    book_id: "",
    book_title: "",
    book_coverImage: "",
    book_author: "",
    book_url: " ",
    uploaded_by: "",
  });
  const userData = [
    {
      user_id: 2,
      user_name: "Michael",
      user_fullNames: "mihigho nadi",
      account_balance: 609403.4,
      transaction_status: "Rejected",
      subscription_status: "activated",
      access_level: 1,
    },
  ];
  const productData = [
    {
      book_id: 1,
      book_title: "Music over mindset",
      book_coverImage: "null",
      book_author: "Mike",
      book_url: "https:// ",
      uploaded_by: "kalisa",
    },
  ];
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-screen bg-custom-light-tomato h-screen">
      <h1 className="text-2xl font-bold mb-4 text-custom-tomato text-center py-3">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:px-[8%] p-[2%] ">
        {/* User Table */}
        <div>
          <div className="flex justify-between gap-4 py-3">
            <h2 className="text-xl font-bold mb-2 text-custom-tomato">
              User Information
            </h2>
            <button className="bg-custom-tomato text-white px-4  rounded-lg">
              New Admin
            </button>
          </div>
          <table className="w-full bg-white  shadow rounded-lg">
            <thead>
              <tr>
                <th className="- px-1 py-2 whitespace-nowrap text-sm lg:text-lg rounded-lg">
                  ID
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg lg:block hidden md:block">
                  Access Level
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Username
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg lg:block hidden md:block">
                  Names
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Balance
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Trans... Status
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Sub.... Status
                </th>
                <th className=" px-1 py-2 whitespace-nowrap text-sm lg:text-lg rounded-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user?.user_id}>
                  <td className=" px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {user?.user_id}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg lg:block hidden md:block">
                    {user?.access_level}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {user?.user_name}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg lg:block hidden md:block">
                    {user?.user_fullNames}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {user?.account_balance}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {user?.transaction_status}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {user?.subscription_status}
                  </td>
                  <td className="  px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg bg-custom-light-tomato ">
                    <button
                      className="w-full h-full  rounded-lg"
                      onClick={() => setShowUpdate(!showUpdate)}
                    >
                      Update 
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Product Table */}
        <div>
          <div className="flex justify-between gap-4 py-3">
            <h2 className="text-xl font-bold mb-2 text-custom-tomato">
              Books Information
            </h2>
            <button className="bg-custom-tomato text-white px-4  rounded-lg">
              New Book
            </button>
          </div>
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="- px-1 py-2 whitespace-nowrap text-sm lg:text-lg rounded-lg">
                  ID
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Title
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Author
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Book Url
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Cover
                </th>
                <th className="border px-1 py-2 whitespace-nowrap text-sm lg:text-lg">
                  Uploaded By
                </th>
                <th className=" px-1 py-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product) => (
                <tr key={product.book_id}>
                  <td className="rounded-lg px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {product.book_id}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {product.book_title}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {product.book_author}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    <a href={product.book_url} className="hover:underline">
                      link
                    </a>
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {product.book_coverImage}
                  </td>
                  <td className="border px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg">
                    {product.uploaded_by}
                  </td>
                  <td className=" px-1 py-2 whitespace-wrap text-center text-xs lg:text-lg bg-custom-light-tomato ">
                    <button
                      className="w-full h-full  rounded-lg"
                      onClick={() => setShowBookUpdate(!showBookUpdate)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showBookUpdate && (
          <Popup>
            <div className="flex py-2 items-center justify-between font-bolder ">
              <h1 className={`text-[#0095DA] text-[19px] p-2 capitalize `}>
                Update Book
              </h1>
              <button
                className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
                onClick={() => setShowBookUpdate(!showBookUpdate)}
              >
                X
              </button>
            </div>
            <form
              className=" rounded px-8 pt-6 pb-8 mb-4 transition ease-in-out duration-300 transform "
              onSubmit={handleSubmit}
            >
              {/* User Name */}
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="book_title"
                >
                  Book title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Book title"
                  name="book_title"
                  value={formData.book_title}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="user_fullNames"
                >
                  Book Author
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Book author"
                  name="book_author"
                  value={formData.book_author}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="book_url"
                >
                  Book Url
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Book url "
                  name="book_url"
                  value={formData.book_url}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="book_url"
                >
                  Book Cover
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Book cover"
                  name="book_coverImage"
                  value={formData.book_coverImage}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  className="hover:bg-custom-tomato whitespace-nowrap bg-custom-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </Popup>
        )}
        {showUpdate && (
          <Popup>
            <div className="flex py-2 items-center justify-between font-bolder ">
              <h1 className={`text-[#0095DA] text-[19px] p-2 capitalize `}>
                Update User
              </h1>
              <button
                className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
                onClick={() => setShowUpdate(!showUpdate)}
              >
                X
              </button>
            </div>
            <form
              className=" rounded px-8 pt-6 pb-8 mb-4 transition ease-in-out duration-300 transform "
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="user_name"
                >
                  User Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  id="user_name"
                  type="text"
                  placeholder="User Name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="user_name"
                >
                  Names
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  name="user_fullNames"
                  type="text"
                  placeholder="Names"
                  value={formData.user_fullNames}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-custom-purple text-sm font-bold mb-2">
                  Transactions Status
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  name="transaction_status"
                  value={formData?.transaction_status}
                  onChange={handleChange}
                >
                  <option value="approve">Approve</option>
                  <option value="reject">Reject</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="user_fullNames"
                >
                  Subscription Status
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  name="subscription_status"
                  value={formData.subscription_status}
                  onChange={handleChange}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  className="hover:bg-custom-tomato whitespace-nowrap bg-custom-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
