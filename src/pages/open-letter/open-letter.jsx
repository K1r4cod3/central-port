import React from 'react'
import './index.css'
import HeroBanner from '../../components/page-specific/open-letter/HeroBanner'
import OpenLetter from '../../components/page-specific/open-letter/OpenLetter'
import ContactBanner from '../../components/page-specific/open-letter/ContactBanner'
const OpenLetterPage = () => {
  return (
    <>
        <HeroBanner />
        <OpenLetter />
        <ContactBanner />
    </>
  )
}

export default OpenLetterPage