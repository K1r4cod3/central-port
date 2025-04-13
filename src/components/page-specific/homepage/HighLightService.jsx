import "./HighLightService.css"
import { useTranslation } from 'react-i18next'
import service1 from "../../../assets/homepage/1.png"
import service2 from "../../../assets/homepage/2.png"
import service3 from "../../../assets/homepage/3.jpg"
import service4 from "../../../assets/homepage/4.jpg"

const HighlightService = () => {
  const { t } = useTranslation('homepage')
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1300px]">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00438c] leading-tight title-font">
              {t('hightlight-service.highlight-service-title')}
            </h2>
          </div>

          {/* Right Column - Description */}
          <div className="border-l-0 md:border-l-2 md:border-gray-300 md:pl-8">
            <p className="text-gray-600 content-font text-base md:text-lg">
              {t('hightlight-service.highlight-service-desc')}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Service 1 - Vận tải */}
          <div className="group relative overflow-hidden rounded-lg shadow-md">
            <img
              src={service1 || "/placeholder.svg?height=400&width=600"}
              alt="Dịch vụ vận tải"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
              <h3 className="text-lg font-bold text-[#00438c] title-font">
                {t('hightlight-service.highlight-service1')}
              </h3>
            </div>
          </div>

          {/* Service 2 - Giám định */}
          <div className="group relative overflow-hidden rounded-lg shadow-md">
            <img
              src={service2 || "/placeholder.svg?height=400&width=600"}
              alt="Dịch vụ giám định"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
              <h3 className="text-lg font-bold text-[#00438c] title-font">
                {t('hightlight-service.highlight-service2')}
              </h3>
            </div>
          </div>

          {/* Service 3 - Neo đậu và kho bãi */}
          <div className="group relative overflow-hidden rounded-lg shadow-md">
            <img
              src={service3 || "/placeholder.svg?height=400&width=600"}
              alt="Dịch vụ neo đậu và kho bãi"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
              <h3 className="text-lg font-bold text-[#00438c] title-font">
                {t('hightlight-service.highlight-service3')}
              </h3>
            </div>
          </div>

          {/* Service 4 - An toàn và bảo vệ môi trường */}
          <div className="group relative overflow-hidden rounded-lg shadow-md">
            <img
              src={service4 || "/placeholder.svg?height=400&width=600"}
              alt="Dịch vụ an toàn và bảo vệ môi trường"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
              <h3 className="text-lg font-bold text-[#00438c] title-font">
                {t('hightlight-service.highlight-service4')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightService
