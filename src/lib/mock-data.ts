/**
 * Mock data for development and testing
 * This simulates the data that will come from the backend
 */

import { Event, Artist, TicketType, MediaItem, Venue } from '@/types/entities'

// Mock artists
export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'DJ Axel',
    slug: 'dj-axel',
    bio: 'Reconocido DJ especializado en reggaeton y música latina',
    avatar: '/images/artists/dj-axel.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/djaxel',
      spotify: 'https://spotify.com/artist/djaxel'
    },
    genre: ['reggaeton', 'latin'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Marina Eclipse',
    slug: 'marina-eclipse',
    bio: 'DJ de música electrónica con shows visuales únicos',
    avatar: '/images/artists/marina-eclipse.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/marinaeclipse',
      soundcloud: 'https://soundcloud.com/marinaeclipse'
    },
    genre: ['electronica', 'techno'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Mock ticket types
export const mockTicketTypes: TicketType[] = [
  {
    id: 'ticket-1',
    eventId: 'event-1',
    name: 'Early Bird',
    description: 'Entrada anticipada con descuento especial',
    price: 2500,
    originalPrice: 3500,
    currency: 'ARS',
    status: 'available',
    totalQuantity: 100,
    soldQuantity: 45,
    maxPerPurchase: 4,
    saleEndDate: new Date('2025-08-15'),
    perks: ['Descuento especial', 'Acceso prioritario'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ticket-2',
    eventId: 'event-1',
    name: 'General',
    description: 'Entrada general',
    price: 3500,
    currency: 'ARS',
    status: 'available',
    totalQuantity: 300,
    soldQuantity: 120,
    maxPerPurchase: 6,
    perks: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ticket-3',
    eventId: 'event-1',
    name: 'VIP',
    description: 'Experiencia VIP completa',
    price: 6500,
    currency: 'ARS',
    status: 'available',
    totalQuantity: 50,
    soldQuantity: 12,
    maxPerPurchase: 4,
    perks: [
      'Barra libre premium',
      'Área VIP exclusiva',
      'Meet & greet con el artista',
      'Regalo especial'
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Mock gallery images
export const mockGallery: MediaItem[] = [
  {
    id: 'media-1',
    type: 'image',
    url: '/images/gallery/night-1.jpg',
    thumbnailUrl: '/images/gallery/thumbs/night-1.jpg',
    alt: 'Noche de reggaeton en La Barra',
    caption: 'Una noche increíble con DJ Axel',
    tags: ['reggaeton', 'party', 'nightlife'],
    featured: true,
    eventId: 'event-1',
    width: 1920,
    height: 1080,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'media-2',
    type: 'image',
    url: '/images/gallery/dancefloor.jpg',
    thumbnailUrl: '/images/gallery/thumbs/dancefloor.jpg',
    alt: 'Pista de baile llena',
    caption: 'La energía de la pista',
    tags: ['dancefloor', 'crowd', 'energy'],
    featured: false,
    width: 1920,
    height: 1080,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Mock events
export const mockEvents: Event[] = [
  {
    id: 'event-1',
    title: 'Noche de Reggaeton con DJ Axel',
    description: 'La mejor música reggaeton y latina de la ciudad. DJ Axel trae los hits más actuales y los clásicos que nunca pasan de moda. Una noche para bailar sin parar.',
    slug: 'noche-reggaeton-dj-axel',
    date: new Date('2025-08-20'),
    startTime: '23:00',
    endTime: '05:00',
    status: 'published',
    category: 'reggaeton',
    featured: true,
    artists: [mockArtists[0]],
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/reggaeton-night.jpg',
    gallery: [mockGallery[0]],
    tickets: mockTicketTypes,
    metaTitle: 'Noche de Reggaeton con DJ Axel - La Barra',
    metaDescription: 'No te pierdas la mejor noche de reggaeton en La Barra con DJ Axel. Entradas disponibles.',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-2',
    title: 'Electronic Vibes - Marina Eclipse',
    description: 'Sumérgete en los sonidos electrónicos más intensos con Marina Eclipse. Una experiencia única con visuales espectaculares y la mejor música electrónica.',
    slug: 'electronic-vibes-marina-eclipse',
    date: new Date('2025-08-27'),
    startTime: '22:30',
    endTime: '06:00',
    status: 'published',
    category: 'electronica',
    featured: true,
    artists: [mockArtists[1]],
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/electronic-night.jpg',
    gallery: [mockGallery[1]],
    tickets: [
      {
        ...mockTicketTypes[1],
        id: 'ticket-4',
        eventId: 'event-2',
        name: 'General',
        price: 4000
      },
      {
        ...mockTicketTypes[2],
        id: 'ticket-5',
        eventId: 'event-2',
        name: 'VIP Electronic',
        price: 7500,
        perks: [
          'Barra libre premium',
          'Área VIP con mejor vista al escenario',
          'Auriculares LED especiales',
          'Meet & greet con Marina Eclipse'
        ]
      }
    ],
    metaTitle: 'Electronic Vibes con Marina Eclipse - La Barra',
    metaDescription: 'Vive la mejor música electrónica con Marina Eclipse en La Barra. Entradas limitadas.',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-3',
    title: 'Fiesta de Cumbia y Cuarteto',
    description: 'Una noche dedicada a la música popular argentina. Cumbia, cuarteto y todos los ritmos que nos hacen bailar.',
    slug: 'fiesta-cumbia-cuarteto',
    date: new Date('2025-09-03'),
    startTime: '23:30',
    status: 'draft',
    category: 'cumbia',
    featured: false,
    artists: [],
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/cumbia-night.jpg',
    gallery: [],
    tickets: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Mock venue information
export const mockVenue: Venue = {
  id: 'venue-1',
  name: 'La Barra',
  description: 'El boliche más exclusivo de la ciudad. Un espacio diseñado para vivir las mejores noches con la mejor música, tragos premium y un ambiente único.',
  address: {
    street: 'Av. Córdoba 1234',
    city: 'Buenos Aires',
    state: 'CABA',
    zipCode: '1055',
    country: 'Argentina',
    coordinates: {
      lat: -34.6037,
      lng: -58.3816
    }
  },
  phone: '+54 11 4567-8900',
  email: 'info@labarra.com',
  website: 'https://labarra.com',
  socialLinks: {
    instagram: 'https://instagram.com/labarraclub',
    facebook: 'https://facebook.com/labarraclub',
    tiktok: 'https://tiktok.com/@labarraclub'
  },
  capacity: 450,
  minAge: 18,
  dresscode: 'Elegante sport. No se permite ingreso en jogging, ojotas o ropa deportiva.',
  hours: {
    'thursday': { open: '23:00', close: '05:00' },
    'friday': { open: '23:00', close: '06:00' },
    'saturday': { open: '23:00', close: '06:00' },
    'sunday': { closed: true },
    'monday': { closed: true },
    'tuesday': { closed: true },
    'wednesday': { closed: true }
  },
  logo: '/images/logo.png',
  images: mockGallery,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
}

// Helper functions for filtering mock data
export const getEventsByCategory = (category: string) => 
  mockEvents.filter(event => event.category === category)

export const getFeaturedEvents = () => 
  mockEvents.filter(event => event.featured && event.status === 'published')

export const getUpcomingEvents = () => 
  mockEvents.filter(event => 
    event.date > new Date() && event.status === 'published'
  ).sort((a, b) => a.date.getTime() - b.date.getTime())

export const getEventBySlug = (slug: string) => 
  mockEvents.find(event => event.slug === slug)
