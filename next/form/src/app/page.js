"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: " ",
    enroll: "",
    course: " ",
    city: " ",
    country: " ",
    address: " ",
    state: " ",
    zip: " ",
    phone: " ",
    email: " ",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-150 border-2 m-10 rounded-2xl bg-[#e4e9ed] p-10"
      >
        <div>
          <h1 className="text-3xl font-bold">Registration Form</h1>
        </div>
        <div className="gap-10 flex flex-col">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between pb-6">
              <h1 className="text-xl font-bold "> PERSONAL INFORMATION</h1>
              <span className="flex">
                <h1> DATE : </h1>
                <input type="date" className="border-b-2" />
              </span>
            </div>
            <span className="flex">
              <label className="w-40">FULL NAME : </label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">ENROLLMENT NO. : </label>
              <input
                onChange={handleChange}
                name="enroll"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">COURSE : </label>
              <input
                onChange={handleChange}
                name="course"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">CITY : </label>
              <input
                onChange={handleChange}
                name="city"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">COUNTRY : </label>
              <input
                onChange={handleChange}
                name="country"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">ADDRESS : </label>
              <input
                onChange={handleChange}
                name="address"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between py-6">
              <h1 className="text-xl font-bold">PRESENT ADDRESS</h1>
            </div>
            <span className="flex">
              <label className="w-40">STATE : </label>
              <input
                onChange={handleChange}
                name="state"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">ZIP-CODE : </label>
              <input
                onChange={handleChange}
                name="zip"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">PHONE : </label>
              <input
                onChange={handleChange}
                name="phone"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
            <span className="flex">
              <label className="w-40">EMAIL : </label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                className="border-b-2 pr-35 pl-5 shadow-xl"
              />
            </span>
          </div>
          <button
            type="submit"
            className="border-2 py-1 rounded-2xl  hover:-translate-y-1 font-semibold shadow-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
