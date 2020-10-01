import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

const sizes = ["small", "medium", "large"]

const Background: React.FC<{ src: string }> = ({ src }) => {
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
        className="background" style={{ backgroundImage: `url("${src}")` }}
      />
    </AnimatePresence>,
    document.querySelector("#bg")
  )
}


export default Background