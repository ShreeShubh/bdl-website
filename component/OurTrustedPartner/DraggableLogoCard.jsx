'use client'

import { motion } from 'framer-motion'
import { useMemo, useRef } from 'react'

const logos = Array.from({ length: 16 }, (_, i) => {
  const index = String(i + 1).padStart(2, '0')
  return `/partners/img${index}.png`
})

export default function DraggableLogoCard() {
  const containerRef = useRef(null)

  const items = useMemo(
    () =>
      logos.map(() => ({
        x: Math.random() * 900,
        y: Math.random() * 200,
        rotate: Math.random() * 30 - 15,
      })),
    [],
  )

  return (
    <div className="w-full flex justify-center">
      <div
        ref={containerRef}
        className="relative w-full h-75 rounded-4xl border border-gray-400 bg-white overflow-hidden"
      >
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={containerRef}
            dragElastic={0.4}
            dragMomentum
            whileTap={{ scale: 1.05 }}
            className="absolute cursor-grab active:cursor-grabbing"
            style={{
              top: items[i].y,
              left: items[i].x,
              rotate: items[i].rotate,
            }}
          >
            <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src={logo}
                alt="partner"
                className="max-w-[85%] max-h-[85%] object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
