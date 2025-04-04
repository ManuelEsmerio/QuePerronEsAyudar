import React from 'react'
import OptimizedImage from './OptimizedImage'

const ParallaxBackground = () => (
  <div className="absolute inset-0 bg-fixed bg-cover bg-center z-0">
    <OptimizedImage
      src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt="Fondo de adopciones"
      className="absolute inset-0 w-full h-full"
    />
    <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
  </div>
)

export default ParallaxBackground