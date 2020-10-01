import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useWindowSize } from './utils'

const sizes = ["small", "medium", "large"]

const Background: React.FC<{ src: Record<'small' | 'large' | 'medium', string> }> = ({ src }) => {
  const size = useWindowSize()

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        key={src.small}
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
          backgroundImage: `url(${size.width > 500
            ? size.width > 1000
              ? src.large.replace("large", "small")
              : src.medium.replace("medium", "small")
            : src.small
            })`
        }}
      />
    </AnimatePresence>,
    document.querySelector("#bg")
  )
}


export default Background