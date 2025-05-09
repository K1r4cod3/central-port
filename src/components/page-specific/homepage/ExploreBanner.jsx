import React from 'react'
import './ExploreBanner.css'
import pic5 from '../../../assets/5.jpg'
import pic6 from '../../../assets/6.jpg'
import { useTranslation } from 'react-i18next'

const ExploreBanner = () => {
  const { t } = useTranslation('homepage')
  return (
    <div className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 - Text Only - Moved to top on mobile */}
          <div className="group relative overflow-hidden rounded-lg cursor-pointer p-4 md:p-6 flex flex-col justify-center h-auto md:h-[400px] order-first md:order-last">
            <h3 className="text-black text-lg md:text-xl font-bold mb-4 leading-relaxed title-font">
              {t('explore-banner.explore-banner-title')}
            </h3>
            <ul className="text-black space-y-3 content-font">
              <li className="flex items-center">
                <span className="text-base md:text-lg">
                  {t('explore-banner.explore-banner-content1')}
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-base md:text-lg">
                  {t('explore-banner.explore-banner-content2')}
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-lg cursor-pointer">
            <img
              src={pic5 || "/placeholder.svg"}
              alt="Working and learning"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
              <div className="absolute bottom-0 p-6">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 title-font">
                  {t('explore-banner.explore-banner-item1')}
                </h2>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-lg cursor-pointer">
            <img
              src={pic6 || "/placeholder.svg"}
              alt="To do in the port"
              className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
              <div className="absolute bottom-0 p-6">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 title-font">
                  {t('explore-banner.explore-banner-item2')}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreBanner