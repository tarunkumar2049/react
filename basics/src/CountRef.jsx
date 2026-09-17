import { useRef, useState } from "react";

export default function CountRef() {
  const [count1, setCount] = useState(0);
  const count = useRef(0);
  console.log("count prev", count.current);
  console.log("count1", count1);
  count.current = count1;
  function add() {
    setCount(count1 + 1);
  }
  return (
    <div className="flex m-10 bg-amber-400">
      <span>Count : {count.current}</span>
      <button className="bg-red-500" onClick={add}>
        ADD
      </button>
    </div>
  );
}
