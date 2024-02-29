import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Service from "./pages/Service"
import Facilities from "./pages/Facilities"



function App() {

  return (
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/facilities" element={<Facilities />} />
    </Routes>

  )
}

export default App
