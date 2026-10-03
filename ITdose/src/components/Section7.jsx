import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function Section7() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#f6fafe] py-22">
      <div>
        <h1 className="text-3xl font-semibold pb-14">
          Plans for Every Institution
        </h1>
      </div>
      <div className="flex flex-col p-10 lg:p-0 md:flex-row gap-8">
        <div className="flex flex-col py-6 px-8 bg-white rounded-2xl border border-gray-300 ">
          <h1 className="text-2xl font-semibold py-2">Basics</h1>
          <p className="text-gray-500">
            For small clinics & diagnostic centers
          </p>
          <h1 className="py-8 text-4xl font-bold">Contact Us</h1>
          <div className="flex flex-col gap-4 mb-12">
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <p>OPD Management</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <p>Basic Billing</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <p>Single Lab/Pharmacy</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gray-500">
                <RxCross2 />
              </span>
              <p className="text-gray-400">IPD & Bed Mgmt</p>
            </span>
          </div>
          <button className="border border-gray-300 lg:px-24 py-4 rounded-2xl font-semibold hover:bg-gray-200 ">
            Contact For Price
          </button>
        </div>
        <div className="relative flex flex-col py-6 px-8 bg-white rounded-2xl border-2 border-orange-500 shadow-2xl scale-105 ">
          <div className="absolute -top-3 border border-orange-500 bg-orange-500 rounded-2xl px-6 right-10 font-semibold text-white text-sm justify-center items-center">
            <p>MOST POPULAR</p>
          </div>
          <h1 className="text-2xl font-semibold py-2">Pro</h1>
          <p>For small clinics & diagnostic centers</p>
          <h1 className="py-8 text-4xl font-bold">Contact Us</h1>
          <div className="flex flex-col gap-4 mb-12">
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <p>Everything in Basic</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <p>Full IPD & Ward Mgmt</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <p>TPA & Insurance</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">
                <FaCheck />
              </span>
              <p>Mobile Apps for Doctors</p>
            </span>
          </div>
          <button className="bg-orange-500 text-white lg:px-24 py-4 rounded-2xl font-semibold ">
            Contact For Price
          </button>
        </div>
        <div className="hidden lg:flex flex-col py-6 px-8 bg-[#171c1f] rounded-2xl border border-gray-300 text-white">
          <h1 className="text-2xl font-semibold py-2">Enterprice</h1>
          <p className="text-gray-500">For large Hospital Networks</p>
          <h1 className="py-8 text-4xl font-bold">Contact Us</h1>
          <div className="flex flex-col gap-4 mb-12">
            <span className="flex items-center gap-2">
              <span className="text-orange-500">
                <FaCheck />
              </span>
              <p>Everything in Pro</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-orange-500">
                <FaCheck />
              </span>
              <p>AI Smart Features</p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-orange-500">
                <FaCheck />
              </span>
              <p>Multi-Branch Sync </p>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-orange-500">
                <FaCheck />
              </span>
              <p>Dedicated Support Lead</p>
            </span>
          </div>
          <button className="border border-gray-400 lg:px-24 py-4 rounded-2xl font-semibold hover:bg-gray-700">
            Contact For Price
          </button>
        </div>
      </div>
    </div>
  );
}
