import { useEffect, useState } from 'react'

interface NetworkInformation extends EventTarget {
  effectiveType?: 'slow-2g' | '2g' | '3g' | '4g'
  saveData?: boolean
  downlink?: number
  rtt?: number
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation
}

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true)
  const [connectionType, setConnectionType] = useState<string>('unknown')
  const [saveData, setSaveData] = useState(false)

  useEffect(() => {
    // Check online/offline status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Get connection info if available
    const nav = navigator as NavigatorWithConnection
    const connection = nav.connection

    if (connection) {
      setConnectionType(connection.effectiveType || 'unknown')
      setSaveData(connection.saveData || false)

      const handleConnectionChange = () => {
        setConnectionType(connection.effectiveType || 'unknown')
        setSaveData(connection.saveData || false)
      }

      connection.addEventListener('change', handleConnectionChange)

      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
        connection.removeEventListener('change', handleConnectionChange)
      }
    }

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return {
    isOnline,
    connectionType,
    saveData,
    isSlowConnection: connectionType === 'slow-2g' || connectionType === '2g',
  }
}
