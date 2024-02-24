import { useEffect, useState } from "react";
import NewBook from "../NewBook";
import Popup from "../PopUp";
import { Link } from "react-router-dom";
import PredefinedPopover from "../Popover";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BsEye } from "react-icons/bs";
import UpdateBook from "../UpdateBook";
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
const Books = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBookUpdate, setShowBookUpdate] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [bookId, setBookId] = useState<string | undefined>(undefined);
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
  const bookToDelete = async (bkTodelete: any) => {
    const { data } = await axios
      .delete(`https://insight-backend-tfbb.onrender.com/books/delete/${bkTodelete}`).then(async () => await axios.get("https://insight-backend-tfbb.onrender.com/books"));
    if (data.message) {
      setBooks(data.books);
      return toast.success(data.message)
    }
    return toast.error(data.error);
  };
  return (
    <header>
      <div className=" flex justify-center flex-col ">
        <ToastContainer position="top-right" />
        <div className="flex justify-between items-center w- p-3  ">
          <h1 className="font-bold text-xl"> Books </h1>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-custom-tomato rounded-lg text-white px-4 py-2"
          >
            New book
          </button>
        </div>
        <table className="min-w-fit px-2 py-2 ">
          <thead className="border">
            <tr className="">
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Book Title
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Book Author
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Uploaded By
              </th>
              <th scope="col" className="px-1 py-4 border-r-2 border-slate-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book) => (
              <tr className="" key={book._id}>
                <td className="px-8 py-4 border border-slate-200">{book.book_title}</td>
                <td className="px-8 py-4 border border-slate-200">{book.book_author}</td>
                <td className="px-8 py-4 border border-slate-200">{book.uploaded_by}</td>
                <td className="px-8 py-4 border border-slate-200">
                  <PredefinedPopover
                    trigger={
                      <h1>
                        <BsEye />{" "}
                      </h1>
                    }
                    content={
                      <div>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setBookId(book._id);
                            setShowBookUpdate(!showBookUpdate);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-custom-tomato hover:bg-gray-100"
                          onClick={() => bookToDelete(book._id)}
                        >
                          Remove
                        </button>
                        <Link
                          to={`/dashboard/books/view/${book._id}`}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          View
                        </Link>
                      </div>
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isVisible && (
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
      )}
      {showBookUpdate && (
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
          <UpdateBook bookId={bookId} />
        </Popup>
      )}
    </header>
  );
};

export default Books;
