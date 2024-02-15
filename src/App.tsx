
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
import 'react-toastify/dist/ReactToastify.css';
import BookDetailPage from "./components/BookDetailPage";
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
  const access_info = localStorage.getItem("access_info");

  if (access_info) {
    // Parse JSON string into an object
    const accessInfoObj = JSON.parse(access_info);

    // Destructure properties from the parsed object
    const { username, user_fullnames, access_level } = accessInfoObj.data;


    // Now you can use these variables as needed

    if (access_level === 1) {
      return (
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="new-book" element={<NewBook />} />
          <Route path="books/view/:book_id" element={<BookDetailPage />} />
          <Route path="user/view/:user_id" element={<UserDetail />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="books/view/:book_id" element={<BookDetailPage />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      );
    }

  } else {
    console.log("No access info found in localStorage.");
    return <Navigate to={"/login"} />;
  }
};

export default App;
