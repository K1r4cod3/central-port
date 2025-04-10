import "./InfoBanner.css"

const InfoBanner = () => {
  return (
    <div className="mx-auto mb-[40px] sm:mb-[60px] md:mb-[90px] max-w-[1400px] bg-blue-100 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex items-center px-4 sm:px-6 md:px-0 py-8 sm:py-6 md:py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 px-4 sm:px-6 md:pr-[3.5rem] md:pl-[5rem] title-font">
            Central Deepwater Port Welcomes Visitors
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-5 md:mb-6 px-4 sm:px-6 md:pr-[3.5rem] md:pl-[5rem] content-font text-sm sm:text-base">
            The Central Deepwater Port – your premier maritime hub in Central Vietnam – will open its doors to the
            public on Saturday, 29 March 2025. Visitors can look forward to a day of discovery and excitement, including
            tours of the anchorage areas, boat trips, and insights into the port's modern operations.
          </p>
          <div className="inline-block px-4 sm:px-6 md:pr-[3.5rem] md:pl-[5rem]">
            <a
              href="#"
              className="bg-blue-500 text-white font-semibold py-2 px-4 sm:px-6 rounded hover:bg-blue-600 transition text-sm sm:text-base"
            >
              Tìm Hiểu Thêm
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 sm:py-6 md:py-[1.875rem] px-4 sm:px-6 md:pr-[3.5rem]">
          <div className="w-full h-0 pb-[56.25%] relative">
            <iframe
              src="https://www.youtube.com/embed/Ex_0_UNIyO4"
              frameBorder="0"
              className="rounded-lg shadow-lg absolute top-0 left-0 w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBanner
