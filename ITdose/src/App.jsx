import { Route, Routes } from "react-router-dom";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

import Modules from "./pages/Modules";
import Features from "./pages/Features";
import Services from "./pages/Services";
import Country from "./pages/Country";
import Form from "./pages/Form";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Modules" element={<Modules />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Country" element={<Country />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
