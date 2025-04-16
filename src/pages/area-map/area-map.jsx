import React from 'react'
import './index.css'
import HeroBanner from '../../components/page-specific/area-map/HeroBanner'
import ContentBanner from '../../components/page-specific/area-map/ContentBanner'
import HighLightImage from '../../components/page-specific/area-map/HighLightImage'
import ContactBanner from '../../components/page-specific/area-map/ContactBanner'
const AreaMap = () => {
  return (
    <>
        <HeroBanner />  
        <ContentBanner />
        <HighLightImage />
        <ContactBanner />
    </>

  )
}

export default AreaMap