import { useState } from "react";
import NeetMDS from "./NeetMDS";
import NeetPG from "./NeetPG";
import NeetUG from "./NeetUG";
import NeetSS from "./NeetSS";
import CountRef from "./CountRef";
import FocusRef from "./FocusRef";
import UseMemo from "./UseMemo";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="flex flex-col bg-gray-100 justify-center">
      <div className="flex flex-col m-20 items-center">
        <h1 className="text-3xl m-15">Choose Your Career Path</h1>
        <span className="flex flex-row gap-6 ">
          <button
            type="button"
            className="w-46 py-6 text-blue-500 border rounded-2xl focus:text-red-500 hover:text-red-500"
            onClick={() => setData(<NeetUG />)}
          >
            NeetUG
          </button>
          <button
            type="button"
            className="w-46 py-6 text-blue-500 border rounded-2xl focus:text-red-500 hover:text-red-500"
            onClick={() => setData(<NeetPG />)}
          >
            NeetPG
          </button>
          <button
            type="button"
            className="w-46 py-6 text-blue-500 border rounded-2xl focus:text-red-500 hover:text-red-500"
            onClick={() => setData(<NeetMDS />)}
          >
            NeetMDS
          </button>
          <button
            type="button"
            className="w-46 py-6 text-blue-500 border rounded-2xl focus:text-red-500 hover:text-red-500"
            onClick={() => setData(<NeetSS />)}
          >
            NeetSS
          </button>
        </span>
        <div>
          {data}
          {/* {fetchData()} */}
        </div>
      </div>
      {/* <CountRef /> */}
      {/* <FocusRef /> */}
      <UseMemo />
    </div>
  );
}

export default App;
