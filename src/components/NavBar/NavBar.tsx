import {useState} from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BiSolidContact, BiMenuAltLeft } from "react-icons/bi";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="text-right">
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" className="hover:text-gray-700">
            Food Ninja
          </a>
        </h1>
        <div className="px-4 cursor-pointer md:hidden ">
          <BiMenuAltLeft style={{ fontSize: "20px" }} onClick={()=>setIsOpen(!isOpen)} />
        </div>
      </div>
      <ul
        id="menu"
        className={isOpen ? "text-sm mt-6 block" : "text-sm mt-6 hidden md:block"}
      >
        <li className="text-gray-700 font-bold py-1">
          <a
            href="#"
            className="px-4 flex justify-end items-center border-r-4 border-primary-600"
          >
            <span>Home</span>
            <AiOutlineHome style={{ fontSize: "14px", marginLeft: "10px" }} />
          </a>
        </li>
        <li className="py-1">
          <a
            href="#"
            className="px-4 flex justify-end items-center  border-r-4 border-white"
          >
            <span>About</span>
            <FcAbout style={{ fontSize: "14px", marginLeft: "10px" }} />
          </a>
        </li>
        <li className="py-1">
          <a
            href="#"
            className="px-4 flex justify-end items-center border-r-4 border-white"
          >
            <span>Contact</span>
            <BiSolidContact style={{ fontSize: "14px", marginLeft: "10px" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
