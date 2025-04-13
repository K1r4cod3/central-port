import Navbar from '../../components/shared/Navbar'
import HeroBanner from '../../components/page-specific/homepage/HeroBanner'
import WelcomeInfo from '../../components/page-specific/homepage/WelcomeInfo'
import InfoBanner from '../../components/page-specific/homepage/InfoBanner'
import ExploreBanner from '../../components/page-specific/homepage/ExploreBanner'
import { NewsBanner } from '../../components/page-specific/homepage/NewsBanner'
import FooterBar from '../../components/shared/FooterBar'
import HighlightService from '../../components/page-specific/homepage/HighLightService'

function Home() {
  return (
    <>
      <HeroBanner />
      <HighlightService />
      <WelcomeInfo />
      <InfoBanner />
      <ExploreBanner />
      <hr className='border-t-10 border-yellow-300 my-10 w-3/4 mx-auto' />
      <NewsBanner />
    </>
  )
}

export default Home 