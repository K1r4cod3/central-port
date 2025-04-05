import React from 'react'
import './index.css'
import HeroBanner from '../../components/page-specific/crew-support-and-logistics-services/HeroBanner'
import IntroductionBanner from '../../components/page-specific/crew-support-and-logistics-services/IntroductionBanner'
import ServiceBanner from '../../components/page-specific/crew-support-and-logistics-services/ServiceBanner'
import WhyChooseUsBanner from '../../components/page-specific/crew-support-and-logistics-services/WhyChooseUsBanner'
import HighLightImage from '../../components/page-specific/crew-support-and-logistics-services/HighLightImage'
import ContactBanner from '../../components/page-specific/crew-support-and-logistics-services/ContactBanner'
const CrewSupportAndLogisticsServices = () => {
  return (
    <>
        <HeroBanner />
        <IntroductionBanner />
        <ServiceBanner />
        <WhyChooseUsBanner />
        <HighLightImage />
        <ContactBanner />
    </>
  )
}

export default CrewSupportAndLogisticsServices