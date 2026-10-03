import { FaUserPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TbUserScreen } from "react-icons/tb";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiMedicineBottleFill } from "react-icons/ri";

export default function Modules() {
  return (
    <div className="mt-22 bg-[#f6fafe] flex flex-col items-center pt-6 pb-15 px-2 md:px-0">
      <div className="flex flex-col items-center gap-8 ">
        <h1 className="text-red-800 px-8 py-1 bg-red-100/50 rounded-2xl">
          EXPLORE ECOSYSTEM
        </h1>
        <h1 className="text-5xl font-bold text-center">Integrated Healthcare Modules</h1>
        <p className="text-gray-500 md:w-150 text-center text-lg">
          A unified digital backbone for modern hospitals. From patient intake
          to complex reporting, our energetic hospital ERP automates your
          clinical workflow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-6 lg:px-38 py-15">
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#a83900] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#a83900] bg-[#a839001a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#a83900]">
            <FaUserPlus />
          </span>
          <h1 className="text-2xl font-semibold">Patient Management</h1>
          <p className="text-gray-600 text-sm pb-6">
            Streamline registration, demographic tracking, and history
            management with central patient identity.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#ff6b2c] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#ff6b2c] bg-[#ff6b2c1a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#ff6b2c]">
            <SlCalender />
          </span>
          <h1 className="text-2xl font-semibold">Appointment</h1>
          <p className="text-gray-600 text-sm pb-6">
            Smart scheduling with automated reminders and waitlist management
            for clinical peak hours.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#565e74] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#565e74] bg-[#565e741a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#565e74]">
            <TbUserScreen />
          </span>
          <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
          <p className="text-gray-600 text-sm pb-6">
            A clinical command center for vital tracking, prescriptions, and
            instant patient medical history access.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#a83900] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#a83900] bg-[#a839001a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#a83900]">
            <FaMoneyBillAlt />
          </span>
          <h1 className="text-2xl font-semibold">Billing</h1>
          <p className="text-gray-600 text-sm pb-6">
            Automated revenue cycle management with transparent invoicing for
            IPD, OPD, and emergency services.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#ff6b2c] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#ff6b2c] bg-[#ff6b2c1a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#ff6b2c]">
            <SlCalender />
          </span>
          <h1 className="text-2xl font-semibold">Appointment</h1>
          <p className="text-gray-600 text-sm pb-6">
            Smart scheduling with automated reminders and waitlist management
            for clinical peak hours.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#565e74] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#565e74] bg-[#565e741a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#565e74]">
            <TbUserScreen />
          </span>
          <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
          <p className="text-gray-600 text-sm pb-6">
            A clinical command center for vital tracking, prescriptions, and
            instant patient medical history access.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#a83900] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#a83900] bg-[#a839001a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#a83900]">
            <FaMoneyBillAlt />
          </span>
          <h1 className="text-2xl font-semibold">Billing</h1>
          <p className="text-gray-600 text-sm pb-6">
            Automated revenue cycle management with transparent invoicing for
            IPD, OPD, and emergency services.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#ff6b2c] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#ff6b2c] bg-[#ff6b2c1a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#ff6b2c]">
            <SlCalender />
          </span>
          <h1 className="text-2xl font-semibold">Appointment</h1>
          <p className="text-gray-600 text-sm pb-6">
            Smart scheduling with automated reminders and waitlist management
            for clinical peak hours.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#565e74] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#565e74] bg-[#565e741a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#565e74]">
            <TbUserScreen />
          </span>
          <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
          <p className="text-gray-600 text-sm pb-6">
            A clinical command center for vital tracking, prescriptions, and
            instant patient medical history access.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#a83900] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#a83900] bg-[#a839001a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#a83900]">
            <FaMoneyBillAlt />
          </span>
          <h1 className="text-2xl font-semibold">Billing</h1>
          <p className="text-gray-600 text-sm pb-6">
            Automated revenue cycle management with transparent invoicing for
            IPD, OPD, and emergency services.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#ff6b2c] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#ff6b2c] bg-[#ff6b2c1a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#ff6b2c]">
            <SlCalender />
          </span>
          <h1 className="text-2xl font-semibold">Appointment</h1>
          <p className="text-gray-600 text-sm pb-6">
            Smart scheduling with automated reminders and waitlist management
            for clinical peak hours.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#565e74] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#565e74] bg-[#565e741a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#565e74]">
            <TbUserScreen />
          </span>
          <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
          <p className="text-gray-600 text-sm pb-6">
            A clinical command center for vital tracking, prescriptions, and
            instant patient medical history access.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#a83900] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#a83900] bg-[#a839001a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#a83900]">
            <FaMoneyBillAlt />
          </span>
          <h1 className="text-2xl font-semibold">Billing</h1>
          <p className="text-gray-600 text-sm pb-6">
            Automated revenue cycle management with transparent invoicing for
            IPD, OPD, and emergency services.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#ff6b2c] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#ff6b2c] bg-[#ff6b2c1a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#ff6b2c]">
            <SlCalender />
          </span>
          <h1 className="text-2xl font-semibold">Appointment</h1>
          <p className="text-gray-600 text-sm pb-6">
            Smart scheduling with automated reminders and waitlist management
            for clinical peak hours.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="bg-white p-6 flex flex-col gap-4 border-l-4 border-[#565e74] rounded-2xl hover:-translate-y-1 group ">
          <span className=" text-[#565e74] bg-[#565e741a] hover:text-white flex w-14 justify-center p-4 rounded-xl text-2xl group-hover:text-white group-hover:bg-[#565e74]">
            <TbUserScreen />
          </span>
          <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
          <p className="text-gray-600 text-sm pb-6">
            A clinical command center for vital tracking, prescriptions, and
            instant patient medical history access.
          </p>
          <h1 className="flex items-center gap-2 text-orange-700 font-bold">
            Learn More
            <span className="text-sm">
              <FaArrowRight />
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-10  md:px-14 lg:px-68 rounded-2xl text-white bg-linear-to-r from-[#a83900] to-[#ff6b2c] ">
        <h1 className="text-3xl font-semibold text-center">
          Ready to Transform Your Healthcare Facility?
        </h1>
        <p className="text-center md:w-150">
          Join over 500+ clinics and hospitals globally that trust Adidose for
          their daily clinical operations.
        </p>
        <span className="flex flex-col md:flex-row justify-center gap-4">
          <button className="border px-10 py-4 rounded-2xl shadow-2xl font-semibold text-orange-800 bg-white hover:bg-gray-100/90">
            Request Full Brochure
          </button>
          <button className="border px-10 py-4 rounded-2xl shadow-2xl font-semibold hover:bg-white/10">
            Schedule Live Training
          </button>
        </span>
      </div>
    </div>
  );
}
