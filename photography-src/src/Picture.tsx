import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { BackgroundContext } from './index'

const sizes = [640, 768, 1024, 1366, 1600, 1920]

const Picture: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  const { setBackgroundSrc } = useContext(BackgroundContext)
  const cb: IntersectionObserverCallback = useCallback(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      window.requestAnimationFrame(() => setBackgroundSrc(src))
    }
  }, [])
  const observerRef = useRef(new IntersectionObserver(cb, { root: document.body, threshold: 1.0 }))
  const ref = useRef<HTMLPictureElement>(null)

  useEffect(() => {
    observerRef.current.observe(ref.current)
  }, [])

  return (
    <picture ref={ref}>
      {
        sizes.map(size => <source key={size} srcSet={`/img/${size}-${src}.webp`} media={`(max-width: ${size}px)`} />)
      }
      <img src={`/img/640-${src}.webp`} alt={alt} />
    </picture>
  )
}

export default Picture