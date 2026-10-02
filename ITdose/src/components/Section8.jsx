import { MdOutlinePhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { use, useEffect, useState } from "react";

export default function Sectoin8() {
  const [form, setForm] = useState({
    name: " ",
    hospital: "",
    phone: " ",
    message: " ",
  });

  const [val, setVal] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.hospital && form.phone && form.message != "") {
      console.log(form);
      setVal(0);
    } else {
      setVal(1);
    }
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="flex p-10 lg:justify-center bg-[#e4e9ed] lg:p-20 ">
      <div className="flex p-10 flex-col md:flex-row lg:px-14 py-12 border border-gray-200 bg-white rounded-4xl shadow-2xl md:gap-22 lg:gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold w-48">
            Ready to <span className="text-orange-500">Transform?</span>
          </h1>
          <p className="md:w-60 lg:w-94 text-gray-600">
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:w-70 lg:w-100 gap-2 lg:gap-1"
        >
          <label className="font-semibold text-sm">NAME</label>
          <input
            type="text"
            className="rounded-xl border border-gray-200 px-4 py-3 bg-[#f6fafe]"
            placeholder="John Doe"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
          <label className="font-semibold text-sm">HOSPITAL NAME</label>
          <input
            type="text"
            className="rounded-xl border border-gray-200 px-4 py-3 bg-[#f6fafe]"
            placeholder="City General Hospital"
            onChange={handleChange}
            value={form.hospital}
            name="hospital"
          />
          <label className="font-semibold text-sm">PHONE</label>
          <input
            type="number"
            placeholder="+1 234 567 890"
            className="rounded-xl border border-gray-200 px-4 py-3 bg-[#f6fafe]"
            onChange={handleChange}
            value={form.phone}
            name="phone"
          />
          <label className="font-semibold text-sm">MESSAGE</label>
          <textarea
            type="text"
            className="rounded-xl border border-gray-200 px-4 py-3 h-30 bg-[#f6fafe]"
            placeholder="Tells us about your requirements..."
            onChange={handleChange}
            value={form.message}
            name="message"
          />
          <span
            className={`${val == 1 ? "flex" : "hidden"} text-red-500 font-semibold text-center animate-pulse`}
          >
            Please fill all the details
          </span>
          <button
            type="submit"
            className="bg-orange-500 text-white rounded-2xl py-5 font-bold mt-4"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
