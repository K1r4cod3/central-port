import React from 'react'
import './IntroductionBanner.css'
import { useTranslation } from 'react-i18next'
const IntroductionBanner = () => {
  const { t } = useTranslation('anchorage-and-warehousing-services')
  return (
    <div className='py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl md:text-5xl font-bold mb-6 text-blue-400 title-font'>{t('introduction.title')}</h2>
            <p className='text-gray-700 leading-relaxed content-font text-lg'>
            {t('introduction.content')}
            </p>
          </div>
        </div>
    </div>
  )
}

export default IntroductionBanner