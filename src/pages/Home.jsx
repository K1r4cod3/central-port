import Navbar from '../components/shared/Navbar'
import HeroBanner from '../components/page-specific/homepage/HeroBanner'
import LinkSection from '../components/page-specific/homepage/LinkSection'
import WelcomeInfo from '../components/page-specific/homepage/WelcomeInfo'
import InfoBanner from '../components/page-specific/homepage/InfoBanner'
import ExploreBanner from '../components/page-specific/homepage/ExploreBanner'
import { NewsBanner } from '../components/page-specific/homepage/NewsBanner'
import FooterBar from '../components/shared/FooterBar'

function Home() {
  return (
    <>
      <HeroBanner />
      <LinkSection />
      <WelcomeInfo />
      <InfoBanner />
      <ExploreBanner />
      <NewsBanner />
    </>
  )
}

export default Home 