/**
 * Form validation schemas using Zod
 * These will be used for frontend validation and can be converted to backend validation
 */

import { z } from 'zod'

// Event schemas
export const EventCategorySchema = z.enum([
  'reggaeton',
  'electronica', 
  'rock',
  'cumbia',
  'mixed',
  'special'
])

export const EventStatusSchema = z.enum([
  'draft',
  'published', 
  'sold_out',
  'cancelled'
])

export const CreateEventSchema = z.object({
  title: z.string().min(1, 'El título es requerido').max(100),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres').max(1000),
  date: z.date().min(new Date(), 'La fecha debe ser futura'),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de hora inválido (HH:MM)'),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de hora inválido (HH:MM)').optional(),
  category: EventCategorySchema,
  minAge: z.number().min(16).max(21),
  capacity: z.number().min(1).max(10000),
  coverImage: z.string().url('URL de imagen inválida'),
})

// Ticket schemas
export const TicketTypeSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(50),
  description: z.string().max(200).optional(),
  price: z.number().min(0, 'El precio debe ser positivo'),
  originalPrice: z.number().min(0).optional(),
  totalQuantity: z.number().min(1, 'Debe haber al menos 1 entrada'),
  maxPerPurchase: z.number().min(1).max(10),
  saleStartDate: z.date().optional(),
  saleEndDate: z.date().optional(),
  perks: z.array(z.string()).default([]),
})

// Purchase schemas
export const PurchaseItemSchema = z.object({
  ticketTypeId: z.string().uuid('ID de entrada inválido'),
  quantity: z.number().min(1, 'La cantidad debe ser al menos 1').max(10),
})

export const CustomerInfoSchema = z.object({
  email: z.string().email('Email inválido'),
  firstName: z.string().min(1, 'El nombre es requerido').max(50),
  lastName: z.string().min(1, 'El apellido es requerido').max(50),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Número de teléfono inválido'),
  document: z.string().min(7, 'Documento inválido').max(20),
})

export const CreatePurchaseSchema = z.object({
  eventId: z.string().uuid('ID de evento inválido'),
  items: z.array(PurchaseItemSchema).min(1, 'Debe seleccionar al menos una entrada'),
  customer: CustomerInfoSchema,
  paymentMethod: z.enum(['credit_card', 'debit_card', 'mercadopago']),
})

// Contact form schema
export const ContactFormSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Número de teléfono inválido').optional(),
  subject: z.string().min(1, 'El asunto es requerido').max(100),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000),
})

// Newsletter subscription schema
export const NewsletterSchema = z.object({
  email: z.string().email('Email inválido'),
  firstName: z.string().min(1).max(50).optional(),
  preferences: z.object({
    events: z.boolean().default(true),
    promotions: z.boolean().default(true),
  }).optional(),
})

// User registration schema (for future)
export const RegisterSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'La contraseña debe contener al menos una mayúscula, una minúscula y un número'),
  confirmPassword: z.string(),
  firstName: z.string().min(1, 'El nombre es requerido').max(50),
  lastName: z.string().min(1, 'El apellido es requerido').max(50),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Número de teléfono inválido').optional(),
  dateOfBirth: z.date().max(new Date(Date.now() - 16 * 365 * 24 * 60 * 60 * 1000), 'Debe ser mayor de 16 años').optional(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
})

// Login schema
export const LoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'La contraseña es requerida'),
})

// Type exports for use in components
export type CreateEventForm = z.infer<typeof CreateEventSchema>
export type TicketTypeForm = z.infer<typeof TicketTypeSchema>
export type CreatePurchaseForm = z.infer<typeof CreatePurchaseSchema>
export type ContactForm = z.infer<typeof ContactFormSchema>
export type NewsletterForm = z.infer<typeof NewsletterSchema>
export type RegisterForm = z.infer<typeof RegisterSchema>
export type LoginForm = z.infer<typeof LoginSchema>
