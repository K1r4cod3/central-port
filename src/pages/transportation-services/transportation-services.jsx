import React from 'react'
import HeroBanner from '../../components/page-specific/transportation-services/HeroBanner'
import ServiceBanner from '../../components/page-specific/transportation-services/ServiceBanner'
import WhyChooseUsBanner from '../../components/page-specific/transportation-services/WhyChooseUsBanner'
import HighLightImage from '../../components/page-specific/transportation-services/HighLightImage'
import ContactBanner from '../../components/page-specific/transportation-services/ContactBanner'
const TransportationServices = () => {
  return (
    <>
        <HeroBanner />
        <ServiceBanner />
        <WhyChooseUsBanner />
        <HighLightImage />
        <ContactBanner />
    </>

  )
}

export default TransportationServices