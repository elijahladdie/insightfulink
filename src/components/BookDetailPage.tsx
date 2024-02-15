
import { FaLongArrowAltRight } from 'react-icons/fa'
import AdminFooter from './Admin/AdminFooter';
import slide1Img from "../assests/e51e86de0acce7ba8a9582e3be31b204.png";

import { Link } from 'react-router-dom'

const BookDetailPage = () => {
    return (
        <div className='w-screen  bg-custom-light-tomato'>
            {/* <h1  className='py-3'>Book Detail Page</h1> */}
            <div className=" flex text-custom-purple w p-2 justify-center items-center  h-full sm:px-4 flex-wrap-reverse lg:flex-nowrap md:flex-nowrap">
            <div>
              <img src={slide1Img} alt="" className="h-80 lg:h-full md:h-96" />
            </div>
            <div className="flex item-center flex-col justify-center gap-5 lg:w-2/4 md:w-2/4  p-2 lg:p-0">
              <h1 className="lg:text-6xl  font-bold tracking-wider text-3xl ">
                The assignment
              </h1>
              <p >
                "The Assignment" is a fun book #1 in a series of 8 illustrated
                children's books for the 3rd grade level, or ages 8-10. You'll
                travel with Anna during the summer between second and third
                grade and become totally entrenched in this little girl's woe's
                as she manages to overcome her trials in a myriad of ways.
                You'll laugh and you'll cry with Anna Renee Riley. And, you just
                might end up becoming one of her best friends.
              </p>
            
            </div>
            
          </div>
            <AdminFooter />
        </div>
    )
}

export default BookDetailPage