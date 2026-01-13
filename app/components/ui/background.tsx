'use client'

import { motion } from 'framer-motion'

export function NoiseBackground() {
  return (
    <>
      <svg style={{ position: 'fixed', width: 0, height: 0 }}>
        <filter id="noiseFilter">
            <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="6"
            stitchTiles="stitch"
            >
            <animate
                attributeName="baseFrequency"
                dur="120s"
                values="1.2;2.5;1.2"
                repeatCount="indefinite"
            />
            </feTurbulence>
        </filter>
      </svg>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          filter: 'url(#noiseFilter)',
          opacity: 0.15,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

    </>
  )
}