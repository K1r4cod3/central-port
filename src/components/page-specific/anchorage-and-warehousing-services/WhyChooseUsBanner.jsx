import React from 'react'
import './WhyChooseUsBanner.css'
import { Clock, MapPin, TrafficCone, Truck } from "lucide-react"
import { useTranslation } from 'react-i18next'

const WhyChooseUsBanner = () => {
  const { t } = useTranslation('anchorage-and-warehousing-services')
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-3xl font-bold mb-12 text-center text-blue-400 title-font'>
            {t('why-choose-us.title')}
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <MapPin className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>{t('why-choose-us.item1-title')}</h3>
                <p className='text-gray-700 content-font'>
                  {t('why-choose-us.item1-content')}
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Truck className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>{t('why-choose-us.item2-title')}</h3>
                <p className='text-gray-700 content-font'>
                  {t('why-choose-us.item2-content')}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <TrafficCone className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>{t('why-choose-us.item3-title')}</h3>
                <p className='text-gray-700 content-font'>
                  {t('why-choose-us.item3-content')}
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='mr-4 mt-1'>
                <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                  <Clock className='h-5 w-5 text-white' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2 text-gray-900 title-font'>{t('why-choose-us.item4-title')}</h3>
                <p className='text-gray-700 content-font'>
                  {t('why-choose-us.item4-content')}
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsBanner