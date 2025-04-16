import React from 'react'
import { AnchorIcon, Fuel, Warehouse } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ServiceBanner = () => {
  const { t } = useTranslation('anchorage-and-warehousing-services')
  return (
    <div className='py-16 bg-[#0693ca]'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-2xl md:text-5xl font-bold mb-12 text-center text-white title-font'>{t('services.title')}</h2>

          <div className='space-y-12'>
            {/* Service 1 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <AnchorIcon className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>{t('services.item1-title')}</h3>
              </div>

              <p className='text-gray-700 mb-4 content-font'>
                {t('services.item1-content1')}
              </p>

              <div className='pl-4 mb-4 space-y-4'>
                <div className='bg-blue-50 p-4'>
                  <p className='text-gray-800 font-medium content-font'>{t('services.area1.title')}</p>
                  <p className='text-gray-700 content-font'>
                    {t('services.area1.details')}
                  </p>
                </div>

                <div className='bg-blue-50 p-4'>
                  <p className='text-gray-800 font-medium content-font'>{t('services.area2.title')}</p>
                  <p className='text-gray-700 content-font'>
                    {t('services.area2.details')}
                  </p>
                </div>
              </div>

              <p className='text-gray-700 content-font'>
                {t('services.item1-content2')}
              </p>
            </div>

            {/* Service 2 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Fuel className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>{t('services.item2-title')}</h3>
              </div>

              <p className='text-gray-700 content-font'>
                {t('services.item2-content')}
              </p>
            </div>

            {/* Service 3 */}
            <div className='bg-white p-6 shadow-md border border-gray-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                  <Warehouse className='h-6 w-6 text-blue-600' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 title-font'>{t('services.item3-title')}</h3>
              </div>

              <p className='text-gray-700 content-font'>
                {t('services.item3-content')}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceBanner