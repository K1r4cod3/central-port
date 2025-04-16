import React from 'react'
import './FooterBar.css'
import logo from '../../assets/logo1.png'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const FooterBar = () => {
  const { t } = useTranslation('footer')
  return (
    <div className='bg-blue-900 text-white py-8'>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1440px] mx-auto px-6">
        {/* Cột 1: Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="h-40" />
          </div>

          {/* Cột 2: Direct To */}
          <div>
            <h5 className="text-2xl font-bold mb-4">{t('direct-to')}</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/technical-information" className="hover:underline">{t('direct-to-content.content1')}</Link></li>
              <li><Link to="/area-map" className="hover:underline">{t('direct-to-content.content2')}</Link></li>
              <li><Link to="/cargo-handling-and-transshipment-services" className="hover:underline">{t('direct-to-content.content3')}</Link></li>
              <li><Link to="" className="hover:underline">{t('direct-to-content.content4')}</Link></li>
            </ul>
          </div>

          {/* Cột 3: Contact Information */}
          <div>
            <h5 className="text-2xl font-bold mb-4">{t('contact-information')}</h5>
            <div className='text-sm'>
              <p>{t('contact-information-content.content1')}</p>
              <p>{t('contact-information-content.content2')}</p>
              <p>{t('contact-information-content.content3')}</p>
              <p>{t('contact-information-content.content4')}</p>
            </div>
          </div>

          {/* Cột 4: Social Media */}
          <div className='md:ml-10'>
            <h5 className="text-2xl font-bold mb-4">{t('social-media')}</h5>
            <div className="flex space-x-4">
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.facebook.com"><Facebook className='h-6 w-6 text-blue-600' /></a>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.instagram.com"><Instagram className='h-6 w-6 text-blue-600' /></a>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.linkedin.com"><Linkedin className='h-6 w-6 text-blue-600' /></a>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <a href="https://www.twitter.com"><Twitter className='h-6 w-6 text-blue-600' /></a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FooterBar