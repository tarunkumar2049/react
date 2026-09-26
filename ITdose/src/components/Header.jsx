import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex flex-row bg-white/80 backdrop-blur-xl w-full  p-7 justify-between fixed top-0 z-50">
      <Link to="/">
        <span className="text-2xl font-bold">ITdose</span>
      </Link>
      <span className="flex gap-8 text-gray-600">
        <Link className="hover:text-orange-500" to="/Modules">
          Modules
        </Link>
        <Link className="hover:text-orange-500" to="/Features">
          Features
        </Link>
        <div className="group">
          <Link className="flex hover:text-orange-500 group">
            Services{" "}
            <span className="mt-1">
              <IoMdArrowDropdown />
            </span>
          </Link>
          <div className="absolute flex-col bg-white gap-1 rounded-xl shadow-xl shadow-black-300/80 hidden group-hover:flex">
            <Link className="hover:bg-gray-300 px-4 py-1" to="/Services">
              All Services
            </Link>
            <Link className="hover:bg-gray-300 px-4 py-1" to="/Country">
              Country Services
            </Link>
            <Link className="hover:bg-gray-300 px-4 py-1" to="/Form">
              Book Demo Form
            </Link>
          </div>
        </div>
        <Link className="hover:text-orange-500" to="/Pricing">
          Pricing
        </Link>
        <Link className="hover:text-orange-500" to="/Resources">
          Resources
        </Link>
        <Link className="hover:text-orange-500" to="/About">
          About
        </Link>
        <Link className="hover:text-orange-500" to="/Blog">
          Blog
        </Link>
        <Link className="hover:text-orange-500" to="/Gallery">
          Gallery
        </Link>
        <Link className="hover:text-orange-500" to="/Contact">
          Contact
        </Link>
      </span>
    </div>
  );
}
