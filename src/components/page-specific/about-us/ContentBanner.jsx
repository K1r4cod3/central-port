import React from 'react'
import './ContentBanner.css'
import { useTranslation } from 'react-i18next'

const ContentBanner = () => {
  const { t } = useTranslation('about-us')
  return (
    <div className='flex flex-col items-center justify-center py-16 max-w-3/5 mx-auto text-center'>
        <h1 className='text-4xl font-bold title-font mb-4'>{t('about-us-content1.title')}</h1>
        <p className='content-font text-lg mb-8'>{t('about-us-content1.content')}</p>
        <h1 className='text-4xl font-bold title-font mb-4'>{t('about-us-content2.title')}</h1>
        <p className='content-font text-lg mb-8'>{t('about-us-content2.content')}</p>
        <h1 className='text-4xl font-bold title-font mb-4'>{t('about-us-content3.title')}</h1>
        <p className='content-font text-lg mb-8'>{t('about-us-content3.content')}</p>
    </div>
  )
}

export default ContentBanner