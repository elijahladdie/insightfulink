import { FaSpinner } from "react-icons/fa";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div>
      <h1 className="capitalize text-3xl font-bold text-custom-tomato px-4 py-8 flex">
        <FaSpinner className="hover:rotate-90  infinite transition duration-300 bounce  mt-4" />
        Build in Progress
      </h1>

      <Footer />
    </div>
  );
};

export default Products;
