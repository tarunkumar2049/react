import { useContext, useEffect } from "react";
import { useState } from "react";
import Component1 from "./Component1";
import { ExampleContext } from "./globalData/Context2";

export default function App() {
  const data = useContext(ExampleContext);
  const [count, setCount] = useState(data);
  function print() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect", count);
  });

  return (
    <div className="m-10">
      <span className="flex">{count}</span>
      <button className="bg-amber-400 border-2 px-2" onClick={print}>
        ADD
      </button>
      <Component1 />
    </div>
  );
}
