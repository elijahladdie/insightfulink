import AdminFooter from './Admin/AdminFooter';
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa6';
const BookDetailPage = () => {
  const params = useParams<{ book_id: string }>();
  const [book, setBook] = useState<any>(null)
  const { book_id } = params;
  useEffect(() => {
    const handleSubmit = async () => {
      const { data } = await axios.get(`http://localhost:5000/books/${book_id}`)
      if (data) {
        setBook(data.bookObj)
      } else if (data.error) {
        toast.error(data.error);
      }
    };
    handleSubmit()
  }, []);

  const handleDownload = async (): Promise<void> => {
    try {
      if (!book || !book.book_url) {
        toast.error("Book file not available for download");
        return;
      }

      const downloadUrl = `http://localhost:5000/${book.book_url}`;
      window.open(downloadUrl, '_blank');

    } catch (error) {
      const axiosError = error as AxiosError;
      toast.error("Failed to download book: " + axiosError.message);
    }
  };

  return (
    <div className='w-screen h-screen relative flex  items-center flex-col overflow-scroll'
      style={{
        backgroundImage: `url(${book?.book_coverImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        objectFit: 'cover',
      }}>
      <div className='w-full h-full absolute bg-black opacity-90 top-0 left-0 z-0'/>
        <div className="container relative flex text-custom-white gap-3 p-2 justify-center items-center z-2 h-full sm:px-4 flex-wrap lg:flex-nowrap md:flex-nowrap ">
          <div className="image-container  h-[80%]">
            <img src={book?.book_coverImage} alt="" className="w-full h-full object-fit rounded-lg" />
          </div>
          <div className="content flex flex-col justify-center items-start gap-5 lg:w-2/4 md:w-2/4 p-2 lg:p-0">
            <h1 className="lg:text-4xl font-bold tracking-wider text-3xl">
              {book?.book_title}
            </h1>
            <p className="text-base">
              "{book?.book_title}" ,{book?.book_subtitle}
            </p>
            <button
              onClick={handleDownload}
              className="bg-custom-tomato rounded-lg text-white px-4 py-2 w-fit whitespace-nowrap flex items-center gap-2"
            >
              <FaEye />
              <p>Read</p>
            </button>
          </div>

        </div>
        <AdminFooter />
    </div>
  )
}

export default BookDetailPage;

