import React from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useWindowSize } from './utils'

const sizes = [640, 768, 1024, 1366, 1600, 1920]

const closest = (width: number) => sizes.reduce((curr, prev) => Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev)

const Background: React.FC<{ src: string }> = ({ src }) => {
  const { width } = useWindowSize()

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        key={src}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        transition={{ duration: .5 }}
        className="background"
        style={{
          backgroundImage: `url(/img/${closest(width)}-${src}.webp)`
        }}
      />
    </AnimatePresence>,
    document.querySelector("#bg")
  )
}


export default Background