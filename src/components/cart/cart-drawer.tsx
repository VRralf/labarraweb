'use client'

import { useEffect } from 'react'
import { X, ShoppingBag, Minus, Plus, Trash2, Calendar } from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'

export function CartDrawer() {
  const { 
    items, 
    totalItems, 
    totalAmount, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    clearCart 
  } = useCartStore()

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  // Close cart when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 z-40 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className={`
        fixed inset-y-0 right-0 z-50 w-full max-w-md bg-gray-900 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-lg font-medium text-white flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Carrito ({totalItems})
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeCart}
              className="text-gray-400 hover:text-white p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="mx-auto h-12 w-12 text-gray-600" />
                <h3 className="mt-2 text-sm font-medium text-gray-300">
                  Tu carrito está vacío
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Agrega algunas entradas para continuar
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-800 rounded-lg p-4">
                    {/* Event Info */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-medium text-white line-clamp-2">
                        {item.eventTitle}
                      </h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-400 p-1 h-auto ml-2 flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Event Date */}
                    <div className="flex items-center text-xs text-gray-400 mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(item.eventDate)}
                    </div>

                    {/* Ticket Type */}
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.ticket.name}
                      </Badge>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">
                        <span className="font-medium">
                          {formatPrice(item.unitPrice)}
                        </span>
                        <span className="text-gray-500"> c/u</span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 p-0 bg-gray-700 border-gray-600 hover:bg-gray-600"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center text-white font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= (item.ticket.maxPerPurchase || 10)}
                          className="h-8 w-8 p-0 bg-gray-700 border-gray-600 hover:bg-gray-600"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Total Price for this item */}
                    <div className="mt-2 text-right">
                      <span className="text-lg font-bold text-purple-400">
                        {formatPrice(item.totalPrice)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-700 p-4 space-y-4">
              {/* Clear Cart Button */}
              <div className="text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-gray-400 hover:text-red-400 text-xs"
                >
                  Vaciar carrito
                </Button>
              </div>

              {/* Total */}
              <div className="flex justify-between text-lg font-medium text-white">
                <p>Total</p>
                <p className="text-xl font-bold text-purple-400">
                  {formatPrice(totalAmount)}
                </p>
              </div>

              {/* Checkout Button */}
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                size="lg"
              >
                Ir al Checkout
              </Button>

              {/* Continue Shopping */}
              <div className="text-center text-sm text-gray-500">
                <button
                  type="button"
                  className="font-medium text-purple-400 hover:text-purple-300"
                  onClick={closeCart}
                >
                  Continuar comprando →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
