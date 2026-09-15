import { useContext, useRef } from "react";
import { ExampleContext } from "./globalData/Context2";

export default function Component4() {
  const data3 = useContext(ExampleContext);

  return (
    <div>
      <br></br>
      <h1> Data 4 </h1>
      <span>Component 4 </span>
      <span>c4--{data3}</span>
    </div>
  );
}
