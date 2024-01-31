import { useState } from "react";
import NewBook from "../NewBook";
import Popup from "../PopUp";
import { Link } from "react-router-dom";
import PredefinedPopover from "../Popover";
import NewUser from "../Form";
import RegisterAdmin from "./RegisterAdmin";
import UpdateUser from "./UpdateUser";

const Users = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showUserUpdate, setShowUserUpdate] = useState(false);

  return (
    <header >

      <div className="w- flex justify-center flex-col">
        <div className="flex justify-between items-center w- px-3  ">
          <h1 className='font-bold text-xl'> Users  </h1>
          <button onClick={() => setIsVisible(!isVisible)} className="bg-custom-tomato rounded-lg text-white px-4 py-2">New Admin</button>
        </div>
        <table className="w-fit">
          <thead className="-top-2 border-b">
            <tr className="">
              <th scope="col" className="px-1 py-4">
                User Id
              </th>
              <th scope="col" className="px-1 py-4">
                Username
              </th>
              <th scope="col" className="px-1 py-4">
                Full Name
              </th>
              <th scope="col" className="px-1 py-4">
                Balance
              </th>
              <th scope="col" className="px-1 py-4">
                Subscription Status
              </th>
              <th scope="col" className="px-1 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-1 py-4">
                #345
              </td>
              <td className="px-1 py-4">
                mukiza
              </td>
              <td className="px-1 py-4">
                Mukiza innocent
              </td>
              <td className="px-1 py-4">
                400000
              </td>
              <td className="px-1 py-4">
                Inactive
              </td>
              <td className="px-1 py-4">
                <td className="px-1 py-4">
                  <PredefinedPopover trigger={<h1>click </h1>} content={<div>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserUpdate(!showUserUpdate)}
                    >
                      Edit
                    </button>
                    <Link to={"/dashboard/user/view/34"} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View</Link>
                  </div>} />
                </td>
              </td>
            </tr>
            <tr className="">
              <td className="px-1 py-4">
                #345
              </td>
              <td className="px-1 py-4">
                mukiza
              </td>
              <td className="px-1 py-4">
                Mukiza innocent
              </td>
              <td className="px-1 py-4">
                400000
              </td>
              <td className="px-1 py-4">
                Inactive
              </td>
              <td className="px-1 py-4">
                <td className="px-1 py-4">
                  <PredefinedPopover trigger={<h1>click </h1>} content={<div>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserUpdate(!showUserUpdate)}
                    >
                      Edit
                    </button>
                    <Link to={"/dashboard/user/view/34"} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View</Link>
                  </div>} />
                </td>
              </td>
            </tr>

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
          <div className="flex py-2 items-center justify-between font-bolder">
            <h1 className="text-[#0095DA] text-[19px] p-2 capitalize">
              Update User
            </h1>
            <button
              className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
              onClick={() => setShowUserUpdate(!showUserUpdate)}
            >
              X
            </button>
          </div>
          <UpdateUser />
        </Popup>
      }
    </header>
  );
}

export default Users
