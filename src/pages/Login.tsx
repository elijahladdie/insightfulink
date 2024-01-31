import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const [formData, setFormData] = useState({
    access_level: "",
    user_name: "",
    user_fullNames: "",
    password: "",
    transaction_status: "approved",
    subscription_status: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className=" fixed top-0 left-0 z-50  w-full h-full flex items-center  justify-center bg-black bg-opacity-40">
      <div className="flex-col   p-2 px-4 flex justify-center bg-white px-2 rounded-md min-w-1/2 ">
        <div className="flex justify-between w-full  flex-col ">
          <div className="flex py-2 items-center justify-between font-bolder ">
            <h1 className={`text-[#0095DA] text-[19px] p-2 capitalize ${isLogin ? "text-custom-tomato" : "text-custom-purple"}`}>
              {isLogin ? "Login" : "Sign Up"}
            </h1>
            <Link
              className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
              to={"/"}
            >
              X
            </Link>
          </div>
          {isLogin ? (
            <form
              className="rounded px-8 pt-6 pb-8 mb-4 transition ease-in-out duration-300 transform "
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-custom-tomato text-sm font-bold mb-2"
                  htmlFor="loginUserName"
                >
                  User Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  id="loginUserName"
                  type="text"
                  placeholder="User Name"
                  name="loginUserName"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-custom-tomato text-sm font-bold mb-2"
                  htmlFor="loginPassword"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  id="loginPassword"
                  type="password"
                  placeholder="Password"
                  name="loginPassword"
                />
              </div>

              <div className="flex items-center justify-between">
                <Link
                  className="bg-custom-tomato whitespace-nowrap hover:bg-custom-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  to="/dashboard"
                >
                  Log In
                </Link>
                <button
                  className="inline-block align-baseline font-bold text-sm text-custom-purple hover:text-custom-tomato whitespace-nowrap"
                  onClick={toggleForm}
                  type="button"
                >
                  Switch to Sign Up
                </button>
              </div>
            </form>
          ) : (
            <form
              className=" rounded px-8 pt-6 pb-8 mb-4 transition ease-in-out duration-300 transform "
              onSubmit={handleSubmit}
            >
              {/* Signup Form */}

              {/* User Name */}
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

              {/* User Full Names */}
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="user_fullNames"
                >
                   Full Names
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  id="user_fullNames"
                  type="text"
                  placeholder="Full Names"
                  name="user_fullNames"
                  value={formData.user_fullNames}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-custom-purple text-sm font-bold mb-2"
                  htmlFor="user_fullNames"
                >
                   Password 
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-custom-purple leading-tight focus:outline-none focus:shadow-outline"
                  id="user_fullNames"
                  type="text"
                  placeholder="Password"
                  name="pass"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <Link
                  className="hover:bg-custom-tomato whitespace-nowrap bg-custom-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  to="/dashboard"
                >
                  Sign Up
                </Link>
                <button
                  className="inline-block align-baseline font-bold text-sm hover:text-custom-purple text-custom-tomato whitespace-nowrap"
                  onClick={toggleForm}
                  type="button"
                >
                  Switch to Log In
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
