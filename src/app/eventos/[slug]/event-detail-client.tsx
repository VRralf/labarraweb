/**
 * Event Detail Client Component - Handles all interactive functionality
 * This component manages state, user interactions, and cart operations
 */

'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Heart,
  Share2,
  Music,
  Ticket,
  Plus,
  Minus,
  ShoppingCart,
  ExternalLink,
  Info
} from 'lucide-react'
import { mockVenue } from '@/lib/mock-data'
import { useCartStore } from '@/stores/cart-store'
import { useToastActions } from '@/components/ui/toast'
import { formatPrice } from '@/lib/utils'
import { Event } from '@/types/entities'

interface EventDetailClientProps {
  event: Event
}

export function EventDetailClient({ event }: EventDetailClientProps) {
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({})
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { addItem, openCart } = useCartStore()
  const { showCartSuccess, showCartError } = useToastActions()

  // Check if image exists
  useEffect(() => {
    if (event.coverImage) {
      const img = new Image()
      img.onload = () => setImageLoaded(true)
      img.onerror = () => setImageLoaded(false)
      img.src = event.coverImage
    }
  }, [event.coverImage])

  const updateTicketQuantity = (ticketId: string, change: number) => {
    setSelectedTickets(prev => {
      const current = prev[ticketId] || 0
      const newQuantity = Math.max(0, current + change)
      const ticket = event.tickets?.find(t => t.id === ticketId)
      const maxAllowed = ticket?.maxPerPurchase || 6
      
      return {
        ...prev,
        [ticketId]: Math.min(newQuantity, maxAllowed)
      }
    })
  }

  const getTotalPrice = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = event.tickets?.find(t => t.id === ticketId)
      return total + (ticket?.price || 0) * quantity
    }, 0)
  }

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((total, quantity) => total + quantity, 0)
  }

  const handleAddToCart = () => {
    let totalTicketsAdded = 0
    let ticketsAdded: string[] = []

    // Add each selected ticket type to cart
    Object.entries(selectedTickets).forEach(([ticketId, quantity]) => {
      if (quantity > 0) {
        const ticket = event.tickets?.find(t => t.id === ticketId)
        if (ticket) {
          try {
            addItem({
              eventId: event.id,
              eventTitle: event.title,
              eventDate: event.date,
              eventSlug: event.slug,
              ticket,
              quantity,
              unitPrice: ticket.price
            })
            totalTicketsAdded += quantity
            ticketsAdded.push(`${quantity} ${ticket.name}`)
          } catch (error) {
            showCartError(`No se pudo agregar ${ticket.name}`)
            return
          }
        }
      }
    })

    if (totalTicketsAdded > 0) {
      // Show success toast
      const ticketText = ticketsAdded.join(', ')
      showCartSuccess(ticketText, totalTicketsAdded)

      // Reset selected tickets
      setSelectedTickets({})
      
      // Open cart to show added items
      openCart()
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800"
        style={imageLoaded ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${event.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        <Container className="h-full flex items-center">
          <motion.div
            className="text-white space-y-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {event.category && (
                  <Badge variant="secondary" className="text-sm">
                    {event.category}
                  </Badge>
                )}
                {event.status === 'sold_out' && (
                  <Badge variant="destructive" className="text-sm">
                    Agotado
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span className="text-lg">
                    {new Intl.DateTimeFormat('es-AR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }).format(event.date)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg">{event.startTime}hs</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{event.venue.name}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? 'text-red-400' : 'text-gray-400'}
              >
                <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleShare}
              >
                <Share2 className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Event Info */}
            <div className="lg:col-span-2">
              {/* Description */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Sobre el Evento</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {event.description}
                </p>
              </motion.div>

              {/* Artists */}
              {event.artists && event.artists.length > 0 && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Artistas</h2>
                  <div className="grid gap-6">
                    {event.artists.map((artist) => (
                      <Card key={artist.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                            <Music className="h-12 w-12 text-white" />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                              <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                              <div className="flex gap-2 mt-2 sm:mt-0">
                                {artist.genre.map((genre) => (
                                  <Badge key={genre} variant="secondary" className="text-xs">
                                    {genre}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-400 mb-4">{artist.bio}</p>
                            <div className="flex gap-3">
                              {artist.socialLinks.instagram && (
                                <Button variant="ghost" size="sm" asChild>
                                  <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                    Instagram <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                              )}
                              {artist.socialLinks.spotify && (
                                <Button variant="ghost" size="sm" asChild>
                                  <a href={artist.socialLinks.spotify} target="_blank" rel="noopener noreferrer">
                                    Spotify <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Venue Info */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Información del Lugar</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">{mockVenue.name}</h3>
                        <div className="space-y-3 text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>
                              {mockVenue.address.street}, {mockVenue.address.city}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>Capacidad: {mockVenue.capacity} personas</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Info className="h-4 w-4" />
                            <span>Edad mínima: {mockVenue.minAge} años</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-white mb-3">Código de Vestimenta</h4>
                        <p className="text-gray-400 text-sm">{mockVenue.dresscode}</p>
                        
                        <h4 className="text-md font-semibold text-white mb-3 mt-4">Horarios</h4>
                        <div className="text-gray-400 text-sm space-y-1">
                          <div>Jueves: 23:00 - 05:00</div>
                          <div>Viernes y Sábados: 23:00 - 06:00</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Ticket Selection Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Ticket className="h-5 w-5" />
                      Seleccionar Entradas
                    </CardTitle>
                    <CardDescription>
                      Elige el tipo de entrada que prefieras
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {!event.tickets || event.tickets.length === 0 ? (
                      <div className="text-center py-8">
                        <div className="text-4xl mb-4">🎫</div>
                        <p className="text-gray-400">
                          {event.status === 'sold_out' ? 'Entradas agotadas' : 'Entradas próximamente'}
                        </p>
                      </div>
                    ) : (
                      event.tickets.map((ticket) => {
                        const selectedQuantity = selectedTickets[ticket.id] || 0
                        const availableQuantity = ticket.totalQuantity - ticket.soldQuantity
                        const isAvailable = ticket.status === 'available' && availableQuantity > 0
                        
                        return (
                          <div key={ticket.id} className="border border-gray-700 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="font-semibold text-white">{ticket.name}</h3>
                                <p className="text-sm text-gray-400">{ticket.description}</p>
                              </div>
                              <div className="text-right">
                                {ticket.originalPrice && (
                                  <div className="text-sm text-gray-500 line-through">
                                    {formatPrice(ticket.originalPrice)}
                                  </div>
                                )}
                                <div className="text-lg font-bold text-white">
                                  {formatPrice(ticket.price)}
                                </div>
                              </div>
                            </div>
                            
                            {ticket.perks && ticket.perks.length > 0 && (
                              <div className="mb-3">
                                <div className="flex flex-wrap gap-1">
                                  {ticket.perks.slice(0, 2).map((perk, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {perk}
                                    </Badge>
                                  ))}
                                  {ticket.perks.length > 2 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{ticket.perks.length - 2} más
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            )}
                            
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-400">
                                {availableQuantity} disponibles
                              </div>
                              
                              {isAvailable ? (
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateTicketQuantity(ticket.id, -1)}
                                    disabled={selectedQuantity === 0}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="w-8 text-center text-white">{selectedQuantity}</span>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateTicketQuantity(ticket.id, 1)}
                                    disabled={selectedQuantity >= ticket.maxPerPurchase || selectedQuantity >= availableQuantity}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              ) : (
                                <Badge variant="secondary">No disponible</Badge>
                              )}
                            </div>
                          </div>
                        )
                      })
                    )}
                  </CardContent>
                  
                  {event.tickets && event.tickets.length > 0 && (
                    <CardFooter className="flex-col space-y-4">
                      {getTotalTickets() > 0 && (
                        <div className="w-full p-4 bg-gray-800 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-400">Total entradas:</span>
                            <span className="text-white">{getTotalTickets()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-white">Total a pagar:</span>
                            <span className="text-2xl font-bold text-purple-400">
                              {formatPrice(getTotalPrice())}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" 
                        size="lg"
                        disabled={getTotalTickets() === 0 || event.status !== 'published'}
                        onClick={handleAddToCart}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {getTotalTickets() === 0 ? 'Selecciona entradas' : 'Agregar al Carrito'}
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        Pago seguro • Entradas digitales • Confirmación inmediata
                      </p>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
