import React from 'react'
import HeroBanner from '../../components/page-specific/inspection-services/HeroBanner'
import ServiceBanner from '../../components/page-specific/inspection-services/ServiceBanner'
import IntroductionBanner from '../../components/page-specific/inspection-services/IntroductionBanner'
import WhyChooseUsBanner from '../../components/page-specific/inspection-services/WhyChooseUsBanner'
import HighLightImage from '../../components/page-specific/inspection-services/HighLightImage'
import ContactBanner from '../../components/page-specific/inspection-services/ContactBanner'
const InspectionServices = () => {
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

export default InspectionServices