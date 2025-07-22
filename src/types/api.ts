/**
 * API request/response types
 * These define the contract between frontend and backend
 */

import { Event, Purchase, Ticket, User, MediaItem, Artist } from './entities'

// Common API response wrapper
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Events API
export interface EventsListRequest {
  page?: number
  limit?: number
  category?: string
  status?: string
  featured?: boolean
  search?: string
  dateFrom?: string
  dateTo?: string
}

export interface EventsListResponse extends ApiResponse<Event[]> {}

export interface EventDetailResponse extends ApiResponse<Event> {}

// Tickets API
export interface CreatePurchaseRequest {
  eventId: string
  items: {
    ticketTypeId: string
    quantity: number
  }[]
  customer: {
    email: string
    firstName: string
    lastName: string
    phone: string
    document: string
  }
  paymentMethod: 'credit_card' | 'debit_card' | 'mercadopago'
}

export interface CreatePurchaseResponse extends ApiResponse<{
  purchase: Purchase
  paymentUrl?: string // For external payment processors
}> {}

export interface TicketValidationRequest {
  qrCode: string
  eventId: string
}

export interface TicketValidationResponse extends ApiResponse<{
  valid: boolean
  ticket?: Ticket
  message: string
}> {}

// Gallery API
export interface GalleryRequest {
  page?: number
  limit?: number
  eventId?: string
  type?: 'image' | 'video'
  featured?: boolean
}

export interface GalleryResponse extends ApiResponse<MediaItem[]> {}

// User/Auth API (for future)
export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse extends ApiResponse<{
  user: User
  token: string
  refreshToken: string
}> {}

export interface RegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: string
}

export interface RegisterResponse extends ApiResponse<{
  user: User
  token: string
  refreshToken: string
}> {}

// Contact/Newsletter
export interface ContactRequest {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface ContactResponse extends ApiResponse<{
  messageId: string
}> {}

export interface NewsletterSubscriptionRequest {
  email: string
  firstName?: string
  preferences?: {
    events: boolean
    promotions: boolean
  }
}

export interface NewsletterSubscriptionResponse extends ApiResponse<{
  subscriptionId: string
}> {}
