import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import LinkSection from './components/LinkSection'
import WelcomeInfo from './components/WelcomeInfo'
import InfoBanner from './components/InfoBanner'
import ExploreBanner from './components/ExploreBanner'
import { NewsBanner } from './components/NewsBanner'
import FooterBar from './components/FooterBar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeroBanner />
    <LinkSection />
    <WelcomeInfo />
    <InfoBanner />
    <ExploreBanner />
    <NewsBanner />
    <FooterBar />
  </StrictMode>,
)
