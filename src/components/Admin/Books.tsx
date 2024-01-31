import { useState } from "react";
import NewBook from "../NewBook";
import Popup from "../PopUp";
import { Link } from "react-router-dom";
import PredefinedPopover from "../Popover";

const Books = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBookUpdate, setShowBookUpdate] = useState(false);

  return (
    <header >

      <div className="w- flex justify-center flex-col">
        <div className="flex justify-between items-center w- px-3  ">
          <h1 className='font-bold text-xl'> Books  </h1>
          <button onClick={() => setIsVisible(!isVisible)} className="bg-custom-tomato rounded-lg text-white px-4 py-2">New book</button>
        </div>
        <table className="w-fit">
          <thead className="-top-2 border-b">
            <tr className="">
              <th scope="col" className="px-1 py-4">
                Book Id
              </th>
              <th scope="col" className="px-1 py-4">
                Book Title
              </th>
              <th scope="col" className="px-1 py-4">
                Book Author
              </th>
              <th scope="col" className="px-1 py-4">
                Uploaded By
              </th>
              <th scope="col" className="px-1 py-4">
                Action
              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-1 py-4">
                #34
              </td>
              <td className="px-1 py-4">
                Singing Bird
              </td>
              <td className="px-1 py-4">
                Timberlake
              </td>
              <td className="px-1 py-4">
                user-400
              </td>
              <td className="px-1 py-4">
                <PredefinedPopover trigger={<h1>click </h1>} content={<div>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowBookUpdate(!showBookUpdate)}
                  >
                    Edit
                  </button>
                  <Link to={"/dashboard/books/view/34"} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View</Link>
                </div>} />
              </td>
            </tr>
            <tr className="">
              <td className="px-1 py-4">
                #34
              </td>
              <td className="px-1 py-4">
                Singing Bird
              </td>
              <td className="px-1 py-4">
                Timberlake
              </td>
              <td className="px-1 py-4">
                user-400
              </td>
              <td className="px-1 py-4">
                <PredefinedPopover trigger={<h1>click </h1>} content={<div>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowBookUpdate(!showBookUpdate)}
                  >
                    Edit
                  </button>
                  <Link to={"/dashboard/books/view/34"} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View</Link>
                </div>} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isVisible &&
        <Popup>
          <div className="flex py-2 items-center justify-between font-bolder">
            <h1 className="text-[#0095DA] text-[19px] p-2 capitalize">
              New Book
            </h1>
            <button
              className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
              onClick={() => setIsVisible(!isVisible)}

            >
              X
            </button>
          </div>
          <NewBook action="new" />
        </Popup>
      }
      {showBookUpdate &&
        <Popup>
          <div className="flex py-2 items-center justify-between font-bolder">
            <h1 className="text-[#0095DA] text-[19px] p-2 capitalize">
              Update Book
            </h1>
            <button
              className="text-[#FF0000] w-4 h-4 items-center flex justify-center p-4 rounded-full outline-none bg-custom-teal "
              onClick={() => setShowBookUpdate(!showBookUpdate)}
            >
              X
            </button>
          </div>
          <NewBook action="update"/>
        </Popup>
      }
    </header>
  );
}

export default Books
