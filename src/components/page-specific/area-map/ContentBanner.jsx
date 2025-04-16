import React from 'react'
import worldMap from '../../../assets/map.jpg'
import anchorageMap from '../../../assets/anchorage-map.png'
import { useTranslation } from 'react-i18next'
const ContentBanner = () => {
  const { t } = useTranslation('area-map')
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Introduction Section */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 title-font">{t('introduction.title')}</h1>
          <p className="text-gray-700 leading-relaxed content-font">
            {t('introduction.content')}
          </p>
        </section>

        {/* Port Layout Map Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">{t('support-map.title')}</h2>
          <p className="text-gray-700 mb-6 content-font">
            {t('support-map.desc')}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4 title-font">{t('support-map.anchorage-areas.title')}</h3>
              <ul className="space-y-4 content-font text-gray-700 list-disc pl-5">
                <li>
                  <strong>{t('support-map.anchorage-areas.anchorage-area-no1.title')}</strong>{t('support-map.anchorage-areas.anchorage-area-no1.content')}
                </li>
                <li>
                  <strong>{t('support-map.anchorage-areas.anchorage-area-no2.title')}</strong>{t('support-map.anchorage-areas.anchorage-area-no2.content')}
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4 title-font">{t('support-map.other-key-area.title')}</h3>
              <ul className="space-y-4 content-font text-gray-700 list-disc pl-5">
                <li>
                  <strong>{t('support-map.other-key-area.item1.title')}</strong>{t('support-map.other-key-area.item1.content')}
                </li>
                <li>
                  <strong>{t('support-map.other-key-area.item2.title')}</strong>{t('support-map.other-key-area.item2.content')}
                </li>
                <li>
                  <strong>{t('support-map.other-key-area.item3.title')}</strong>{t('support-map.other-key-area.item3.content')}
                </li>
                <li>
                  <strong>{t('support-map.other-key-area.item4.title')}</strong>{t('support-map.other-key-area.item4.content')}
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img src={anchorageMap} alt="Bản đồ chi tiết khu vực cảng" className="w-full h-auto" />
          </div>
        </section>

        {/* Strategic Location Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">{t('strat-location.title')}</h2>
          <p className="text-gray-700 mb-6 content-font">
            {t('strat-location.content')}
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img src={worldMap} alt="Bản đồ vị trí chiến lược" className="w-full h-auto" />
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">{t('key-feature.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-feature.item1.title')}</strong>{t('key-feature.item1.content')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-feature.item2.title')}</strong>{t('key-feature.item2.content')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-feature.item3.title')}</strong>{t('key-feature.item3.content')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-feature.item4.title')}</strong>{t('key-feature.item4.content')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContentBanner
