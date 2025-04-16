import React from 'react'
import './CapabilitiesBanner.css'
import { Link } from 'react-router-dom'
import { Anchor, Clock, MapPin, Ship, PenToolIcon as Tool, Users } from "lucide-react"
import { useTranslation } from 'react-i18next'

const CapabilitiesBanner = () => {
  const { t } = useTranslation('cargo-handling-and-transshipment-services')
  return (
    <div className='py-16 bg-[#0693ca]'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-4xl font-bold mb-12 text-center text-white title-font'>{t('capabilities.title')}</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Ship className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>{t('capabilities.item1-title')}</h3>
              <p className='text-gray-700 content-font'>
                {t('capabilities.item1-content')}
              </p>
            </div>

            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Anchor className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>{t('capabilities.item2-title')}</h3>
              <p className='text-gray-700 content-font'>
                {t('capabilities.item2-content')}
              </p>
            </div>

            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Ship className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>{t('capabilities.item3-title')}</h3>
              <p className='text-gray-700 content-font'>
                {t('capabilities.item3-content')}
              </p>
            </div>

            <div className='bg-white p-6 shadow-md hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                <Anchor className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-gray-900 title-font'>{t('capabilities.item4-title')}</h3>
              <p className='text-gray-700 content-font'>
                {t('capabilities.item4-content')}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CapabilitiesBanner