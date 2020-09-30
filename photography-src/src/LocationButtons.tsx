import React from 'react'

const LocationButtons: React.FC<{ horizontal?: boolean }> = ({ children, horizontal }) => {
  return (
    <div className="article-wrapper">
      <article className={horizontal ? `horizontal` : `vertical`}>
        {children}
      </article>
    </div>
  )
}

export default LocationButtons