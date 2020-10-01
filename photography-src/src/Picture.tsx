import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { BackgroundContext } from './index'

const Picture: React.FC<{ src: Record<'small' | 'large' | 'medium', string>, alt: string }> = ({ src, alt }) => {
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
      <source srcSet={src.large.replace("large", "small")} media="(min-width: 1000px)" />
      <source srcSet={src.medium.replace("medium", "small")} media="(min-width: 500px)" />
      <img src={src.small} alt={alt} />
    </picture>
  )
}

export default Picture