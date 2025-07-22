/**
 * Gallery page - Showcase of La Barra nightclub
 */

'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Calendar, Users, Zap } from 'lucide-react'

interface GalleryItem {
  id: string
  type: 'image' | 'video'
  src: string
  thumbnail: string
  title: string
  description: string
  category: 'eventos' | 'interior' | 'djs' | 'ambiente'
  date?: string
}

// Mock gallery data
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/gallery/evento-reggaeton-1.jpg',
    thumbnail: '/gallery/evento-reggaeton-1-thumb.jpg',
    title: 'Noche de Reggaetón',
    description: 'Una noche épica con los mejores hits del reggaetón',
    category: 'eventos',
    date: '2024-12-15'
  },
  {
    id: '2',
    type: 'image',
    src: '/gallery/interior-main-floor.jpg',
    thumbnail: '/gallery/interior-main-floor-thumb.jpg',
    title: 'Pista Principal',
    description: 'Nuestro amplio espacio con sistema de sonido de última generación',
    category: 'interior'
  },
  {
    id: '3',
    type: 'video',
    src: '/gallery/dj-set-electronico.mp4',
    thumbnail: '/gallery/dj-set-electronico-thumb.jpg',
    title: 'DJ Set Electrónico',
    description: 'Los mejores DJs de la escena electrónica',
    category: 'djs',
    date: '2024-12-10'
  },
  {
    id: '4',
    type: 'image',
    src: '/gallery/vip-area.jpg',
    thumbnail: '/gallery/vip-area-thumb.jpg',
    title: 'Área VIP',
    description: 'Zona exclusiva con servicio premium',
    category: 'interior'
  },
  {
    id: '5',
    type: 'image',
    src: '/gallery/ambiente-nocturno.jpg',
    thumbnail: '/gallery/ambiente-nocturno-thumb.jpg',
    title: 'Ambiente Nocturno',
    description: 'La energía única de nuestras noches',
    category: 'ambiente',
    date: '2024-12-08'
  },
  {
    id: '6',
    type: 'image',
    src: '/gallery/luces-espectaculares.jpg',
    thumbnail: '/gallery/luces-espectaculares-thumb.jpg',
    title: 'Show de Luces',
    description: 'Sistema de iluminación LED sincronizado',
    category: 'interior'
  },
  {
    id: '7',
    type: 'video',
    src: '/gallery/crowd-dancing.mp4',
    thumbnail: '/gallery/crowd-dancing-thumb.jpg',
    title: 'Energía en la Pista',
    description: 'Cuando la música y la multitud se conectan',
    category: 'ambiente',
    date: '2024-12-05'
  },
  {
    id: '8',
    type: 'image',
    src: '/gallery/bar-area.jpg',
    thumbnail: '/gallery/bar-area-thumb.jpg',
    title: 'Zona del Bar',
    description: 'Cocteles premium y bebidas de la mejor calidad',
    category: 'interior'
  }
]

const categories = ['todos', 'eventos', 'interior', 'djs', 'ambiente']
const categoryLabels = {
  todos: 'Todos',
  eventos: 'Eventos',
  interior: 'Interior',
  djs: 'DJs',
  ambiente: 'Ambiente'
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  // Filter items by category
  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

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
              Galería
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revive los mejores momentos de La Barra. Desde nuestros increíbles espacios 
              hasta las noches más épicas de la ciudad.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Eventos</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Users className="h-8 w-8 mx-auto mb-2 text-pink-400" />
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Asistentes</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-sm text-gray-400">Años</div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-900/50 sticky top-20 z-40 backdrop-blur-md">
        <Container>
          <div className="flex justify-center">
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <Container>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                  {/* Mock image placeholder */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">
                        {item.category === 'eventos' ? '🎉' :
                         item.category === 'interior' ? '🏢' :
                         item.category === 'djs' ? '🎧' : '✨'}
                      </div>
                      <div className="text-sm font-medium">{item.title}</div>
                    </div>
                  </div>
                  
                  {/* Video indicator */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 rounded-full p-2">
                        <Play className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {categoryLabels[item.category as keyof typeof categoryLabels]}
                    </Badge>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">{item.description}</p>
                      {item.date && (
                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(item.date).toLocaleDateString('es-AR')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-2xl font-bold text-white mb-4">No hay contenido en esta categoría</h3>
              <p className="text-gray-400 mb-8">
                Intenta seleccionar otra categoría para ver más contenido
              </p>
              <Button
                variant="outline"
                onClick={() => setSelectedCategory('todos')}
              >
                Ver Todo
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Modal for viewing items */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Content */}
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">
                    {selectedItem.category === 'eventos' ? '🎉' :
                     selectedItem.category === 'interior' ? '🏢' :
                     selectedItem.category === 'djs' ? '🎧' : '✨'}
                  </div>
                  <div className="text-2xl font-bold">{selectedItem.title}</div>
                  {selectedItem.type === 'video' && (
                    <div className="mt-4">
                      <div className="bg-black/30 rounded-full p-4 inline-block">
                        <Play className="h-8 w-8" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">
                    {categoryLabels[selectedItem.category as keyof typeof categoryLabels]}
                  </Badge>
                  {selectedItem.type === 'video' && (
                    <Badge variant="outline">Video</Badge>
                  )}
                  {selectedItem.date && (
                    <span className="text-sm text-gray-400">
                      {new Date(selectedItem.date).toLocaleDateString('es-AR')}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h2>
                <p className="text-gray-300 text-lg">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <Container>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para vivir la experiencia?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a las mejores noches de la ciudad. Revisa nuestros próximos eventos 
              y reserva tu lugar en La Barra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="/eventos">Ver Próximos Eventos</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="/sobre-nosotros">Conocer Más</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
