import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: "default" | "success" | "error" | "warning"
  duration?: number
  onClose: (id: string) => void
}

const variantStyles = {
  default: "bg-white border-gray-200",
  success: "bg-emerald-50 border-emerald-200 text-emerald-900",
  error: "bg-red-50 border-red-200 text-red-900",
  warning: "bg-amber-50 border-amber-200 text-amber-900",
}

const variantIcons = {
  default: "ℹ️",
  success: "✅",
  error: "❌",
  warning: "⚠️",
}

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  description,
  variant = "default",
  duration = 5000,
  onClose,
}) => {
  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => onClose(id), duration)
      return () => clearTimeout(timer)
    }
  }, [id, duration, onClose])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={cn(
        "pointer-events-auto w-full max-w-sm rounded-lg border-2 p-4 shadow-lg",
        variantStyles[variant]
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">{variantIcons[variant]}</span>
        <div className="flex-1">
          {title && <div className="font-semibold mb-1">{title}</div>}
          {description && <div className="text-sm opacity-90">{description}</div>}
        </div>
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 rounded-md p-1 hover:bg-black/5 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

export const ToastContainer: React.FC<{ toasts: ToastProps[] }> = ({ toasts }) => {
  return (
    <div
      className="fixed bottom-0 right-0 z-50 p-4 md:p-6 flex flex-col gap-2 pointer-events-none"
      aria-label="Notifications"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  )
}
