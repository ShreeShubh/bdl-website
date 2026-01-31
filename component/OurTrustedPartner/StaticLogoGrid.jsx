'use client'

const logos = Array.from({ length: 16 }, (_, i) => {
  const index = String(i + 1).padStart(2, '0')
  return `/partners/img${index}.png`
})

export default function StaticLogoGrid() {
  return (
    <div className="w-full">
      <div className="w-full rounded-4xl border border-gray-400 bg-white py-6 sm:py-8 px-4 sm:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 place-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-transform hover:scale-105"
            >
              <img
                src={logo}
                alt={`partner-${i}`}
                className="max-w-[85%] max-h-[85%] object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
