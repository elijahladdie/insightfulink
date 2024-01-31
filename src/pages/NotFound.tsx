import logo from "../assests/insightfulink.png";

const NOTFOUND = () => {
  return (
    <div className=" flex flex-col h-[90vh] items-center justify-center w-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-9xl text-custom-tomato">4</h1>
        <img src={logo} alt="" className="rounded-full h-[50%] w-[50%]"/>
        <h1 className="text-9xl text-custom-tomato">4</h1>
      </div>
      <h2 className=" text-xl lg:text-3xl txt-center">
        Page not found :(
      </h2>
    </div>
  );
};

export default NOTFOUND;
