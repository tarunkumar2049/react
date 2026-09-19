import { useCallback, useEffect, useMemo, useState } from "react";

export default function NeetUG() {
  const [form, setForm] = useState({ name: "", rank: "", state: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form", form);
  }

  const change = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const [data, setData] = useState([]);
  // console.log("object", data);

  useEffect(() => {
    const fetchData = async () => {
      const value = await fetch("https://fakestoreapi.com/products");
      const data1 = await value.json();
      setData(data1);
    };
    fetchData();
  }, []);

  const memory = useMemo(() => {
    return data.map((item) => ({
      ...item,
      newPrice: item.price,
    }));
  });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl my-6">
        India's Smart
        <span className="bg-amber-300 rounded-xl px-1">NEET UG</span>
        Counselling Platform
      </h1>
      <p>Registration for NeetUG</p>
      {/* <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2 w-60">
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={change}
          placeholder="Enter your name"
        />
        <label>Rank</label>
        <input
          type="number"
          value={form.rank}
          name="rank"
          onChange={change}
          placeholder="Example: 600"
        />
        <label>State</label>
        <input
          type="text"
          value={form.state}
          name="state"
          onChange={change}
          placeholder="Enter your state"
        />
        <button
          type="submit"
          className="bg-blue-400 rounded-3xl px-2 py-1 ml-20"
        >
          SUBMIT
        </button>
      </form> */}
      <div className="flex flex-col mt-8">
        API Call :
        <div className="flex flex-col gap-10">
          {memory.length !== 0 ? (
            memory.map((item) => {
              return (
                <div key={item.id} className="flex gap-1 flex-col items-start">
                  <h1>Id : {item.id}</h1>
                  <h1>Title : {item.title}</h1>
                  <h1>NewPrice : {item.newPrice}</h1>
                  <h1>Description : {item.description}</h1>
                </div>
              );
            })
          ) : (
            <h1> Data not found</h1>
          )}
        </div>
      </div>
    </div>
  );
}
