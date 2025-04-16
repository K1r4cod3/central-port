import React from 'react'
import { ArrowRight } from 'lucide-react'
import image from '../../../assets/transportation-services/service.jpg'
import { useTranslation } from 'react-i18next'

const ServiceBanner = () => {
  const { t } = useTranslation('transportation-services')
  return (
    <div className='my-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-3/4 mx-auto'>
            <div className="bg-blue-500 text-white p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase title-font">{t('service.title')}</h2>
                <p className="mb-8 text-blue-50 content-font text-2xl">
                {t('service.content')}
                </p>
            </div>

            {/* Right side - Image */}
            <div className="relative min-h-[400px]">
                <img
                src={image}
                alt="Ship"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default ServiceBanner