import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={cn(
        'relative w-14 h-8 rounded-full p-1 transition-colors duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2',
        'min-w-[44px] min-h-[44px] flex items-center justify-center',
        isDark ? 'bg-primary-blue' : 'bg-gray-300'
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      role="switch"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md"
        animate={{
          x: isDark ? 20 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-primary-blue" />
        ) : (
          <Sun className="w-4 h-4 text-gray-600" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default DarkModeToggle
