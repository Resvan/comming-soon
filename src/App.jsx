import { Route, Routes } from "react-router-dom"
import CommingSoon from "./pages/CommingSoon"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import NewPage from "./pages/NewPage"



function App() {

  return (
    <Routes>
      <Route path="/" element={<CommingSoon />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/new" element={<NewPage />} />
    </Routes>

  )
}

export default App
