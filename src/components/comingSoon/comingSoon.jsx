import React from 'react'
import { motion,useAnimation,AnimatePresence } from 'framer-motion'
import {useState,useEffect} from 'react'

const ComingSoon = () => {
  const [text, setText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const controls = useAnimation()

  const fullText = "Coming Soon"

  useEffect(() => {
    const animateText = async () => {
      // Type forward
      for (let i = 0; i <= fullText.length; i++) {
        setText(fullText.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 150))
      }
      await new Promise(resolve => setTimeout(resolve, 500))

      // Type backward
      for (let i = fullText.length; i >= 0; i--) {
        setText(fullText.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      await new Promise(resolve => setTimeout(resolve, 300))

      // Show full text
      setText(fullText)
      setIsComplete(true)

      // Start flickering
      await controls.start({
        opacity: [1, 0.5, 1, 0.5, 1],
        transition: { duration: 0.5, times: [0, 0.25, 0.5, 0.75, 1] }
      })
    }

    animateText()
  }, [])
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-white"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 100% 80%)',
          zIndex: 0
        }}
      />

      
      <div className="relative z-10 w-full flex justify-between items-center p-8">
        <motion.img
          src="src\componenets\comingSoon\wings.png"
          alt="Wings Logo"
          className="w-[220px] h-[120px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
          }}
        />
        <motion.div
          className="bg-white p-2 rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 20px rgba(0, 0, 8, 0.3)'
          }}
        >
          <img
            src="src\componenets\comingSoon\ccube.png"
            alt="C Cube Logo"
            className="w-[120px] h-[120px] "
          />
        </motion.div>
      </div>

      
      <div className="relative z-10 h-[calc(100vh-160px)] flex flex-col justify-center items-start pl-16">
        <motion.h2
          className="text-2xl font-light mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We&apos;re almost there
        </motion.h2>
        <motion.h1
          className="text-[120px] font-bold leading-tight mb-8 text-white h-[288px] font-jaro"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <AnimatePresence>
            {isComplete ? (
              <motion.span
                key="complete"
                initial={{ opacity: 1 }}
                animate={controls}
                exit={{ opacity: 0 }}
              >
                {fullText}
              </motion.span>
            ) : (
              <motion.span
                key="typing"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {text}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.h1>
        <motion.div
          className="text-xl max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-500 font-semibold">
            WINGS 2025 WEBSITE
          </span>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
        style={{ zIndex: 10 }}
      />
    </div>
  )
}

export default ComingSoon
