import "./HeroBanner.css"
import { Play, Warehouse, Ship, Truck, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import React from "react"

const HeroBanner = () => {
  const { t } = useTranslation('homepage')
  return (
    <div className="relative h-[600px] sm:h-[650px] md:h-[700px] overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          className="absolute w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/q5UWVgxt3gk?autoplay=1&mute=1&loop=1&controls=0&playlist=q5UWVgxt3gk"
          title="Port Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Main Content */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full py-8">
          {/* Top Content - Title, Subtitle, and Buttons */}
          <div className="mt-16 md:mt-18 md:border-r-6 md:border-white md:border-box">
            <div className="max-w-4xl">
              <h1 className="text-white font-bold title-font uppercase text-3xl sm:text-5xl md:text-5xl leading-tight mb-4">
                {t('hero-banner.title')}
              </h1>
            </div>
          </div>

          <div className="">
            <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl mb-12 sm:mb-8">
              {t('hero-banner.content')}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-3 px-6 transition-colors duration-300 max-sm:w-full max-sm:text-center"
            >
              {t('hero-banner.button1')}
            </a>
            <Link to="/about-us" className="bg-white hover:bg-blue-800 text-black hover:text-white font-bold py-3 px-6 transition-colors duration-300 max-sm:w-full max-sm:text-center">
              {t('hero-banner.button2')}
            </Link>
          </div>
          
          {/* Bottom Content - Service Categories */}
          <div className="grid max-sm:hidden grid-cols-4 gap-1 w-fit sm:mt-10 md:mt-15 xl:mt-20">
            {/* Service 1 */}
            <Link to="/anchorage-and-warehousing-services" className="bg-[#00438c] text-white hover:bg-yellow-500 p-4 pl-6 flex flex-col justify-center lg:h-40 lg:w-50 hover:-translate-y-3 transition-all duration-300">
              <Warehouse className="w-8 h-8 mb-2" />
              <span className="font-bold md:text-lg">{t('hero-banner.service-bar.service1')}</span>
            </Link>

            {/* Service 2 */}
            <Link to="/cargo-handling-and-transshipment-services" className="bg-[#00438c] text-white hover:bg-yellow-500 p-4 pl-6 flex flex-col justify-center lg:h-40 lg:w-50 hover:-translate-y-3 transition-all duration-300">
              <Ship className="w-8 h-8 mb-2" />
              <span className="font-bold md:text-lg">{t('hero-banner.service-bar.service2')}</span>
            </Link>

            {/* Service 3 */}
            <Link to="/cargo-handling-and-transshipment-services" className="bg-[#00438c] text-white hover:bg-yellow-500 p-4 pl-6 flex flex-col justify-center lg:h-40 lg:w-50 hover:-translate-y-3 transition-all duration-300">
              <Truck className="w-8 h-8 mb-2" />
              <span className="font-bold md:text-lg">{t('hero-banner.service-bar.service3')}</span>
            </Link>

            {/* Service 4 */}
            <Link to="/safety-and-environmental-protection-services" className="bg-[#00438c] text-white hover:bg-yellow-500 p-4 pl-6 flex flex-col justify-center lg:h-40 lg:w-50 hover:-translate-y-3 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 mb-2" />
              <span className="font-bold md:text-lg">{t('hero-banner.service-bar.service4')}</span>
            </Link>
          </div>
        </div>

        {/* Video Presentation Button */}
        <div className="absolute bottom-32 right-8 md:right-30 flex items-center justify-center gap-4 max-xl:hidden">
          <a
            href="https://www.youtube.com/watch?v=Ex_0_UNIyO4"
            className="bg-yellow-500 hover:bg-blue-400 text-white rounded-full w-16 h-16 2xl:w-20 2xl:h-20 flex items-center justify-center transition duration-300"
          >
            <Play className="w-6 h-6" />
          </a>
          <span className="text-white text-xl 2xl:text-2xl block text-center font-bold">{t('hero-banner.video')}</span>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
