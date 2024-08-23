import { motion } from 'framer-motion'
import React from 'react'

const AppLogo = () => {
  return (
    <div>
      <motion.svg
        width="full"
        height="30"
        viewBox="0 0 200 200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-label="GenUAI Logo - AI Generating UI"
      >
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C27B0" />
            <stop offset="100%" stopColor="#673AB7" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="200" height="200" rx="40" fill="url(#purpleGradient)" />

        {/* AI 'beam' */}
        <motion.path
          d="M 100 40 L 40 160 L 160 160 Z"
          fill="rgba(255,255,255,0.1)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* UI Elements */}
        {/* Header */}
        <motion.rect
          x="50"
          y="60"
          width="100"
          height="20"
          rx="10"
          fill="white"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Sidebar */}
        <motion.rect
          x="50"
          y="90"
          width="30"
          height="70"
          rx="5"
          fill="white"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        {/* Content blocks */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={`block-${i}`}
            x="90"
            y={90 + i * 25}
            width="60"
            height="15"
            rx="7.5"
            fill="white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.2 }}
          />
        ))}

        {/* Animated 'pixels' */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.circle
            key={`pixel-${i}`}
            cx={40 + Math.random() * 120}
            cy={40 + Math.random() * 120}
            r="2"
            fill="white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 1, 0], y: 20 }}
            transition={{
              duration: 1,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </motion.svg>
    </div>
  )
}

export default AppLogo
