import Footer from "../components/Footer";
import logo from "../assests/insightfulink.png";

const Contact = () => {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div className="w-full flex justify-center items-center p-4">
        <img src={logo} alt="" className="rounded-lg" />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
