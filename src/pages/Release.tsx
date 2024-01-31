import { FaSpinner } from "react-icons/fa";
import Footer from "../components/Footer";
import Releases from "../components/Releases";

const Release = () => {
  return (
    <div>
      <h1 className="capitalize text-4xl font-bold text-custom-tomato px-4 py-8">
        {" "}
        listing all New books{" "}
      </h1>
      <Releases />
      <Footer />
    </div>
  );
};

export default Release;
