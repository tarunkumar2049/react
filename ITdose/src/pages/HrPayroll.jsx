import { FaRegUser } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

export default function HrPayroll() {
  return (
    <div className="h-full bg-white w-auto mx-8 lg:mr-8 rounded-2xl p-12 shadow-lg">
      <div className="flex items-center gap-2 lg:gap-4">
        <span className="text-orange-400 bg-[#ff6b2c1a] p-5 text-2xl rounded-2xl">
          <FaRegUser />
        </span>
        <span>
          <h1 className="font-semibold text-3xl">HR & Payroll</h1>
          <p className="text-gray-500">CORE MODULE</p>
        </span>
      </div>
      <p className="text-gray-500 my-7 lg:w-5xl text-lg">
        Streamline the entire patient journey from registration to discharge.
        Our comprehensive module ensures a single source of truth for patient
        history, enabling better clinical decisions and reduced administrative
        overhead.
      </p>
      <div className="grid lg:grid-cols-2 gap-5 ">
        <button className="border border-gray-200 py-4 rounded-2xl text-left flex items-center hover:border-orange-400">
          <span className="px-6 text-orange-400 text-xl">
            <FaRegCheckCircle />
          </span>
          <span>Universal Patient ID (UHID) for life-long tracking</span>
        </button>
        <button className="border border-gray-200 py-4 rounded-2xl text-left flex items-center hover:border-orange-400">
          <span className="px-6 text-orange-400 text-xl">
            <FaRegCheckCircle />
          </span>
          <span>Self-service registration kiosks and portal integration</span>
        </button>
        <button className="border border-gray-200 py-4 rounded-2xl text-left flex items-center hover:border-orange-400">
          <span className="px-6 text-orange-400 text-xl">
            <FaRegCheckCircle />
          </span>
          <span>Real-time bed availability and ward management</span>
        </button>
        <button className="border border-gray-200 py-4 rounded-2xl text-left flex items-center hover:border-orange-400">
          <span className="px-6 text-orange-400 text-xl">
            <FaRegCheckCircle />
          </span>
          <span>Automated patient consent and documentation</span>
        </button>
      </div>
    </div>
  );
}
