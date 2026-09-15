import { useContext } from "react";
import { DataContext } from "./GlobalData/Context";

export default function About() {
  const data = useContext(DataContext);
  return (
    <div>
      <h1>This is the about page</h1>
      <p>Number : {data[0]} </p>
      <p>Email : {data[1]} </p>
    </div>
  );
}
