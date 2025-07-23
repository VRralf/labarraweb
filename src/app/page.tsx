/**
 * Home page for La Barra nightclub
 */

'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users } from 'lucide-react'
import { mockEvents, getFeaturedEvents } from '@/lib/mock-data'
import { motion } from 'framer-motion'
import { getVideoPath, getImagePath } from '@/lib/asset-paths'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={getVideoPath("videos/hero-video-poster.jpg")} // Opcional: imagen de poster mientras carga
          >
            <source src={getVideoPath("videos/hero-video.mp4")} type="video/mp4" />
            {/* Fallback para navegadores que no soportan video */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
          </video>
          {/* Fallback gradient for loading or unsupported browsers */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 -z-10" />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <Container className="relative z-10 text-center">
          {/* Logo */}
          <motion.div 
            className="mb-2 md:mb-2 lg:mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={getImagePath("images/branding/logo-labarra.png")} 
              alt="La Barra Logo" 
              className="w-80 md:w-96 lg:w-[480px] xl:w-[600px] 2xl:w-[720px] h-auto mx-auto filter drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tagline principal con efecto neón */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                LA NOCHE ES NUESTRA
              </span>
            </h2>
            
            {/* Subtítulo con efecto glassmorphism */}
            <div className="mx-auto max-w-2xl">
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 backdrop-blur-sm bg-black/20 px-6 py-3 rounded-full border border-white/20 shadow-2xl">
                ✨ <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent font-bold">Jujuy's Hottest Club</span> ✨
              </p>
            </div>
            
            {/* Ubicación con icono y estilo moderno */}
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              <span className="text-sm md:text-base font-medium uppercase tracking-widest">
                San Salvador de Jujuy
              </span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </motion.div>
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

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={event.coverImage} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
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
              </motion.div>
            ))}
          </motion.div>

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
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src={getImagePath("images/venue/la-barra-interior-hero.jpg")} 
                  alt="Interior de La Barra nightclub"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
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
