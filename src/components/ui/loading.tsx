import React from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  text?: string
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12'
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className,
  text 
}) => {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <Loader2 className={cn('animate-spin text-purple-500', sizeMap[size])} />
      {text && <span className="text-gray-400 animate-pulse">{text}</span>}
    </div>
  )
}

interface LoadingPageProps {
  message?: string
  className?: string
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = 'Cargando...', 
  className 
}) => {
  return (
    <div className={cn('min-h-screen flex items-center justify-center', className)}>
      <LoadingSpinner size="xl" text={message} />
    </div>
  )
}

interface LoadingSectionProps {
  message?: string
  className?: string
  height?: string
}

export const LoadingSection: React.FC<LoadingSectionProps> = ({ 
  message = 'Cargando...', 
  className,
  height = 'h-64'
}) => {
  return (
    <div className={cn('flex items-center justify-center', height, className)}>
      <LoadingSpinner size="lg" text={message} />
    </div>
  )
}

// Skeleton components para loading states más específicos
interface SkeletonProps {
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={cn('animate-pulse bg-gray-800 rounded', className)} />
  )
}

export const EventCardSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 p-6 border border-gray-700 rounded-lg">
      <Skeleton className="h-48 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  )
}

export const EventDetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section Skeleton */}
      <section className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto h-full flex items-center px-4">
          <div className="space-y-6 max-w-3xl">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-16 w-full max-w-2xl" />
            <div className="flex gap-6">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-28" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-32 w-full" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-48 w-full" />
              </div>
            </div>
            <div className="space-y-6">
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
