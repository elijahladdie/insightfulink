
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NOTFOUND from "./pages/NotFound";
import Books from "./pages/Books";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Release from "./pages/Release";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./components/Admin/Home";
import NewBook from "./components/NewBook";
import DetailPage from "./components/DetailPage";
import Login from "./components/Login";
import UserDetail from "./components/Userdetails";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<Books />} />
          <Route path="/release" element={<Release />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/dashboard/*" element={<Auth />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const Auth = () => {
  const isLoggedin = true; // Get login state from context or local storage or wherever
  if (!isLoggedin) {
    // If user is not logged in, render login page or redirect to login
    return <Navigate to={"/login"} />;
  } else {
    const isAdmin = true; // Determine if the user is an admin or not
    if (isAdmin) {
      return (
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="new-book" element={<NewBook />} />
          <Route path="books/view/:book_id" element={<DetailPage />} />
          <Route path="user/view/:user_id" element={<UserDetail />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="books/view/:book_id" element={<DetailPage />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      );
    }
  }
};

export default App;
