import { FaSpinner } from "react-icons/fa";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Release from "../components/Releases";

const Books = () => {
  return (
    <div>
      <h1 className="capitalize text-4xl font-bold text-custom-tomato px-4 py-8">
        {" "}
        listing all books{" "}
      </h1>
      <Categories/>
      <Release/>

      <Footer />
    </div>
  );
};

export default Books;
