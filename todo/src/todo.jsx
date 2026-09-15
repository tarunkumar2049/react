import { useEffect } from "react";
import { useState } from "react";

export default function Todo() {
  const [data, setData] = useState([]);
  const [inpt, setInpt] = useState("");
  //   console.log("inpt", inpt);
  //   console.log(data);

  function addTask() {
    data.push(inpt);
    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <>
      <div className="bg-gray-300 h-screen flex justify-center items-center">
        <div className="w-full mx-40 ">
          <input
            id="input"
            value={inpt}
            onChange={(e) => setInpt(e.target.value)}
            className="px-8 rounded-xl border py-2 w-full -mr-20 placeholder-gray-600 focus:outline-none"
            type="text"
            placeholder="Add a Task"
          />
          <button
            className="bg-green-500 border-2 border-green-500 rounded-md px-2 py-1"
            onClick={addTask}
          >
            ADD
          </button>
          <div>List : {data.map((item) => item)} </div>
        </div>
      </div>
    </>
  );
}
