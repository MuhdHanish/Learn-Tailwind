import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BiSolidContact } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1 className="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" className="hover:text-gray-700">Food Ninja</a>
        </h1>
      </div>
      <ul>
        <li className="text-gray-700 font-bold">
          <a href="#">
            <span>Home</span>
            <AiOutlineHome style={{ fontSize: "14px" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <span>About</span>
            <FcAbout style={{ fontSize: "14px" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <span>Contact</span>
            <BiSolidContact style={{ fontSize: "14px" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar