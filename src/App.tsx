import React from "react";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NOTFOUND from "./pages/NotFound";
import Books from "./pages/Books";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Release from "./pages/Release";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const isAdmin = true;
  const Auth = () => {
    if (isAdmin) {
      return <Outlet />;
    }
    return isAdmin ? <Outlet /> : <div className="text-3xl text-custom-tomato text-center h-[90vh] flex items-center justify-center">Authorization needed</div>;
  };
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/release" element={<Release />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Auth />}>
            <Route index element={<Dashboard />} />
          </Route>
          {/* <div className="w-screen bg-custom-kk-tomato block min-h-screen">
          <Navbar />
          <SwiperBooks />
          <Categories />
          <Release />
          <Featured />
          <Footer />
        </div> */}
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
