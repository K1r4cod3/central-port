import React from 'react'
import HeroBanner from '../../components/page-specific/technical-information/HeroBanner'
import ContentBanner from '../../components/page-specific/technical-information/ContentBanner'
import HighLightImage from '../../components/page-specific/technical-information/HighLightImage'
import ContactBanner from '../../components/page-specific/technical-information/ContactBanner'
const TechnicalInformation = () => {
  return (
    <>
        <HeroBanner />
        <ContentBanner />
        <HighLightImage />
        <ContactBanner />
    </>

  )
}

export default TechnicalInformation