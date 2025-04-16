import React from 'react'
import worldMap from '../../../assets/map.jpg'
import { useTranslation } from 'react-i18next'
const ContentBanner = () => {
  const { t } = useTranslation('technical-information')
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

        {/* Anchoring Areas */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Area 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">{t('anchoring-areas.area1.title')}</h2>
              <ul className="space-y-3 content-font text-gray-700">
                <li><span className="font-semibold">{t('anchoring-areas.area1.area')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.area1.depth')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.area1.suitable')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.area1.vhf')}</span></li>
                <li className="space-y-2">
                  <span className="font-semibold block">{t('anchoring-areas.area1.coordinates.title')}</span>
                  <ul className="pl-4 space-y-1">
                    <li>{t('anchoring-areas.area1.coordinates.point1')}</li>
                    <li>{t('anchoring-areas.area1.coordinates.point2')}</li>
                    <li>{t('anchoring-areas.area1.coordinates.point3')}</li>
                    <li>{t('anchoring-areas.area1.coordinates.point4')}</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Area 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">{t('anchoring-areas.area2.title')}</h2>
              <ul className="space-y-3 content-font text-gray-700">
                <li><span className="font-semibold">{t('anchoring-areas.area2.area')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.area2.depth')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.area2.suitable')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.area2.vhf')}</span></li>
                <li className="space-y-2">
                  <span className="font-semibold block">{t('anchoring-areas.area2.coordinates.title')}</span>
                  <ul className="pl-4 space-y-1">
                    <li>{t('anchoring-areas.area2.coordinates.point1')}</li>
                    <li>{t('anchoring-areas.area2.coordinates.point2')}</li>
                    <li>{t('anchoring-areas.area2.coordinates.point3')}</li>
                    <li>{t('anchoring-areas.area2.coordinates.point4')}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">{t('map.title')}</h2>
          <p className="text-gray-700 mb-6 content-font">
            {t('map.description')}
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={worldMap} alt="Bản đồ khu vực neo đậu" className="w-full h-auto" />
          </div>
        </section>

        {/* Additional Technical Information */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">{t('additional-info.title')}</h2>
          <ul className="space-y-3 content-font text-gray-700 list-disc pl-5">
            <li>{t('additional-info.items.item1')}</li>
            <li>{t('additional-info.items.item2')}</li>
            <li>{t('additional-info.items.item3')}</li>
            <li>{t('additional-info.items.item4')}</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default ContentBanner