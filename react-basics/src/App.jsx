import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);
  function counter() {
    setCount(count + 1);
    console.log("data", count);
  }
  useEffect(() => {
    console.log("data updated");
  }, [count]);
  return (
    <div>
      <Page1 />
      <Routes>
        <Route path="/" element={<home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
