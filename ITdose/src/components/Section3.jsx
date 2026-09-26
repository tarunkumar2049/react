import { FaRegUser } from "react-icons/fa6";
import { TbReportMedical } from "react-icons/tb";
import { TbMicroscope } from "react-icons/tb";
import { PiBoneLight } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
import { FaRegIdCard } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineBloodtype } from "react-icons/md";
import Patient from "../pages/Patient";
import Pharmacy from "../pages/Pharmacy";
import Laboratory from "../pages/Laboratory";
import Radiology from "../pages/Radiology";
import Billing from "../pages/Billing";
import Ipd from "../pages/Ipd";
import Inventory from "../pages/Inventory";
import HrPayroll from "../pages/HrPayroll";
import Queue from "../pages/Queue";
import BloodBank from "../pages/BloodBank";
import { useEffect, useState } from "react";

export default function Section3() {
  const [content, setContent] = useState(<Patient />);
  const [val, setVal] = useState(1);

  function show() {
    switch (val) {
      case 1:
        setContent(val == 1 && <Patient />);
        break;
      case 2:
        setContent(val == 2 && <Pharmacy />);
        break;
      case 3:
        setContent(val == 3 && <Laboratory />);
        break;
      case 4:
        setContent(val == 4 && <Radiology />);
        break;
      case 5:
        setContent(val == 5 && <Billing />);
        break;
      case 6:
        setContent(val == 6 && <Ipd />);
        break;
      case 7:
        setContent(val == 7 && <Inventory />);
        break;
      case 8:
        setContent(val == 8 && <HrPayroll />);
        break;
      case 9:
        setContent(val == 9 && <Queue />);
        break;
      case 10:
        setContent(val == 10 && <BloodBank />);
        break;
      default:
        <Patient />;
    }
  }

  useEffect(() => {
    show();
  }, [val]);

  return (
    <div className="bg-[#f6fafe] pb-24">
      <div className="flex justify-center h-68">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-3xl">Enterprise ERP Suite</h1>
          <p className="text-gray-600 w-160 text-center">
            One integrated platform to manage every clinical and administrative
            department in your medical facility.
          </p>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col bg-[#ffffff66] border-gray-100 border shadow-lg rounded-2xl h-3/screen w-76 ml-8">
          <h1 className="pl-6 text-orange-600 text-sm font-medium mt-4 pb-2 border-b-2 border-b-gray-200 mx-4">
            MODULE HUB
          </h1>
          <div className="flex flex-col gap-2 mt-6 font-semibold text-gray-500">
            <button
              onClick={() => setVal(1)}
              className={`${val === 1 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : "hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <FaRegUser />
              </span>
              <span>PATIENT MGMT</span>
            </button>
            <button
              onClick={() => setVal(2)}
              className={`${val === 2 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <TbReportMedical />
              </span>
              <span>PHARMACY</span>
            </button>
            <button
              onClick={() => setVal(3)}
              className={`${val === 3 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <TbMicroscope />
              </span>
              <span>LABORATORY</span>
            </button>
            <button
              onClick={() => setVal(4)}
              className={`${val === 4 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <PiBoneLight />
              </span>
              <span>RADIOLOGY</span>
            </button>
            <button
              onClick={() => setVal(5)}
              className={`${val === 5 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <FaRegMoneyBillAlt />
              </span>
              <span>BILLING</span>
            </button>
            <button
              onClick={() => setVal(6)}
              className={`${val === 6 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <FaChalkboardUser />
              </span>
              <span>IPD/OPD</span>
            </button>
            <button
              onClick={() => setVal(7)}
              className={`${val === 7 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <MdInventory />
              </span>
              <span>INVENTORY</span>
            </button>
            <button
              onClick={() => setVal(8)}
              className={`${val === 8 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <FaRegIdCard />
              </span>
              <span>HR & PAYROLL</span>
            </button>
            <button
              onClick={() => setVal(9)}
              className={`${val === 9 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <FiUsers />
              </span>
              <span>QUEUE MGMT</span>
            </button>
            <button
              onClick={() => setVal(10)}
              className={`${val === 10 ? "bg-orange-500 shadow-2xl text-white shadow-orange-500/30" : " hover:bg-white "} rounded-xl py-4 text-left mx-4 pl-5  text-sm flex gap-2 items-center hover:translate-x-2`}
            >
              <span>
                <MdOutlineBloodtype />
              </span>
              <span>BLOOD BANK</span>
            </button>
          </div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
