import { useState } from "react";
import Admin from "./Admin";
import Dashboard from "./Dashboard";

export default function Conditional2() {
  const [isLoggedin, setIsloggedin] = useState(true);
  let [data, setData] = useState("");
  function handleDashboard() {
    setData(isLoggedin ? <Admin /> : <Dashboard />);
    return data;
  }

  return (
    <div>
      <span>data: {data} </span>
      <button className="bg-amber-300" onClick={handleDashboard}>
        Show
      </button>
    </div>
  );
}
