import { MdAppRegistration } from "react-icons/md";
import { FaIdCardAlt } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";
import { GrTest } from "react-icons/gr";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";

export default function Section4() {
  return (
    <div className="bg-[#171c1f] text-white py-20">
      <div className="flex justify-center pb-20">
        <h1 className="text-3xl font-semibold">Seamless Patient Workflow</h1>
      </div>
      <div className="flex justify-center items-center relative  overflow-hidden">
        <div className="bg-[#1e293b] absolute max-w-full h-1 top-10 left-60 right-60" />
        <div className="text-center flex flex-col items-center gap-4 p-2">
          <span className="flex justify-center p-5 w-16 text-2xl border-orange-500 shadow-xl shadow-orange-300/20 rounded-full bg-orange-500 z-10 hover:scale-115 ">
            <MdAppRegistration />
          </span>
          <span className="flex flex-col w-3/4 gap-2">
            <h1 className="text-xl">Register</h1>
            <p className="text-gray-500 ">Swift entry & UHID creation</p>
          </span>
        </div>
        <div className="text-center flex flex-col items-center gap-4">
          <span className="flex justify-center p-5 w-16 text-2xl border-[#334155] border rounded-full bg-[#1e293b] z-10 hover:border-orange-500">
            <FaIdCardAlt />
          </span>
          <span className="flex flex-col w-3/4 gap-2">
            <h1 className="text-xl">Triage</h1>
            <p className="text-gray-500 ">Swift entry & UHID creation</p>
          </span>
        </div>
        <div className="text-center flex flex-col items-center gap-4">
          <span className="flex justify-center p-5 w-16 text-2xl border-[#334155] border rounded-full bg-[#1e293b] z-10 hover:border-orange-500">
            <LuStethoscope />
          </span>
          <span className="flex flex-col w-3/4 gap-2">
            <h1 className="text-xl">Consult</h1>
            <p className="text-gray-500 ">Swift entry & UHID creation</p>
          </span>
        </div>
        <div className="text-center flex flex-col items-center gap-4">
          <span className="flex justify-center p-5 w-16 text-2xl border-[#334155] border rounded-full bg-[#1e293b] z-10 hover:border-orange-500">
            <GrTest />
          </span>
          <span className="flex flex-col w-3/4 gap-2">
            <h1 className="text-xl">Diagnostics</h1>
            <p className="text-gray-500 ">Swift entry & UHID creation</p>
          </span>
        </div>
        <div className="text-center flex flex-col items-center gap-4">
          <span className="flex justify-center p-5 w-16 text-2xl border-[#334155] border rounded-full bg-[#1e293b] z-10 hover:border-orange-500">
            <BsFillDoorOpenFill />
          </span>
          <span className="flex flex-col w-3/4 gap-2">
            <h1 className="text-xl">Discharge</h1>
            <p className="text-gray-500 ">Swift entry & UHID creation</p>
          </span>
        </div>
        <div className="text-center flex flex-col items-center gap-4">
          <span className="flex justify-center p-5 w-16 text-2xl border-[#334155] border rounded-full bg-[#1e293b] z-10 hover:border-orange-500">
            <TfiWallet />
          </span>
          <span className="flex flex-col w-3/4 gap-2">
            <h1 className="text-xl">Billing</h1>
            <p className="text-gray-500 ">Swift entry & UHID creation</p>
          </span>
        </div>
      </div>
    </div>
  );
}
