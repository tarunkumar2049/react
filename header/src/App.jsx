import Footer from "./footer"
import Hero from "./hero-section"
import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Footer2 from "./footer2"
import { Route, Routes } from "react-router-dom"


function App() {
const name = "Tarun";

  return (
    <section>
      <Footer />
      <Routes>
        <Route path="/" element={<Hero  />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/shop" element={<Section1 />} />
      </Routes>
      {/* <Hero /> */}
      <Section1 name = {name} />
      {/* <Section2 />
      <Section3 />
      <Section4 />
      <Footer2 /> */}
      
    </section>
  )
}

export default App
