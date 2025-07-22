/**
 * API Specification Documentation
 * This file serves as documentation for backend developers
 * and can be used to generate OpenAPI/Swagger documentation
 */

export const API_SPEC = {
  info: {
    title: 'La Barra Nightclub API',
    version: '1.0.0',
    description: 'API for La Barra nightclub management system',
    contact: {
      name: 'Development Team',
      email: 'dev@labarra.com'
    }
  },
  
  baseUrl: {
    production: 'https://api.labarra.com',
    staging: 'https://staging-api.labarra.com',
    development: 'http://localhost:8000'
  },

  endpoints: {
    // Events
    events: {
      list: {
        method: 'GET',
        path: '/events',
        description: 'Get list of events with filtering and pagination',
        queryParams: [
          'page', 'limit', 'category', 'status', 'featured', 'search', 'dateFrom', 'dateTo'
        ],
        response: 'EventsListResponse'
      },
      detail: {
        method: 'GET',
        path: '/events/{id}',
        description: 'Get event details by ID',
        pathParams: ['id'],
        response: 'EventDetailResponse'
      },
      create: {
        method: 'POST',
        path: '/events',
        description: 'Create new event (admin only)',
        body: 'CreateEventForm',
        auth: 'Bearer token',
        response: 'EventDetailResponse'
      }
    },

    // Tickets & Purchases
    purchases: {
      create: {
        method: 'POST',
        path: '/purchases',
        description: 'Create a new ticket purchase',
        body: 'CreatePurchaseForm',
        response: 'CreatePurchaseResponse'
      },
      detail: {
        method: 'GET',
        path: '/purchases/{orderNumber}',
        description: 'Get purchase details',
        pathParams: ['orderNumber'],
        response: 'Purchase'
      }
    },

    tickets: {
      validate: {
        method: 'POST',
        path: '/tickets/validate',
        description: 'Validate ticket QR code at venue entry',
        body: 'TicketValidationRequest',
        auth: 'Bearer token',
        response: 'TicketValidationResponse'
      }
    },

    // Gallery
    gallery: {
      list: {
        method: 'GET',
        path: '/gallery',
        description: 'Get gallery images and videos',
        queryParams: ['page', 'limit', 'eventId', 'type', 'featured'],
        response: 'GalleryResponse'
      }
    },

    // Contact
    contact: {
      send: {
        method: 'POST',
        path: '/contact',
        description: 'Send contact form message',
        body: 'ContactForm',
        response: 'ContactResponse'
      }
    },

    // Newsletter
    newsletter: {
      subscribe: {
        method: 'POST',
        path: '/newsletter/subscribe',
        description: 'Subscribe to newsletter',
        body: 'NewsletterForm',
        response: 'NewsletterSubscriptionResponse'
      }
    },

    // Authentication (future)
    auth: {
      login: {
        method: 'POST',
        path: '/auth/login',
        description: 'User login',
        body: 'LoginForm',
        response: 'LoginResponse'
      },
      register: {
        method: 'POST',
        path: '/auth/register',
        description: 'User registration',
        body: 'RegisterForm',
        response: 'RegisterResponse'
      },
      refresh: {
        method: 'POST',
        path: '/auth/refresh',
        description: 'Refresh access token',
        body: { refreshToken: 'string' },
        response: { token: 'string' }
      }
    }
  },

  // Status codes and error handling
  responses: {
    success: {
      200: 'OK - Request successful',
      201: 'Created - Resource created successfully',
      204: 'No Content - Request successful, no content to return'
    },
    clientErrors: {
      400: 'Bad Request - Invalid request data',
      401: 'Unauthorized - Authentication required',
      403: 'Forbidden - Insufficient permissions',
      404: 'Not Found - Resource not found',
      422: 'Unprocessable Entity - Validation errors'
    },
    serverErrors: {
      500: 'Internal Server Error - Unexpected server error',
      502: 'Bad Gateway - External service error',
      503: 'Service Unavailable - Service temporarily unavailable'
    }
  },

  // Authentication
  authentication: {
    type: 'Bearer Token',
    header: 'Authorization: Bearer <token>',
    tokenExpiry: '24 hours',
    refreshTokenExpiry: '30 days'
  },

  // Rate limiting
  rateLimiting: {
    anonymous: '100 requests per hour',
    authenticated: '1000 requests per hour',
    admin: '5000 requests per hour'
  },

  // Data formats
  dataFormats: {
    dates: 'ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)',
    currency: 'Decimal with 2 decimal places',
    ids: 'UUID v4',
    images: 'URLs to CDN resources',
    pagination: 'Offset-based with page/limit'
  }
} as const

// Export types for backend development
export type ApiEndpoint = keyof typeof API_SPEC.endpoints
export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
