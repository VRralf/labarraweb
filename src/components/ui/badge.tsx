/**
 * Badge component for event categories, status indicators, and labels
 */

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        // Event categories
        reggaeton: 'bg-red-500/20 text-red-300 border border-red-500/30',
        electronica: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
        rock: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
        cumbia: 'bg-green-500/20 text-green-300 border border-green-500/30',
        mixed: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
        special: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
        
        // Status indicators
        available: 'bg-green-500/20 text-green-300 border border-green-500/30',
        'sold-out': 'bg-red-500/20 text-red-300 border border-red-500/30',
        'coming-soon': 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
        cancelled: 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
        
        // General variants
        default: 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
        secondary: 'bg-gray-800/50 text-gray-200 border border-gray-700',
        destructive: 'bg-red-500/20 text-red-300 border border-red-500/30',
        outline: 'text-gray-300 border border-gray-600',
        
        // VIP and premium
        vip: 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border border-yellow-500/30',
        featured: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 border border-purple-500/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
