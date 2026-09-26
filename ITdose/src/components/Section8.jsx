import { MdOutlinePhone } from "react-icons/md";
import { GoMail } from "react-icons/go";

export default function Sectoin8() {
  return (
    <div className="flex justify-center bg-[#e4e9ed] p-20">
      <div className="flex px-14 py-12 border border-gray-200 bg-white rounded-4xl shadow-2xl gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold w-48">
            Ready to <span className="text-orange-500">Transform?</span>
          </h1>
          <p className="w-94 text-gray-600">
            Fill in the details and our ERP specialist will reach out within 2
            hours for a customized demo.
          </p>
          <div className="flex flex-col gap-4">
            <span className="flex gap-4">
              <span className="text-2xl flex items-center text-orange-500">
                <MdOutlinePhone />
              </span>
              <span className="flex flex-col">
                <h1 className="text-sm font-semibold text-gray-600">
                  SALES HOT-LINE
                </h1>
                <p className="font-bold">+1 (555) IT-DOSE</p>
              </span>
            </span>
            <span className="flex gap-4">
              <span className="text-2xl flex items-center text-orange-500">
                <GoMail />
              </span>
              <span className="flex flex-col">
                <h1 className="text-sm font-semibold text-gray-600">
                  EMAIL US
                </h1>
                <p className="font-bold">hello@itdose.com</p>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col w-100 gap-1">
          <label className="font-semibold text-sm">NAME</label>
          <input
            type="text"
            className="rounded-xl border border-gray-200 px-4 py-3 bg-[#f6fafe]"
            placeholder="John Doe"
          />
          <label className="font-semibold text-sm">HOSPITAL NAME</label>
          <input
            type="text"
            className="rounded-xl border border-gray-200 px-4 py-3 bg-[#f6fafe]"
            placeholder="City General Hospital"
          />
          <label className="font-semibold text-sm">PHONE</label>
          <input
            type="text"
            className="rounded-xl border border-gray-200 px-4 py-3 bg-[#f6fafe]"
            placeholder="+1 234 567 890"
          />
          <label className="font-semibold text-sm">MESSAGE</label>
          <textarea
            type="text"
            className="rounded-xl border border-gray-200 px-4 py-3 h-30 bg-[#f6fafe]"
            placeholder="Tells us about your requirements..."
          />
          <button className="bg-orange-500 text-white rounded-2xl py-5 font-bold mt-4">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
