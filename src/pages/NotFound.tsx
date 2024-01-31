import logo from "../assests/insightfulink.png";

const NOTFOUND = () => {
  return (
    <div className=" flex flex-col h-[90vh] items-center justify-center">
      <div className="flex items-center p-4">
        <h1 className="text-9xl text-custom-tomato">4</h1>
        <img src={logo} alt="" className="rounded-full h-80 w-80"/>
        <h1 className="text-9xl text-custom-tomato">4</h1>
      </div>
      <h2 className="capitalize text-2xl lg:text-4xl">
        Sorry we didn't find page you were looking for :(
      </h2>
    </div>
  );
};

export default NOTFOUND;
