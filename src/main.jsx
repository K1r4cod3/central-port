import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import FooterBar from './components/shared/FooterBar'
import Home from './pages/Home'
import CargoHandlingAndTransshipmentServices from './pages/cargo-handling-and-transshipment-services/cargo-handling-and-transshipment-services'
import AnchorageAndWarehousingServices from './pages/anchorage-and-warehousing-services/anchorage-and-warehousing-services'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cargo-handling-and-transshipment-services" element={<CargoHandlingAndTransshipmentServices />} />
        <Route path="/anchorage-and-warehousing-services" element={<AnchorageAndWarehousingServices />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  </StrictMode>,
)
