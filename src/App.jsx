import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Service from "./pages/Service"
import Facilities from "./pages/Facilities"
import Doctors from "./pages/Doctors"
import DoctorDetails from "./pages/DoctorDetails"
import Contact from "./pages/Contact"



function App() {

  return (
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  )
}

export default App
