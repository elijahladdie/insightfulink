import { ReactNode } from "react";

interface PopupProps {
  children: ReactNode;
}
const Popup: React.FC<PopupProps> = ({ children }) => {
  return (
    <div className=" fixed top-0 left-0 z-50  w-full h-full flex items-center  justify-center bg-black bg-opacity-40">
      <div className="flex-col   p-2 px-4 flex justify-center bg-white px-2 rounded-md min-w-1/2 ">
        {children}
      </div>
    </div>
  );
};
export default Popup;
