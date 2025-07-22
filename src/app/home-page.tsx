/**
 * Home page for La Barra nightclub
 */

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users } from 'lucide-react'
import { mockEvents, getFeaturedEvents } from '@/lib/mock-data'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            LA BARRA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            El boliche más exclusivo de la ciudad. Vive las mejores noches con música increíble y un ambiente único.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <a href="#eventos">Ver Próximos Eventos</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="/galeria">Ver Galería</a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Events */}
      <section id="eventos" className="py-20 bg-gray-900/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Próximos Eventos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No te pierdas las mejores noches de la ciudad con los DJs más increíbles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:scale-105 transition-transform duration-300">
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
                        {event.date.toLocaleDateString('es-AR')} - {event.startTime}hs
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
                </CardContent>

                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href={`/eventos/${event.slug}`}>
                      Ver Detalles y Comprar
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="/eventos">Ver Todos los Eventos</a>
            </Button>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Sobre La Barra
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Más que un boliche, La Barra es una experiencia. Con más de 5 años en la escena nocturna, 
                nos hemos convertido en el destino favorito para quienes buscan las mejores noches de la ciudad.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Nuestro sistema de sonido de última generación, luces espectaculares y una selección 
                cuidadosa de los mejores DJs hacen de cada noche una experiencia inolvidable.
              </p>
              <Button size="lg" asChild>
                <a href="/sobre-nosotros">Conocer Más</a>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-80">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">450</div>
                    <div className="text-lg">Capacidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
