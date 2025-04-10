import "./HeroBanner.css"

const HeroBanner = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
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

      {/* Parent container - centered vertically and horizontally */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Content container - fixed width with responsive margins */}
        <div className="w-[90%] sm:w-[85%] md:w-[70%] h-1/3 mx-auto">
          {/* Grid layout for title and search */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {/* Title cell with top border */}
            <div className="border-t-4 border-white flex items-center pt-5 md:pt-1">
              <h1 className="text-white font-bold uppercase leading-tight text-3xl sm:text-4xl md:text-6xl w-full">
                cảng nước sâu miền trung
              </h1>
            </div>

            {/* Search cell with padding and margins */}
            <div className="flex items-center">
              <div className="bg-[#16b8f8] px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-8 w-full mx-2 sm:mx-4 md:mx-10">
                <h2 className="text-white title-font font-bold text-lg sm:text-xl md:text-2xl">
                  Chúng tôi có thể giúp gì cho bạn?
                </h2>
                <div className="relative mt-3 bg-white">
                  <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Tìm kiếm..."
                    className="w-full p-2 pr-[90px] placeholder:content-font placeholder:font-bold placeholder:text-sm sm:placeholder:text-base placeholder:text-gray-400 pl-3"
                  />
                  <button className="absolute right-0 top-0 h-full bg-yellow-300 px-3 sm:px-4 hover:text-white hover:bg-black transition duration-300 content-font text-sm sm:text-base">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
