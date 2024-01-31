import React, { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    access_level: "",
    user_name: "",
    user_fullNames: "",
    password: "",
    transaction_status: "approved",
    subscription_status: "",
    book_id: "",
    book_title: "",
    book_coverImage: "",
    book_author: "",
    book_url: " ",
    uploaded_by: "",
  });


  return (
    <div className="w-screen bg-custom-light-tomato h-screen">
      <h1 className="text-2xl font-bold mb-4 text-custom-tomato text-center py-3">
        You can view all books after Subscribing  , Please subscribe read all Books
      </h1>
    </div>
  );
};

export default Dashboard;
