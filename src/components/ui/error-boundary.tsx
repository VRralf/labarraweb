'use client'

import React from 'react'
import { Button } from './button'
import { AlertCircle, RefreshCw } from 'lucide-react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<ErrorFallbackProps>
}

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => (
  <div className="min-h-[400px] flex items-center justify-center p-8">
    <div className="text-center space-y-6 max-w-md">
      <div className="w-16 h-16 mx-auto text-red-500">
        <AlertCircle className="w-full h-full" />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-white">¡Oops! Algo salió mal</h2>
        <p className="text-gray-400">
          Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <details className="text-left mt-4">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-300">
              Detalles técnicos
            </summary>
            <pre className="mt-2 text-xs text-red-400 bg-gray-900 p-3 rounded overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
      <Button 
        onClick={resetErrorBoundary}
        variant="outline"
        className="gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Intentar nuevamente
      </Button>
    </div>
  </div>
)

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private resetTimeoutId: NodeJS.Timeout | null = null

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service (Sentry, LogRocket, etc.)
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // TODO: Send to error monitoring service
    // Example:
    // Sentry.captureException(error, { contexts: { react: errorInfo } })
  }

  resetErrorBoundary = () => {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId)
    }

    this.resetTimeoutId = setTimeout(() => {
      this.setState({ hasError: false, error: null })
    }, 100)
  }

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId)
    }
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent 
          error={this.state.error!} 
          resetErrorBoundary={this.resetErrorBoundary}
        />
      )
    }

    return this.props.children
  }
}

// Hook para usar con React Query u otros sistemas de error
export const useErrorHandler = () => {
  return React.useCallback((error: Error) => {
    console.error('Unhandled error:', error)
    // TODO: Send to error monitoring service
  }, [])
}
