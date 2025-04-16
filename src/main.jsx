import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n'
import Navbar from './components/shared/Navbar'
import FooterBar from './components/shared/FooterBar'
import ScrollToTop from './components/shared/scrollToTop'
import Home from './pages/Home/Home'
import CargoHandlingAndTransshipmentServices from './pages/cargo-handling-and-transshipment-services/cargo-handling-and-transshipment-services'
import AnchorageAndWarehousingServices from './pages/anchorage-and-warehousing-services/anchorage-and-warehousing-services'
import SafetyAndEnvironmentalProtectionServices from './pages/safety-and-environmental-protection-services/safety-and-environmental-protection-services'
import CrewSupportAndLogisticsServices from './pages/crew-support-and-logistics-services/crew-support-and-logistics-services'
import TransportationServices from './pages/transportation-services/transportation-services'
import InspectionServices from './pages/inspection-services/inspection-services'
import OpenLetterPage from './pages/open-letter/open-letter'
import AboutUsPage from './pages/about-us/about-us'
import TechnicalInformation from './pages/technical-information/technical-information'
import AnchorageArea1 from './pages/anchorage-area-no1/anchorage-area-1'
import AnchorageArea2 from './pages/anchorage-area-no2/anchorage-area-2'
import AreaMap from './pages/area-map/area-map'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cargo-handling-and-transshipment-services" element={<CargoHandlingAndTransshipmentServices />} />
        <Route path="/anchorage-and-warehousing-services" element={<AnchorageAndWarehousingServices />} />
        <Route path="/safety-and-environmental-protection-services" element={<SafetyAndEnvironmentalProtectionServices />} />
        <Route path="/crew-support-and-logistics-services" element={<CrewSupportAndLogisticsServices />} />
        <Route path="/transportation-services" element={<TransportationServices />} />
        <Route path="/inspection-services" element={<InspectionServices />} />
        <Route path="/open-letter" element={<OpenLetterPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/technical-information" element={<TechnicalInformation />} />
        <Route path="/anchorage-area-1" element={<AnchorageArea1 />} />
        <Route path="/anchorage-area-2" element={<AnchorageArea2 />} />
        <Route path="/area-map" element={<AreaMap />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  </StrictMode>,
)
