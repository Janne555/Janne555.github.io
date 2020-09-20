import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { BackgroundContext } from './index'

const Picture: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  const { setBackgroundSrc } = useContext(BackgroundContext)
  const cb: IntersectionObserverCallback = useCallback(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      setBackgroundSrc(src)
    }
  }, [])
  const observerRef = useRef(new IntersectionObserver(cb, { root: document.body, threshold: 1.0 }))
  const ref = useRef<HTMLPictureElement>(null)

  useEffect(() => {
    observerRef.current.observe(ref.current)
  }, [])

  return (
    <picture ref={ref}>
      <img src={src} alt={alt} />
    </picture>
  )
}

export default Picture