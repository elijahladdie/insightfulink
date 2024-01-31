import React from 'react'
import { useParams } from 'react-router-dom';

const AdminFooter = () => {
    const date: any = new Date();
    const year: any = date.getFullYear();
    const params:any = useParams();
    const book_id = params.book_id;
    console.log(book_id)
    return (
        <footer className='w-screen p-4 text-center bg-custom-tomato uppercase'>Insightulink {year} &copy; copyright </footer>
    )
}

export default AdminFooter