import { useContext } from "react";
import { ExampleContext } from "./globalData/Context2";
import Component3 from "./Component3";

export default function Component2() {
  const data2 = useContext(ExampleContext);
  return (
    <div>
      <br></br>
      <h1>Data 2</h1>
      <span>Component 2 </span>
      <span>c2-- {data2} </span>
      <Component3 />
    </div>
  );
}
