'use client'

const logos = Array.from({ length: 16 }, (_, i) => {
  const index = String(i + 1).padStart(2, '0')
  return `/partners/img${index}.png`
})

export default function StaticLogoGrid() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full rounded-4xl border border-gray-400 bg-white py-6 px-8">
        <div className="grid grid-cols-8 gap-4 place-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center"
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
