import { ChangeEvent, useEffect, useState } from "react";
import NewBook from "../NewBook";
import Popup from "../PopUp";
import { Link } from "react-router-dom";
import PredefinedPopover from "../Popover";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BsEye } from "react-icons/bs";
import { FaX } from "react-icons/fa6";
interface Book {
  _id: string;
  book_title: string;
  book_subtitle: string;
  book_coverImage: string;
  book_author: string;
  book_url: string;
  uploaded_by: string;
  __v: number;
}
interface bookProp {
  status?: string
}
interface UserFormData {
  balance: number;
  username?: string;
}
interface AccessInfo {
  data: { subscription_status: string, username: string, access_level: number; };
}

const Books: React.FC<bookProp> = ({ status }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [pay, setPay] = useState(false);
  const [user, setUser] = useState<AccessInfo | null>(null);
  const { subscription_status, username } = user?.data || { username: '' };

  const [formData, setFormData] = useState<UserFormData>({
    balance: 0,
    username: username
  });
  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axios.get("https://insight-backend-tfbb.onrender.com/books");
      setBooks(data.books);
      if (data.message) {
        return data;
      } else {
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


  const handleSubscribe = async () => {
    const { data } = await axios.put(`https://insight-backend-tfbb.onrender.com/user/subscribe`, formData)
    if (data.message) {
      toast.success(data.message);
    } else if (data.error) {
      toast.error(data.error);

    };
  }
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <header className="w-full ">
      <div className=" flex justify-center flex-col ">
        <ToastContainer position="top-right" />
        <div className="flex justify-between items-center w- px-3  ">
          <h1 className="font-bold text-xl"> Books</h1>

        </div>
        <table className="min-w-fit ">
          <thead className="-top-2 border">
            <tr className=" px-2 py-2 ">
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Book Title
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Book Author
              </th>

              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Action {subscription_status}
              </th>
            </tr>
          </thead>

          <tbody>
            {books?.map((book) => (
              <tr className="p-2 py-5 border-2 border-slate-100" key={book._id}>
                <td className="px-8 py-4 border-r-2 border-slate-200">{book.book_title}</td>
                <td className="px-8 py-4 border-r-2 border-slate-200">{book.book_author}</td>
                <td className="px-8 py-4 border-r-2 border-slate-200">
                  <PredefinedPopover
                    trigger={
                      <h1>
                        <BsEye />
                      </h1>
                    }
                    content={
                      <div >
                        {subscription_status !== "inactive" ? <Link
                          to={`/dashboard/books/view/${book._id}`}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          View
                        </Link> : <span
                          onClick={() => setPay(!pay)}
                          className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                          Pay now
                        </span>}

                      </div>
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pay && <Popup >
        <div className='flex flex-col gap-4 w-96 min-h-24'>
          <div className='flex justify-between items-center'>

            <h1>Pay to subscribe  </h1>
            <span
              onClick={() => setPay(!pay)}
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
    </header>
  );
};

export default Books;
