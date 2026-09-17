import { useEffect, useState } from "react";

export default function NeetMDS() {
  const [form, setForm] = useState({ name: "", rank: "", state: "" });
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const value = await fetch("https://dummyjson.com/test");
      const data1 = await value.json();
      setData(JSON.stringify(data1));
    };
    fetchData();
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl my-6">
        India's Smart
        <span className="bg-amber-300 rounded-xl px-1">NEET MDS</span>
        Counselling Platform
      </h1>
      <p>Registration for NeetMDS</p>
      <form>
        <label>Name : </label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <label>Rank : </label>
        <input
          type="number"
          value={form.rank}
          name="rank"
          onChange={handleChange}
          placeholder="Example: 600"
        />
        <button type="button" onChange={handleSubmit}>
          SUBMIT
        </button>
        <span className="flex mt-6"> API Call : {data}</span>
      </form>
    </div>
  );
}
