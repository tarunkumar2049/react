import { useContext } from "react";
import { ExampleContext } from "./globalData/Context2";
import Component4 from "./Component4";

export default function Component3() {
  const abc = useContext(ExampleContext);
  return (
    <div>
      <br></br>
      <h1>Data 3</h1>
      <span>Component 3 </span>
      <span>c3-- {abc}</span>
      <Component4 />
    </div>
  );
}
