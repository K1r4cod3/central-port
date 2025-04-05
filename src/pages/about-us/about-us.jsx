import React from 'react'
import './index.css'
import HeroBanner from '../../components/page-specific/about-us/HeroBanner'
import ContentBanner from '../../components/page-specific/about-us/ContentBanner'
import ContactBanner from '../../components/page-specific/about-us/ContactBanner'
const AboutUsPage = () => {
  return (
    <>
        <HeroBanner />
        <ContentBanner />
        <ContactBanner />
    </>
  )
}

export default AboutUsPage