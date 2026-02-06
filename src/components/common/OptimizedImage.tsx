import { useState, useEffect } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallbackSrc?: string
  blurDataURL?: string
  priority?: boolean
}

export const OptimizedImage = ({
  src,
  alt,
  fallbackSrc = '/placeholder.png',
  blurDataURL,
  priority = false,
  className,
  ...props
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(blurDataURL || src)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Preload image if priority
    if (priority) {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setImgSrc(src)
        setIsLoading(false)
      }
      img.onerror = () => {
        setImgSrc(fallbackSrc)
        setIsLoading(false)
      }
    }
  }, [src, fallbackSrc, priority])

  const handleLoad = () => {
    if (!priority) {
      setIsLoading(false)
    }
  }

  const handleError = () => {
    setImgSrc(fallbackSrc)
    setIsLoading(false)
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        src={imgSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          'transition-all duration-500',
          isLoading && 'blur-sm scale-105',
          !isLoading && 'blur-0 scale-100',
          className
        )}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  )
}

export default OptimizedImage
