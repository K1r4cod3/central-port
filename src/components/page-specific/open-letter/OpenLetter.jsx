import React from 'react'
import logo from '../../../assets/logo1.png'
import { useTranslation } from 'react-i18next'

const OpenLetter = () => {
  const { t } = useTranslation('open-letter')
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-10">
            <img
              src={logo}
              alt="Cảng Nước Sâu Miền Trung Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-blue-900 uppercase">{t('header.title')}</h1>
            <p className="text-gray-700">{t('header.address')}</p>
            <p className="text-gray-700">{t('header.contact')}</p>
          </div>
        </div>

        {/* Date */}
        <div className="text-right mb-8">
          <p className="text-gray-700">{t('date')}</p>
        </div>

        {/* Letter Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 uppercase">
            {t('title')}
          </h2>
        </div>

        {/* Letter Content */}
        <div className="space-y-6 text-gray-800">
          <p className="font-semibold">{t('greeting')}</p>

          <p className="text-justify">
            {t('content.intro')}
          </p>

          <p className="text-justify">
            {t('content.services')}
          </p>

          <p className="text-justify">
            {t('content.benefits')}
          </p>

          <p className="text-justify">
            {t('content.closing')}
          </p>

          <div className="pl-4">
            <p>+ 024.9999.9889</p>
            <p>+ 023.6999.9889</p>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-12">
          <p className="font-semibold">{t('signature.regards')}</p>
          <p className="mt-8 font-bold">{t('signature.position')}</p>
          <div className="h-20"></div> {/* Space for signature */}
        </div>
      </div>
    </div>
  )
}

export default OpenLetter