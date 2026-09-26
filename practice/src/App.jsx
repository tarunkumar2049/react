import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

function App() {
  return (
    <div className="flex flex-col justify-evenly gap-8 m-10">
      <span className="flex justify-evenly">
        <Link to="/" className="bg-amber-400 w-20 ">
          Home
        </Link>
        <Link to="/About" className="bg-amber-400 w-20 ">
          About
        </Link>
        <Link to="/Contact" className="bg-amber-400 w-20 ">
          Contact
        </Link>
        <Link to="/Help" className="bg-amber-400 w-20 ">
          Help
        </Link>
        <NavLink to="/Contact">Contact</NavLink>
      </span>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
