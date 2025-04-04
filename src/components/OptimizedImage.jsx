import React from 'react'

const OptimizedImage = ({ src, alt, className, style }) => (
  <div className={className} style={style}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover"
    />
  </div>
)

export default OptimizedImage