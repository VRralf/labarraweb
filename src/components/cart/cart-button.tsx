'use client'

import { ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function CartButton() {
  const { totalItems, openCart } = useCartStore()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={openCart}
      className="relative text-white hover:text-purple-400 transition-colors"
    >
      <ShoppingBag className="h-5 w-5" />
      {totalItems > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-purple-600 hover:bg-purple-600"
        >
          {totalItems > 9 ? '9+' : totalItems}
        </Badge>
      )}
    </Button>
  )
}
