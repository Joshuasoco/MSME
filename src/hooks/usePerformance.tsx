import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    // Observe paint metrics
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics((prev) => ({ ...prev, fcp: entry.startTime }))
        }
      }
    })
    paintObserver.observe({ entryTypes: ['paint'] })

    // Observe largest contentful paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      setMetrics((prev) => ({ ...prev, lcp: lastEntry.renderTime || lastEntry.loadTime }))
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // Observe first input delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any) {
        setMetrics((prev) => ({ ...prev, fid: entry.processingStart - entry.startTime }))
      }
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Observe cumulative layout shift
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          setMetrics((prev) => ({ ...prev, cls: clsValue }))
        }
      }
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Get navigation timing
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0]
      setMetrics((prev) => ({ ...prev, ttfb: navEntry.responseStart }))
    }

    return () => {
      paintObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  return metrics
}

// Log performance metrics (for development)
export const logPerformance = (metrics: PerformanceMetrics) => {
  if (import.meta.env.DEV) {
    console.group('⚡ Performance Metrics')
    if (metrics.fcp) console.log(`FCP: ${metrics.fcp.toFixed(2)}ms`)
    if (metrics.lcp) console.log(`LCP: ${metrics.lcp.toFixed(2)}ms`)
    if (metrics.fid) console.log(`FID: ${metrics.fid.toFixed(2)}ms`)
    if (metrics.cls) console.log(`CLS: ${metrics.cls.toFixed(4)}`)
    if (metrics.ttfb) console.log(`TTFB: ${metrics.ttfb.toFixed(2)}ms`)
    console.groupEnd()
  }
}
