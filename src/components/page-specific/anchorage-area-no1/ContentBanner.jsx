import React from 'react'
import worldMap from '../../../assets/map.jpg'
import area1 from '../../../assets/area1.png'
import { useTranslation } from 'react-i18next'
const ContentBanner = () => {
  const { t } = useTranslation('anchorage-area-no1')
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

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">{t('anchoring-areas.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-3 content-font text-gray-700">
                <li><span className="font-semibold">{t('anchoring-areas.item1.content1')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.item1.content2')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.item1.content3')}</span></li>
                <li><span className="font-semibold">{t('anchoring-areas.item1.content4')}</span></li>
              </ul>
            </div>
            
            {/* Coordinates Table */}
            <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
              <h3 className="text-xl font-bold text-blue-900 mb-4 title-font">{t('anchoring-areas.item2.title')}</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Long (E)</th>
                      <th className="px-4 py-2 border">Lat (N)</th>
                    </tr>
                  </thead>
                  <tbody className="content-font">
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.1</td>
                      <td className="px-4 py-2 border">105°52'00.1"</td>
                      <td className="px-4 py-2 border">19°22'12.6"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.2</td>
                      <td className="px-4 py-2 border">105°53'15.6"</td>
                      <td className="px-4 py-2 border">19°23'23.5"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.3</td>
                      <td className="px-4 py-2 border">105°53'34.3"</td>
                      <td className="px-4 py-2 border">19°23'05.6"</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-2 border">DVNS.4</td>
                      <td className="px-4 py-2 border">105°52'18.7"</td>
                      <td className="px-4 py-2 border">19°21'54.7"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 title-font">{t('map.title')}</h2>
          <p className="text-gray-700 mb-6 content-font">
            {t('map.content')}
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={worldMap} alt="Bản đồ khu vực neo đậu" className="w-full h-auto" />
          </div>
        </section>

        {/* Key Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-blue-900 mb-6 title-font">{t('key-benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-benefits.item1.title')}</strong> {t('key-benefits.item1.content')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-benefits.item2.title')}</strong> {t('key-benefits.item2.content')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul className="space-y-4 content-font text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-benefits.item3.title')}</strong> {t('key-benefits.item3.content')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>{t('key-benefits.item4.title')}</strong> {t('key-benefits.item4.content')}</span>
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