'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useToastStore, toastIcons, toastStyles, Toast, useToast } from '@/stores/toast-store'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface ToastItemProps {
  toast: Toast
}

const ToastItem: React.FC<ToastItemProps> = ({ toast }) => {
  const { removeToast } = useToastStore()
  const Icon = toastIcons[toast.type]
  const styles = toastStyles[toast.type]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={cn(
        'relative w-full max-w-sm p-4 rounded-lg border backdrop-blur-sm shadow-lg',
        styles.border,
        styles.bg
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', styles.icon)} />
        
        <div className="flex-1 min-w-0">
          <h4 className={cn('font-semibold text-sm', styles.title)}>
            {toast.title}
          </h4>
          {toast.message && (
            <p className={cn('text-sm mt-1', styles.message)}>
              {toast.message}
            </p>
          )}
          {toast.action && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toast.action.onClick}
              className="mt-2 h-auto p-0 text-xs hover:bg-transparent hover:underline"
            >
              {toast.action.label}
            </Button>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeToast(toast.id)}
          className="h-auto p-1 text-gray-400 hover:text-white hover:bg-gray-800"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </motion.div>
  )
}

export const ToastContainer: React.FC = () => {
  const { toasts } = useToastStore()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Hook para usar dentro de componentes
export const useToastActions = () => {
  const { toast } = useToast()
  
  return {
    // Shortcuts específicos para el carrito
    showCartSuccess: (itemName: string, quantity: number = 1) => {
      toast.success(
        '¡Agregado al carrito!', 
        `${itemName}`,
        {
          label: 'Ver carrito',
          onClick: () => {
            // Importamos el carrito store dinámicamente
            import('@/stores/cart-store').then(({ useCartStore }) => {
              useCartStore.getState().openCart()
            })
          }
        }
      )
    },
    
    showCartError: (message: string = 'No se pudo agregar al carrito') => {
      toast.error('Error en el carrito', message)
    },
    
    showNetworkError: () => {
      toast.error(
        'Error de conexión', 
        'Verifica tu conexión a internet e intenta nuevamente',
        {
          label: 'Reintentar',
          onClick: () => window.location.reload()
        }
      )
    },

    // Acceso directo a todos los tipos
    ...toast
  }
}
