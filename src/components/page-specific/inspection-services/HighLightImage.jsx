import React from 'react'
import './HighLightImage.css'
import image1 from '../../../assets/inspection-services/highlight1.jpg'
import image2 from '../../../assets/inspection-services/highlight2.jpg'
import image3 from '../../../assets/inspection-services/highlight3.jpg'
import { useTranslation } from 'react-i18next'
const HighLightImage = () => {
  const { t } = useTranslation('inspection-services')
  return (
    <div className='py-16 bg-[#0693ca]'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-4xl font-bold mb-12 text-center text-white title-font'>{t('highlight-images.title')}</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image1}
                  alt='Xếp dỡ hàng hóa'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>{t('highlight-images.item1-title')}</h3>
                <p className='text-gray-700 content-font'>
                {t('highlight-images.item1-content')}
                </p>
              </div>
            </div>

            <div className='overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image2}
                  alt='Quy trình chuyển tải dầu'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>{t('highlight-images.item2-title')}</h3>
                <p className='text-gray-700 content-font'>
                {t('highlight-images.item2-content')}
                </p>
              </div>
            </div>

            <div className='overflow-hidden shadow-md bg-white hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='h-64 overflow-hidden'>
                <img
                  src={image3}
                  alt='Xếp dỡ hàng hóa'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>{t('highlight-images.item3-title')}</h3>
                <p className='text-gray-700 content-font'>
                {t('highlight-images.item3-content')}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HighLightImage