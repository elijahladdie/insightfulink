

import axios from "axios";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";

interface FormData {
  book_title: string;
  book_subtitle: string;
  book_coverImage: File | string ;
  book_author: string;
  book_url: File | string;
  uploaded_by: string;
}
interface Book {
  _id: string;
  book_title: string;
  book_subtitle: string;
  uploaded_by: string;
  book_coverImage: File | string;
  book_author: string;
  book_url: File | string;
}
const UpdateBook: React.FC<{ bookId?: string }> = ({ bookId }) => {
  const [formData, setFormData] = useState<FormData>({
    book_title: "",
    book_subtitle: "",
    book_coverImage: "",
    book_author: "",
    book_url: "",
    uploaded_by: ""

  });
  const [book, setBook] = useState<Book>({
    _id: "",
    book_title: "",
    book_subtitle: "",
    uploaded_by: "",
    book_coverImage: "",
    book_author: "",
    book_url: ""
  });

  interface AccessInfo {
    data: { user_fullnames: string, access_level: number; };
  }
  const [user, setUser] = useState<AccessInfo | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };
  useEffect(() => {
    const access_info = localStorage.getItem("access_info");
    if (access_info !== null) {
      setUser(JSON.parse(access_info));
      const { user_fullnames } = user?.data || { user_fullnames: '' };
      setFormData({
        ...formData,
        "uploaded_by": user_fullnames,
      });
    }
  }, []);
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const { data } = await axios.get(`https://insight-backend-tfbb.onrender.com/books/${bookId}`);
        const { book_title, book_subtitle, uploaded_by, book_coverImage, book_author, book_url } = data?.bookObj;
        setFormData({
          book_title,
          book_subtitle,
          uploaded_by,
          book_coverImage, // Assuming book_coverImage and book_url are not files but URLs
          book_author,
          book_url,
        });
        setBook(data)
      } catch (error) {
        toast.error("Failed to fetch book data");
      }
    };

    fetchBookData();

  }, [bookId]);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
   try {
      let url = `https://insight-backend-tfbb.onrender.com/books/update/${bookId}`;
      
      const { data } = await axios.put(url, {updatedData: formData});
      if (data.message) {
        toast.success(data.message);
      } else if (data.error) {
        toast.error(data.message);
      }
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data.message : 'Unknown error occurred';
      toast.error(`Failed to update book: ${errorMessage}`);
    }
  };
  return (
    <form className=" rounded-md text-sm space-y-4 p-3">
      <div className="flex w-full gap-4">
        <div className="w-full ">
          <label>Book Title</label>
          <br />
          <input
            type="text"
            required
            placeholder="E.g: Bird Sing"
            name="book_title"
            value={formData?.book_title}
            onChange={handleInputChange}
            className="block w-full outline-none rounded-md px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
          />
        </div>
        <div className="w-full">
          <label>Book author </label>
          <br />
          <input
            type="text"
            required
            placeholder="Eg: John doe"
            name="book_author"
            value={formData?.book_author}
            onChange={handleInputChange}
            className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
          />
        </div>
      </div>
      <div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <label>Book Cover Image</label>
            <br />
            <input
              type="file"
              required
              name="book_coverImage"
              // value={formData?.book_coverImage}
              onChange={handleFileInputChange}
              className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
            />
            {/* <img src={formData?.book_coverImage} alt=""/> */}
          </div>

          <div className="w-full">
            <label>Book Document</label>
            <br />
            <input
              type="file"
              required
              name="book_url"
              // value={formData?.book_url}
              onChange={handleFileInputChange}
              className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full">
          <label>Book Subtitle </label>
          <br />
          <textarea
            // onResize={false}
            required
            placeholder="hint: Add meaning subtitle of this book"
            name="book_subtitle"
            value={formData?.book_subtitle}
            onChange={handleInputChange}
            className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
          />
        </div>
      </div>

      <div className="flex justify-between flex-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-custom-tomato text-white px-2 mt-4 rounded-md py-2 w-full"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateBook;
