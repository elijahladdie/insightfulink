import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
interface UserFormData {
  username: string;
  password: string;
  user_fullnames: string;
  access_level: number;
  balance: number;
  subscription_status: string;
}

const RegisterAdmin: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    password: "",
    user_fullnames: "",
    access_level: 1,
    balance: 0,
    subscription_status: "active",
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you can submit the form data
  };

  return (

    <form
      className=" rounded-md text-sm space-y-4 p-3 min-w-96"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <label>Username</label>
        <br />
        <input
          type="text"
          required
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="block w-full outline-none rounded-md px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
        />
      </div>
      <div className="w-full">
        <label>Password</label>
        <br />
        <input
          type="password"
          required
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
        />
      </div>
      
        <div className="w-full">
          <label>Full Name</label>
          <br />
          <input
            type="text"
            required
            placeholder="Enter full names"
            name="user_fullnames"
            value={formData.user_fullnames}
            onChange={handleInputChange}
            className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
          />
        </div>
        <div className="w-full hidden">
          <label>Full Name</label>
          <br />
          <input
            type="text"
            required
            
            placeholder="Enter full names"
            name="user_fullnames"
            value={formData.access_level}
            onChange={handleInputChange}
            className="block w-full hidden outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
          />
        </div>




      <div className="flex justify-between flex-end items-center gap-4">
       
            <button
              type="submit"
              
              className="text-custom-tomato shadow-lg  rounded-md py-2 w-full"
              >
              Register
            </button>
        
         
      </div>
    </form>

  );
};

export default RegisterAdmin;
