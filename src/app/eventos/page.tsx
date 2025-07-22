/**
 * Events page - Complete list of all events
 */

'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users, Filter, Search } from 'lucide-react'
import { mockEvents } from '@/lib/mock-data'
import { motion } from 'framer-motion'
import { Event, EventCategory, EventStatus } from '@/types/entities'

const categories: (EventCategory | 'todos')[] = ['todos', 'reggaeton', 'electronica', 'rock', 'cumbia', 'mixed']

const categoryLabels: Record<EventCategory | 'todos', string> = {
  todos: 'Todos',
  reggaeton: 'Reggaetón',
  electronica: 'Electrónica',
  rock: 'Rock',
  cumbia: 'Cumbia',
  mixed: 'Variado',
  special: 'Especial'
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'todos'>('todos')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter events
  const filteredEvents = mockEvents.filter(event => {
    const matchesCategory = selectedCategory === 'todos' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.artists.some(artist => artist.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Sort events by date
  const sortedEvents = filteredEvents.sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 bg-black/40" />
        <Container className="relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Todos los Eventos
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Descubre las mejores noches de la ciudad. Desde reggaetón hasta electrónica, 
              tenemos la música perfecta para cada momento.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900/50 sticky top-20 z-40 backdrop-blur-md">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar eventos, artistas..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-gray-400" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {categoryLabels[category]}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <Container>
          {sortedEvents.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-white mb-4">No se encontraron eventos</h3>
              <p className="text-gray-400 mb-8">
                Intenta cambiar los filtros o buscar otro término
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('todos')
                  setSearchTerm('')
                }}
              >
                Limpiar Filtros
              </Button>
            </motion.div>
          ) : (
            <>
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400">
                  Mostrando {sortedEvents.length} evento{sortedEvents.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'todos' && ` de ${categoryLabels[selectedCategory]}`}
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {sortedEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative">
                        <div className="absolute top-4 left-4">
                          <Badge variant={event.category as any}>
                            {event.category}
                          </Badge>
                        </div>
                        {event.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="featured">Destacado</Badge>
                          </div>
                        )}
                        {/* Status Badge */}
                        <div className="absolute bottom-4 right-4">
                          <Badge 
                            variant={
                              event.status === 'published' ? 'default' : 
                              event.status === 'sold_out' ? 'destructive' : 
                              'secondary'
                            }
                          >
                            {event.status === 'published' ? 'Disponible' :
                             event.status === 'sold_out' ? 'Agotado' :
                             event.status === 'cancelled' ? 'Cancelado' : 'Próximamente'}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                        <CardDescription className="line-clamp-3">
                          {event.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {event.date.toLocaleDateString('es-AR', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })} - {event.startTime}hs
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.venue.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>Capacidad: {event.venue.capacity} personas</span>
                          </div>
                        </div>

                        {event.artists.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-white mb-2">Artistas:</p>
                            <div className="flex flex-wrap gap-2">
                              {event.artists.map((artist) => (
                                <Badge key={artist.id} variant="secondary">
                                  {artist.name}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Price Range */}
                        {event.tickets && event.tickets.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-700">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Desde:</span>
                              <span className="text-lg font-bold text-purple-400">
                                ${Math.min(...event.tickets.map(t => t.price)).toLocaleString('es-AR')}
                              </span>
                            </div>
                          </div>
                        )}
                      </CardContent>

                      <CardFooter>
                        <Button 
                          className="w-full" 
                          asChild
                          disabled={event.status === 'sold_out' || event.status === 'cancelled'}
                        >
                          <a href={`/eventos/${event.slug}`}>
                            {event.status === 'sold_out' ? 'Agotado' :
                             event.status === 'cancelled' ? 'Cancelado' :
                             'Ver Detalles y Comprar'}
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </Container>
      </section>
    </div>
  )
}
