import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#171c1f] px-30 py-12 flex flex-col items-start overflow-hidden">
      <div className="flex gap-18">
        <div className=" flex flex-col gap-6">
          <h1 className="text-white font-semibold">ITdose</h1>
          <p className="text-gray-500 w-70">
            Leading provider of intelligent hospital management systems.
          </p>
        </div>
        <div className="flex gap-56">
          <div>
            <h1 className="text-white font-semibold">Product</h1>
            <ul className="text-gray-500 flex flex-col gap-2 mt-4">
              <li>
                <Link to="/Modules">Modules</Link>
              </li>
              <li>
                <Link to="/Features">Features</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-semibold">Company</h1>
            <ul className="text-gray-500 flex flex-col gap-2 mt-4">
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/Gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-semibold">Resources</h1>
            <ul className="text-gray-500 flex flex-col gap-2 mt-4">
              <li>
                <Link to="/Resources">Resources</Link>
              </li>
              <li>
                <Link to="/Blog">Blog Insights</Link>
              </li>
              <li>
                <Link to="/Country">Country</Link>
              </li>
              <li>
                <Link to="/Form">Demo Form</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full items-center">
        <div className="text-gray-400 text-sm mt-6">
          © 2024 ITdose Hospital ERP
        </div>
      </div>
    </div>
  );
}
