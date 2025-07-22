import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TicketType } from '@/types/entities'

export interface CartItem {
  id: string
  eventId: string
  eventTitle: string
  eventDate: Date
  eventSlug: string
  ticket: TicketType
  quantity: number
  unitPrice: number
  totalPrice: number
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalAmount: number
  isOpen: boolean
}

interface CartActions {
  addItem: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

type CartStore = CartState & CartActions

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0)
  return { totalItems, totalAmount }
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      totalItems: 0,
      totalAmount: 0,
      isOpen: false,

      // Actions
      addItem: (newItem) => {
        const items = get().items
        const existingItemIndex = items.findIndex(
          item => item.eventId === newItem.eventId && item.ticket.id === newItem.ticket.id
        )

        let updatedItems: CartItem[]

        if (existingItemIndex >= 0) {
          // Item already exists, update quantity
          const existingItem = items[existingItemIndex]
          const newQuantity = existingItem.quantity + newItem.quantity
          const maxAllowed = newItem.ticket.maxPerPurchase || 10

          if (newQuantity > maxAllowed) {
            // Don't exceed max allowed per purchase
            return
          }

          updatedItems = items.map((item, index) =>
            index === existingItemIndex
              ? {
                  ...item,
                  quantity: newQuantity,
                  totalPrice: newQuantity * item.unitPrice
                }
              : item
          )
        } else {
          // New item
          const cartItem: CartItem = {
            id: `${newItem.eventId}-${newItem.ticket.id}-${Date.now()}`,
            ...newItem,
            totalPrice: newItem.quantity * newItem.unitPrice
          }
          updatedItems = [...items, cartItem]
        }

        const { totalItems, totalAmount } = calculateTotals(updatedItems)

        set({
          items: updatedItems,
          totalItems,
          totalAmount
        })
      },

      removeItem: (itemId) => {
        const items = get().items.filter(item => item.id !== itemId)
        const { totalItems, totalAmount } = calculateTotals(items)

        set({
          items,
          totalItems,
          totalAmount
        })
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId)
          return
        }

        const items = get().items.map(item => {
          if (item.id === itemId) {
            const maxAllowed = item.ticket.maxPerPurchase || 10
            const finalQuantity = Math.min(quantity, maxAllowed)
            
            return {
              ...item,
              quantity: finalQuantity,
              totalPrice: finalQuantity * item.unitPrice
            }
          }
          return item
        })

        const { totalItems, totalAmount } = calculateTotals(items)

        set({
          items,
          totalItems,
          totalAmount
        })
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalAmount: 0
        })
      },

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set(state => ({ isOpen: !state.isOpen }))
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount
      })
    }
  )
)
