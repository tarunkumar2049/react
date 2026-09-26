import { PiHospitalFill } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";

export default function Section2() {
  return (
    <div className="flex justify-evenly h-60 items-center bg-[#f0f4f8]">
      <span className="flex flex-col items-center">
        <span className="text-orange-500 text-4xl">
          <PiHospitalFill />
        </span>
        <h1 className="text-3xl font-bold">100+</h1>
        <p className="text-gray-500">Hospital Worldwide</p>
      </span>
      <span className="flex flex-col items-center">
        <span className="text-orange-500 text-4xl">
          <FiUsers />
        </span>
        <h1 className="text-3xl font-bold">50K+</h1>
        <p className="text-gray-500">Patients Daily</p>
      </span>
      <span className="flex flex-col items-center">
        <span className="text-orange-500 text-4xl">
          <BsLightningCharge />
        </span>
        <h1 className="text-3xl font-bold">99.9%</h1>
        <p className="text-gray-500">Uptime SLA</p>
      </span>
    </div>
  );
}
