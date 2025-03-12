"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

interface Slide {
  title: string
  image: string
}

const slides: Slide[] = [
  {
    title: "Minecraft",
    image:
      "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
  },
  {
    title: "Assassin's Creed Valhalla",
    image: "https://xboxpower-wp.s3.amazonaws.com/wp-content/uploads/2020/11/Assassins-Creed-Valhalla-analise-1.png",
  },
  {
    title: "ARK: Survival Evolved",
    image:
      "https://cdn1.epicgames.com/ark/offer/EGS_ARKSurvivalEvolved_StudioWildcard_S1-2560x1440-c316afb7c33a9dfb892eef6b99169e43.jpg",
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full mx-auto h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={carouselRef} className="relative w-full h-full flex items-center justify-center">
          {slides.map((slide, index) => {
            let position = index - current

            if (position < -1) position += slides.length
            if (position > 1) position -= slides.length

            let scale = 0.7
            let opacity = 0.6
            let zIndex = 0
            const xPosition = position * 150

            if (position === 0) {
              scale = 1
              opacity = 1
              zIndex = 10
            }

            return (
              <motion.div
                key={slide.title}
                className="absolute w-[180px] sm:w-[220px] md:w-[250px] h-[200px] sm:h-[240px] md:h-[280px]"
                style={{ zIndex }}
                animate={{
                  x: xPosition,
                  scale,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-white font-bold text-center text-xl tracking-widest">{slide.title}</h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

