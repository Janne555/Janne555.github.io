import React from 'react'

const Article = React.forwardRef<HTMLDivElement, { horizontal?: boolean, children: React.ReactNode }>(({ children, horizontal }, ref) => {
  return (
    <div ref={ref} className="article-wrapper">
      <article className={horizontal ? `horizontal` : `vertical`}>
        {children}
      </article>
    </div>
  )
})

export default Article