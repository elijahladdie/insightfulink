import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import NewUser from "../NewUser";
import Popup from "../PopUp";
import { Link } from "react-router-dom";
import PredefinedPopover from "../Popover";
// import NewUser from "../Form";
import RegisterAdmin from "./RegisterAdmin";
// import UpdateUser from "./UpdateUser";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import UpdateUser from "./UpdateUser";
interface User {
  _id:string;
  username:string;
  password:string;
  user_fullnames:string;
  access_level:number;
  balance:number;
  subscription_status:string;
}
interface userProp {
  username:string;
}
const Users = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showUserUpdate, setShowUserUpdate] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState<userProp>({
    username: ""
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement|  HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: userId,
    });
  };
  console.log(userId)
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("https://insight-backend-tfbb.onrender.com/user");
      setUsers(data.user);
      if (data.message) {
        return data;
      } else {
        toast.error(data.error);
      }
    };
    getUsers();
  }, []);
  const handleSubscribe = async () => {
    // setFormData({
    //   ...formData?.username = username 
    // })
    try {

      const { data } = await axios.put(`https://insight-backend-tfbb.onrender.com/user/subscribe/approve `,{username:userId})
      if (data.message) {
        toast.success(data.message);
      } 
      console.log(data)
      toast.error(data.error)
    } catch (err) {
      console.log(err)
    }
  }
 
  return (
    <header className="w-full" >
<ToastContainer autoClose={2000}/>
      <div className="w- flex justify-center flex-col">
        <div className="flex justify-between items-center w- px-3 py-2 ">
          <h1 className='font-bold text-xl'> Users  </h1>
          <button onClick={() => setIsVisible(!isVisible)} className="bg-custom-tomato rounded-lg text-white px-4 py-2">New Admin</button>
        </div>
        <table>
          <thead className=" border">
            <tr className="">
          
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Username
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Full Name
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Balance
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Subscription Status
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>
            <tr className="">
          
              <td className="px-4 py-4 border border-slate-200">
                {user.username}
              </td>
              <td className="px-4 py-4 border border-slate-200">
               {user.user_fullnames}
              </td>
              <td className="px-4 py-4 border border-slate-200">
                {user.balance}
              </td>
              <td className="px-4 py-4 border border-slate-200">
                {user.subscription_status}
              </td>
              <td className="px-4 py-4 border border-slate-200">
                  <PredefinedPopover trigger={<h1 className="">click </h1>} content={<div>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {setUserId(user.username); return setShowUserUpdate(true)}}
                    >
                      Edit
                    </button>
                    {/* <Link to={"/dashboard/user/view/34"} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View</Link> */}
                  </div>} />
              </td>
            </tr>
            )}
        

          </tbody>
        </table>
      </div>
     
      {isVisible &&
        <Popup>
          <div className="flex py-2 items-center justify-between font-bolder">
            <h1 className="text-[#0095DA] text-[19px] p-2 capitalize">
              New Admin
            </h1>
            <button
              className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
              onClick={() => setIsVisible(!isVisible)}
            >
              X
            </button>
          </div>
          <RegisterAdmin />
        </Popup>
      }
      {showUserUpdate &&
        <Popup>
          <div className="flex py-2 items-center justify-between font-bolder w-96 gap-3">
            <h1 className="text-[#0095DA] text-[19px] p-2 capitalize">
              Activate Subscription
            </h1>
            <button
              className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
              onClick={() => setShowUserUpdate(!showUserUpdate)}
            >
              X
            </button>
          </div>
          <div>
          <div className="w-full ">
        <label>Username</label>
        <br />
        <input
          type="text"
          required

          placeholder="Enter full names"
          name="username"
          value={userId}
          onChange={handleInputChange}
          className="block w-full  outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
        />
      </div>
      <button
          type="submit"
          onClick={handleSubscribe}
          className="text-blue-400 shadow-lg  rounded-md py-2 w-full my-2"
        >
          Activate
        </button>
          </div>
        </Popup>
      }
    </header>
  );
}

export default Users


/**
 * 

const UpdateUser: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    username: "",
    password: "",
    user_fullnames: "",
    access_level: 1,
    balance: 0,
    subscription_status: "active",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement|  HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 */