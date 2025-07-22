/**
 * Mock data for development and testing
 * This simulates the data that will come from the backend
 */

import { Event, Artist, TicketType, MediaItem, Venue, EventStatus, EventCategory, TicketStatus } from '@/types/entities'

// Mock artists - Famous Argentine artists
export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'Bizarrap',
    slug: 'bizarrap',
    bio: 'Productor y DJ argentino mundialmente reconocido, creador de las BZRP Music Sessions. Pionero de la música urbana en Argentina.',
    avatar: '/images/artists/bizarrap.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/bizarrap',
      spotify: 'https://spotify.com/artist/bizarrap',
      youtube: 'https://youtube.com/bizarrap'
    },
    genre: ['reggaeton', 'hip-hop', 'latin'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Hernán Cattáneo',
    slug: 'hernan-cattaneo',
    bio: 'DJ y productor argentino de house y progressive, considerado uno de los mejores DJs del mundo. Referente de la música electrónica nacional.',
    avatar: '/images/artists/hernan-cattaneo.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/hernancattaneo',
      soundcloud: 'https://soundcloud.com/hernancattaneo',
      facebook: 'https://facebook.com/hernancattaneo'
    },
    genre: ['electronica', 'house', 'progressive'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '3',
    name: 'Duki',
    slug: 'duki',
    bio: 'Rapero y cantante argentino, uno de los exponentes más importantes del trap latino. Pionero de la nueva generación del hip-hop argentino.',
    avatar: '/images/artists/duki.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/dukissj',
      spotify: 'https://spotify.com/artist/duki',
      youtube: 'https://youtube.com/duki'
    },
    genre: ['hip-hop', 'trap', 'reggaeton'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '4',
    name: 'Miss Bolivia',
    slug: 'miss-bolivia',
    bio: 'Cantante, compositora y productora argentina de cumbia digital y música urbana. Referente del feminismo en la música argentina.',
    avatar: '/images/artists/miss-bolivia.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/missbolivia',
      spotify: 'https://spotify.com/artist/missbolivia',
      facebook: 'https://facebook.com/missbolivia'
    },
    genre: ['cumbia', 'latin', 'electronica'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '5',
    name: 'L-Gante',
    slug: 'l-gante',
    bio: 'Cantante argentino de cumbia 420. Fenómeno viral que revolucionó la música popular argentina con su estilo único.',
    avatar: '/images/artists/l-gante.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/lgante_keloke',
      spotify: 'https://spotify.com/artist/lgante',
      tiktok: 'https://tiktok.com/@lgante_keloke'
    },
    genre: ['cumbia', 'reggaeton', 'latin'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '6',
    name: 'Nathy Peluso',
    slug: 'nathy-peluso',
    bio: 'Cantante y compositora argentina de gran versatilidad musical. Fusiona géneros como hip-hop, jazz, reggaeton y música latina.',
    avatar: '/images/artists/nathy-peluso.jpg',
    socialLinks: {
      instagram: 'https://instagram.com/nathypeluso',
      spotify: 'https://spotify.com/artist/nathypeluso',
      youtube: 'https://youtube.com/nathypeluso'
    },
    genre: ['hip-hop', 'reggaeton', 'latin', 'jazz'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Mock ticket types with realistic Argentine pricing
export const mockTicketTypes: TicketType[] = [
  {
    id: 'ticket-1',
    eventId: 'event-1',
    name: 'Early Bird',
    description: 'Entrada anticipada con descuento especial para Bizarrap',
    price: 8500,
    originalPrice: 12000,
    currency: 'ARS',
    status: 'available',
    totalQuantity: 100,
    soldQuantity: 85,
    maxPerPurchase: 4,
    saleEndDate: new Date('2025-08-15'),
    perks: ['Descuento especial', 'Acceso prioritario', 'Bebida de bienvenida'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ticket-2',
    eventId: 'event-1',
    name: 'General',
    description: 'Entrada general para BZRP Night',
    price: 12000,
    currency: 'ARS',
    status: 'available',
    totalQuantity: 300,
    soldQuantity: 240,
    maxPerPurchase: 6,
    perks: ['Acceso a todas las áreas públicas'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ticket-3',
    eventId: 'event-1',
    name: 'VIP Bizarrap Experience',
    description: 'Experiencia VIP completa con Bizarrap',
    price: 25000,
    currency: 'ARS',
    status: 'available',
    totalQuantity: 50,
    soldQuantity: 35,
    maxPerPurchase: 4,
    perks: [
      'Barra libre premium toda la noche',
      'Área VIP exclusiva',
      'Meet & greet con Bizarrap',
      'Merchandising oficial BZRP',
      'Acceso backstage',
      'Foto profesional'
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
    title: 'BZRP Night - Bizarrap en Vivo',
    description: 'Una noche histórica con el productor más exitoso de Argentina. Bizarrap llega a La Barra con un show único que incluye sus mejores Music Sessions y colaboraciones más famosas.',
    slug: 'bzrp-night-bizarrap-en-vivo',
    date: new Date('2025-08-20'),
    startTime: '23:00',
    endTime: '05:00',
    status: 'published',
    category: 'reggaeton',
    featured: true,
    artists: [mockArtists[0]], // Bizarrap
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/bizarrap-night.jpg',
    gallery: [mockGallery[0]],
    tickets: mockTicketTypes,
    metaTitle: 'BZRP Night - Bizarrap en Vivo - La Barra',
    metaDescription: 'No te pierdas a Bizarrap en vivo en La Barra. Una noche única con el productor más exitoso de Argentina.',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-2',
    title: 'Progressive House Night - Hernán Cattáneo',
    description: 'El maestro del progressive house argentino regresa a La Barra. Hernán Cattáneo presenta un set de 6 horas con los mejores sonidos electrónicos y visuales espectaculares.',
    slug: 'progressive-house-hernan-cattaneo',
    date: new Date('2025-08-27'),
    startTime: '22:30',
    endTime: '06:00',
    status: 'published',
    category: 'electronica',
    featured: true,
    artists: [mockArtists[1]], // Hernán Cattáneo
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/cattaneo-night.jpg',
    gallery: [mockGallery[1]],
    tickets: [
      {
        ...mockTicketTypes[1],
        id: 'ticket-4',
        eventId: 'event-2',
        name: 'General',
        price: 5500
      },
      {
        ...mockTicketTypes[2],
        id: 'ticket-5',
        eventId: 'event-2',
        name: 'VIP Electronic',
        price: 9500,
        perks: [
          'Barra libre premium',
          'Área VIP con vista privilegiada',
          'Meet & greet con Hernán Cattáneo',
          'Merchandising exclusivo'
        ]
      }
    ],
    metaTitle: 'Progressive House Night - Hernán Cattáneo - La Barra',
    metaDescription: 'Vive una noche única con Hernán Cattáneo, el maestro del progressive house argentino.',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-3',
    title: 'Cumbia 420 con L-Gante',
    description: 'El fenómeno de la cumbia 420 llega a La Barra. L-Gante presenta sus hits más virales en una noche que promete ser épica con la nueva generación de la cumbia argentina.',
    slug: 'cumbia-420-l-gante',
    date: new Date('2025-09-03'),
    startTime: '23:30',
    endTime: '05:00',
    status: 'published',
    category: 'cumbia',
    featured: true,
    artists: [mockArtists[4]], // L-Gante
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/lgante-night.jpg',
    gallery: [],
    tickets: [
      {
        ...mockTicketTypes[1],
        id: 'ticket-10',
        eventId: 'event-3',
        name: 'General',
        price: 4000
      },
      {
        ...mockTicketTypes[2],
        id: 'ticket-11',
        eventId: 'event-3',
        name: 'VIP Cumbia',
        price: 7500,
        perks: [
          'Barra libre toda la noche',
          'Área VIP exclusiva',
          'Foto con L-Gante',
          'Remera oficial del evento'
        ]
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-4',
    title: 'Trap Night - Duki en La Barra',
    description: 'El rey del trap argentino presenta sus mejores tracks en vivo. Duki llega con toda la energía del género urbano más popular del momento.',
    slug: 'trap-night-duki',
    date: new Date('2025-09-10'),
    startTime: '22:00',
    endTime: '05:00',
    status: 'published',
    category: 'reggaeton',
    featured: false,
    artists: [mockArtists[2]], // Duki
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/duki-night.jpg',
    gallery: [],
    tickets: [
      {
        ...mockTicketTypes[1],
        id: 'ticket-6',
        eventId: 'event-4',
        name: 'General',
        price: 4500
      },
      {
        ...mockTicketTypes[2],
        id: 'ticket-12',
        eventId: 'event-4',
        name: 'VIP Trap',
        price: 8500,
        perks: [
          'Barra libre premium',
          'Acceso backstage',
          'Meet & greet con Duki',
          'Vinilo firmado'
        ]
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-5',
    title: 'Nathy Peluso Live Experience',
    description: 'La artista más versátil de Argentina presenta un show único que fusiona hip-hop, jazz, reggaetón y música latina. Una experiencia musical incomparable.',
    slug: 'nathy-peluso-live-experience',
    date: new Date('2025-09-17'),
    startTime: '22:30',
    endTime: '06:00',
    status: 'published',
    category: 'mixed',
    featured: true,
    artists: [mockArtists[5]], // Nathy Peluso
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/nathy-peluso-night.jpg',
    gallery: [],
    tickets: [
      {
        ...mockTicketTypes[1],
        id: 'ticket-7',
        eventId: 'event-5',
        name: 'General',
        price: 5000
      },
      {
        ...mockTicketTypes[2],
        id: 'ticket-8',
        eventId: 'event-5',
        name: 'VIP Experience',
        price: 9000,
        perks: [
          'Barra libre premium',
          'Área VIP con mejor acústica',
          'Soundcheck exclusivo',
          'Disco firmado por la artista'
        ]
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-6',
    title: 'Reggaetón Old School Classics',
    description: 'Un viaje nostálgico por los clásicos del reggaetón que marcaron una época. Daddy Yankee, Don Omar, Wisin & Yandel, Tego Calderón y mucho más en una noche épica.',
    slug: 'reggaeton-old-school-classics',
    date: new Date('2025-09-24'),
    startTime: '23:00',
    endTime: '05:30',
    status: 'published',
    category: 'reggaeton',
    featured: false,
    artists: [],
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/reggaeton-oldschool.jpg',
    gallery: [],
    tickets: [
      {
        ...mockTicketTypes[1],
        id: 'ticket-9',
        eventId: 'event-6',
        name: 'General',
        price: 3500
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-7',
    title: 'Miss Bolivia - Cumbia Digital',
    description: 'La reina de la cumbia digital argentina presenta sus mejores tracks con un show que mezcla activismo, feminismo y los mejores beats electrónicos.',
    slug: 'miss-bolivia-cumbia-digital',
    date: new Date('2025-10-01'),
    startTime: '23:30',
    endTime: '05:00',
    status: 'sold_out',
    category: 'cumbia',
    featured: false,
    artists: [mockArtists[3]], // Miss Bolivia
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/miss-bolivia-night.jpg',
    gallery: [],
    tickets: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'event-8',
    title: 'Aniversario La Barra - 5 Años',
    description: 'Celebramos 5 años de las mejores noches de la ciudad con una mega fiesta que incluye Bizarrap, Duki y sorpresas especiales. La noche más épica del año.',
    slug: 'aniversario-la-barra-5-anos',
    date: new Date('2025-10-15'),
    startTime: '21:00',
    endTime: '08:00',
    status: 'draft',
    category: 'special',
    featured: true,
    artists: [mockArtists[0], mockArtists[2]], // Bizarrap y Duki
    venue: {
      name: 'La Barra Main Room',
      capacity: 450,
      minAge: 18
    },
    coverImage: '/images/events/aniversario.jpg',
    gallery: [],
    tickets: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },

  // Eventos específicos de bowling
  {
    id: 'event-9',
    title: 'Noche de Bowling Familiar',
    description: 'Diversión garantizada para toda la familia. Pistas especiales con barandas para niños, música familiar y promociones especiales en comida y bebida.',
    slug: 'noche-bowling-familiar',
    date: new Date('2025-08-15'),
    startTime: '19:00',
    endTime: '23:00',
    status: 'published' as EventStatus,
    category: 'special' as EventCategory,
    featured: true,
    artists: [],
    venue: {
      name: 'La Barra Bowling - Todas las Pistas',
      capacity: 300,
      minAge: 0
    },
    coverImage: '/images/events/bowling-familiar.jpg',
    gallery: [],
    tickets: [
      {
        id: 'ticket-bowling-1',
        eventId: 'event-9',
        name: 'Pista 1 Hora + Zapatos',
        description: 'Una hora de pista para hasta 6 jugadores + alquiler de zapatos',
        price: 15000,
        originalPrice: 18000,
        currency: 'ARS',
        maxPerPurchase: 4,
        totalQuantity: 50,
        soldQuantity: 8,
        status: 'available' as TicketStatus,
        perks: ['Zapatos incluidos', '6 jugadores máx', 'Bebida gratis para niños'],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      },
      {
        id: 'ticket-bowling-2', 
        eventId: 'event-9',
        name: 'Combo Familia 2hs + Comida',
        description: '2 horas de pista + menu familiar para 4 personas + zapatos',
        price: 35000,
        originalPrice: 42000,
        currency: 'ARS',
        maxPerPurchase: 2,
        totalQuantity: 20,
        soldQuantity: 3,
        status: 'available' as TicketStatus,
        perks: ['2 horas de juego', 'Menu familiar', 'Zapatos incluidos', 'Hasta 6 jugadores'],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },

  {
    id: 'event-10',
    title: 'Torneo Bowling + After Party',
    description: 'Competencia de bowling seguida de fiesta con DJ. Premios para los ganadores y ambiente nocturno para cerrar la noche.',
    slug: 'torneo-bowling-after-party',
    date: new Date('2025-08-25'), 
    startTime: '21:00',
    endTime: '03:00',
    status: 'published' as EventStatus,
    category: 'mixed' as EventCategory,
    featured: false,
    artists: [mockArtists[1]], // Hernán Cattáneo
    venue: {
      name: 'La Barra Bowling + Lounge',
      capacity: 300,
      minAge: 18
    },
    coverImage: '/images/events/torneo-bowling.jpg',
    gallery: [],
    tickets: [
      {
        id: 'ticket-torneo-1',
        eventId: 'event-10',
        name: 'Participante Torneo',
        description: 'Inscripción al torneo + after party + zapatos',
        price: 8500,
        currency: 'ARS',
        maxPerPurchase: 1,
        totalQuantity: 48,
        soldQuantity: 12,
        status: 'available' as TicketStatus,
        perks: ['Participación en torneo', 'Acceso a after party', 'Zapatos incluidos', 'Bebida bienvenida'],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      },
      {
        id: 'ticket-torneo-2',
        eventId: 'event-10',
        name: 'Solo After Party', 
        description: 'Acceso únicamente a la fiesta posterior al torneo',
        price: 4500,
        currency: 'ARS',
        maxPerPurchase: 4,
        totalQuantity: 100,
        soldQuantity: 25,
        status: 'available' as TicketStatus,
        perks: ['DJ Set', 'Acceso completo al lounge', 'Bebida bienvenida'],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
      }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

// Mock venue information
export const mockVenue: Venue = {
  id: 'venue-1',
  name: 'La Barra',
  description: 'Discoteca y club nocturno en San Salvador de Jujuy. El lugar perfecto para vivir las mejores noches con música increíble, ambiente único y la diversión que buscas.',
  address: {
    street: 'Mejías - Esq. San Luis',
    city: 'San Salvador de Jujuy',
    state: 'Jujuy',
    zipCode: '4600',
    country: 'Argentina',
    coordinates: {
      lat: -24.1858,
      lng: -65.2995
    }
  },
  phone: '0388 521-6068',
  email: 'jcpproducciones9@gmail.com',
  website: 'https://labarra.com',
  socialLinks: {
    instagram: 'https://www.instagram.com/labarrabowling/',
    facebook: 'https://facebook.com/labarrabowling',
    whatsapp: '+54 9 388 521-6068'
  },
  capacity: 400,
  minAge: 18, // Solo adultos
  dresscode: 'Elegante / Smart Casual. Se reserva el derecho de admisión.',
  hours: {
    'thursday': { open: '', close: '' }, // Cerrado
    'friday': { open: '00:30', close: '05:30' }, // 12:30 AM - 5:30 AM
    'saturday': { open: '21:30', close: '05:30' }, // 9:30 PM - 5:30 AM
    'sunday': { open: '', close: '' }, // Cerrado
    'monday': { open: '', close: '' }, // Cerrado
    'tuesday': { open: '', close: '' }, // Cerrado
    'wednesday': { open: '', close: '' } // Cerrado
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
