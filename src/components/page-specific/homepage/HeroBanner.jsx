import "./HeroBanner.css"
import { useTranslation } from 'react-i18next'

const HeroBanner = () => {
  const { t } = useTranslation('homepage')
  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
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
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Parent container - centered vertically and horizontally */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Content container - fixed width with responsive margins */}
        <div className="w-[90%] sm:w-[85%] 2xl:w-[70%] h-1/3 mx-auto">
          {/* Grid layout for title and search */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {/* Title cell with top border */}
            <div className="border-t-4 border-white flex items-center pt-5 md:pt-1">
              <h1 className="text-white font-bold uppercase leading-tight text-4xl md:text-5xl lg:text-6xl w-full">
                {t('hero-banner.title')}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
