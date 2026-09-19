import { useRef, useState } from "react";

export default function CountRef2() {
  const [count, setCount] = useState(0);
  const count1 = useRef(0);
  count1.current = count;
  function add() {
    setCount(count + 1);
  }
  console.log(count1);
  return (
    <div>
      <div>{count}</div>
      <button onClick={add}>Add</button>
    </div>
  );
}
