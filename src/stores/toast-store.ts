import { create } from 'zustand'
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastStore {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  clearToasts: () => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      id,
      duration: 5000, // Default 5 seconds
      ...toast,
    }
    
    set((state) => ({
      toasts: [...state.toasts, newToast]
    }))

    // Auto remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id)
        }))
      }, newToast.duration)
    }
  },
  
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter((toast) => toast.id !== id)
  })),
  
  clearToasts: () => set({ toasts: [] })
}))

// Helper hook for easier toast usage
export const useToast = () => {
  const { addToast, removeToast, clearToasts } = useToastStore()

  const toast = {
    success: (title: string, message?: string, action?: Toast['action']) => 
      addToast({ type: 'success', title, message, action }),
    
    error: (title: string, message?: string, action?: Toast['action']) => 
      addToast({ type: 'error', title, message, action, duration: 0 }), // Don't auto-dismiss errors
    
    warning: (title: string, message?: string, action?: Toast['action']) => 
      addToast({ type: 'warning', title, message, action }),
    
    info: (title: string, message?: string, action?: Toast['action']) => 
      addToast({ type: 'info', title, message, action }),

    custom: (toast: Omit<Toast, 'id'>) => addToast(toast)
  }

  return {
    toast,
    removeToast,
    clearToasts
  }
}

// Toast icons mapping
export const toastIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info
} as const

// Toast styles mapping
export const toastStyles = {
  success: {
    border: 'border-green-500/20',
    bg: 'bg-green-950/50',
    icon: 'text-green-400',
    title: 'text-green-200',
    message: 'text-green-300'
  },
  error: {
    border: 'border-red-500/20',
    bg: 'bg-red-950/50',
    icon: 'text-red-400',
    title: 'text-red-200',
    message: 'text-red-300'
  },
  warning: {
    border: 'border-yellow-500/20',
    bg: 'bg-yellow-950/50',
    icon: 'text-yellow-400',
    title: 'text-yellow-200',
    message: 'text-yellow-300'
  },
  info: {
    border: 'border-blue-500/20',
    bg: 'bg-blue-950/50',
    icon: 'text-blue-400',
    title: 'text-blue-200',
    message: 'text-blue-300'
  }
} as const
