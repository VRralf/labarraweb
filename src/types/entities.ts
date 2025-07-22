/**
 * Core entities for La Barra nightclub
 * These types will serve as the contract between frontend and backend
 */

// Base entity with common fields
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

// Event types
export type EventStatus = 'draft' | 'published' | 'sold_out' | 'cancelled'
export type EventCategory = 'reggaeton' | 'electronica' | 'rock' | 'cumbia' | 'mixed' | 'special'

export interface Event extends BaseEntity {
  title: string
  description: string
  slug: string
  date: Date
  startTime: string // HH:MM format
  endTime?: string
  status: EventStatus
  category: EventCategory
  featured: boolean
  
  // Artists/DJs
  artists: Artist[]
  
  // Venue details
  venue: {
    name: string
    capacity: number
    minAge: number
  }
  
  // Media
  coverImage: string
  gallery: MediaItem[]
  
  // Tickets
  tickets: TicketType[]
  
  // SEO
  metaTitle?: string
  metaDescription?: string
}

// Artist/DJ information
export interface Artist extends BaseEntity {
  name: string
  slug: string
  bio?: string
  avatar?: string
  socialLinks: {
    instagram?: string
    spotify?: string
    soundcloud?: string
    youtube?: string
    facebook?: string
    tiktok?: string
    twitter?: string
  }
  genre: string[]
}

// Ticket types and pricing
export type TicketStatus = 'available' | 'sold_out' | 'coming_soon'

export interface TicketType extends BaseEntity {
  eventId: string
  name: string // "Early Bird", "General", "VIP"
  description?: string
  price: number
  originalPrice?: number // For showing discounts
  currency: string // "ARS", "USD"
  
  // Availability
  status: TicketStatus
  totalQuantity: number
  soldQuantity: number
  maxPerPurchase: number
  
  // Time restrictions
  saleStartDate?: Date
  saleEndDate?: Date
  
  // Perks (for VIP tickets)
  perks: string[]
}

// Shopping cart and purchases
export interface CartItem {
  ticketTypeId: string
  ticketType: TicketType
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  taxes: number
  total: number
  currency: string
}

// Purchase/Order
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
export type PaymentMethod = 'credit_card' | 'debit_card' | 'bank_transfer' | 'mercadopago'

export interface Purchase extends BaseEntity {
  orderNumber: string
  eventId: string
  event: Event
  
  // Customer info
  customer: {
    email: string
    firstName: string
    lastName: string
    phone: string
    document: string // DNI/Passport
  }
  
  // Items
  items: CartItem[]
  
  // Pricing
  subtotal: number
  taxes: number
  fees: number
  total: number
  currency: string
  
  // Payment
  paymentStatus: PaymentStatus
  paymentMethod: PaymentMethod
  paymentId?: string // External payment processor ID
  
  // Tickets
  tickets: Ticket[]
}

// Individual ticket (QR code)
export interface Ticket extends BaseEntity {
  purchaseId: string
  ticketTypeId: string
  ticketType: TicketType
  
  // Unique identifiers
  ticketNumber: string
  qrCode: string
  barcode?: string
  
  // Usage
  used: boolean
  usedAt?: Date
  
  // Transfer/resale
  transferable: boolean
  originalOwner: string
  currentOwner: string
}

// Media items for gallery
export type MediaType = 'image' | 'video'

export interface MediaItem extends BaseEntity {
  type: MediaType
  url: string
  thumbnailUrl?: string
  alt: string
  caption?: string
  tags: string[]
  featured: boolean
  
  // For events
  eventId?: string
  
  // Metadata
  width?: number
  height?: number
  size?: number // in bytes
}

// Venue/Club information
export interface Venue extends BaseEntity {
  name: string
  description: string
  
  // Location
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  
  // Contact
  phone: string
  email: string
  website?: string
  socialLinks: {
    instagram?: string
    facebook?: string
    twitter?: string
    tiktok?: string
  }
  
  // Details
  capacity: number
  minAge: number
  dresscode?: string
  
  // Operating hours
  hours: {
    [key: string]: { // day of week
      open?: string
      close?: string
      closed?: boolean
    }
  }
  
  // Media
  logo?: string
  images: MediaItem[]
}

// User accounts (for future features)
export type UserRole = 'customer' | 'admin' | 'staff'

export interface User extends BaseEntity {
  email: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: Date
  
  // Account
  role: UserRole
  verified: boolean
  
  // Preferences
  favoriteGenres: EventCategory[]
  notifications: {
    email: boolean
    sms: boolean
    push: boolean
  }
  
  // History
  purchases: Purchase[]
}
