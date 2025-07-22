/**
 * About Us page - La Barra nightclub information
 */

'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Music, 
  Zap, 
  Star,
  Calendar,
  Award,
  Heart,
  Shield
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 bg-black/40" />
        <Container className="relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sobre La Barra
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Más que un boliche, somos una experiencia. Desde 2019, hemos sido el destino favorito 
              para quienes buscan las mejores noches de la ciudad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/eventos">Ver Próximos Eventos</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/galeria">Ver Galería</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                La Barra nació en 2019 con una visión clara: crear un espacio donde la música, 
                el arte y la cultura nocturna se fusionen para ofrecer experiencias únicas e inolvidables.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                Desde nuestros inicios, hemos trabajado incansablemente para construir una comunidad 
                de amantes de la música que valoran la calidad, la innovación y la diversión responsable.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Hoy, después de más de 500 eventos y miles de noches inolvidables, seguimos 
                comprometidos con ofrecer la mejor experiencia nocturna de la ciudad.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Eventos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50K+</div>
                  <div className="text-sm text-gray-400">Personas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
                  <div className="text-sm text-gray-400">Años de Historia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">450</div>
                  <div className="text-sm text-gray-400">Capacidad</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-80 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎭</div>
                    <div className="text-2xl font-bold">LA BARRA</div>
                    <div className="text-lg">Desde 2019</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Qué nos hace especiales?
            </h2>
            <p className="text-gray-400 text-lg">
              Cada detalle en La Barra está pensado para ofrecerte la mejor experiencia nocturna. 
              Desde nuestra tecnología de punta hasta nuestro servicio excepcional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: 'Sistema de Sonido Premium',
                description: 'Equipamiento de audio de última generación con calidad cristalina que envuelve todo el espacio.',
                color: 'text-purple-400'
              },
              {
                icon: Zap,
                title: 'Show de Luces LED',
                description: 'Sistema de iluminación sincronizado con la música que crea ambientes únicos durante toda la noche.',
                color: 'text-pink-400'
              },
              {
                icon: Users,
                title: 'Ambiente Exclusivo',
                description: 'Un espacio diseñado para la comodidad y el disfrute, con zonas diferenciadas para cada momento.',
                color: 'text-yellow-400'
              },
              {
                icon: Star,
                title: 'DJs de Primera',
                description: 'Trabajamos con los mejores artistas locales e internacionales para garantizar noches épicas.',
                color: 'text-green-400'
              },
              {
                icon: Award,
                title: 'Servicio de Excelencia',
                description: 'Nuestro equipo está capacitado para brindarte la mejor atención desde que llegas hasta que te vas.',
                color: 'text-blue-400'
              },
              {
                icon: Shield,
                title: 'Seguridad Total',
                description: 'Protocolos de seguridad estrictos y personal especializado para que disfrutes sin preocupaciones.',
                color: 'text-red-400'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nuestros Valores
            </h2>
            <p className="text-gray-400 text-lg">
              Los principios que guían cada decisión y cada noche en La Barra.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Pasión por la Música',
                description: 'Creemos que la música es el lenguaje universal que conecta almas y crea momentos inolvidables.',
                gradient: 'from-red-500 to-pink-500'
              },
              {
                icon: Users,
                title: 'Comunidad Inclusiva',
                description: 'Valoramos la diversidad y creamos un espacio donde todos se sientan bienvenidos y seguros.',
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Award,
                title: 'Excelencia Constante',
                description: 'Nos esforzamos por superar expectativas y ofrecer experiencias que marquen la diferencia.',
                gradient: 'from-yellow-500 to-orange-500'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${value.gradient} mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-900/50">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Información de Contacto
            </h2>
            <p className="text-gray-400 text-lg">
              ¿Tienes alguna pregunta o quieres organizar un evento privado? 
              No dudes en contactarnos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Ubicación',
                content: ['Av. Córdoba 1234', 'Buenos Aires, CABA', 'Argentina'],
                color: 'text-red-400'
              },
              {
                icon: Clock,
                title: 'Horarios',
                content: ['Jueves a Sábado', '23:00 - 06:00', 'Dom-Mié: Cerrado'],
                color: 'text-blue-400'
              },
              {
                icon: Phone,
                title: 'Teléfono',
                content: ['+54 11 4567-8900', 'WhatsApp disponible', '24/7 para eventos'],
                color: 'text-green-400'
              },
              {
                icon: Mail,
                title: 'Email',
                content: ['info@labarra.com', 'eventos@labarra.com', 'prensa@labarra.com'],
                color: 'text-purple-400'
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <info.icon className={`h-8 w-8 ${info.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.content.map((line, i) => (
                    <p key={i} className="text-gray-400">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dress Code Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Código de Vestimenta
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Para mantener el ambiente exclusivo de La Barra, solicitamos a nuestros 
                invitados que respeten nuestro código de vestimenta.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <Star className="h-5 w-5 text-green-400 mr-2" />
                    Recomendado
                  </h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Elegante sport o formal</li>
                    <li>• Camisas, remeras de calidad</li>
                    <li>• Pantalones de vestir o jeans</li>
                    <li>• Calzado cerrado y limpio</li>
                    <li>• Vestidos y outfits fashion</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-red-400 mr-2" />
                    No Permitido
                  </h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Ropa deportiva (jogging, shorts)</li>
                    <li>• Ojotas, sandalias o zapatillas deportivas</li>
                    <li>• Gorras o sombreros</li>
                    <li>• Ropa muy informal o descuidada</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <p className="text-purple-300 text-sm">
                  <strong>Nota:</strong> La administración se reserva el derecho de admisión. 
                  Recomendamos consultar por WhatsApp si tienes dudas sobre el dress code.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-80 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👔</div>
                    <div className="text-2xl font-bold">ELEGANTE SPORT</div>
                    <div className="text-lg">Dress Code</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

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
              ¿Listo para vivir la experiencia La Barra?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad y forma parte de las mejores noches de la ciudad. 
              Cada evento es una nueva oportunidad de crear recuerdos inolvidables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="/eventos">Ver Próximos Eventos</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="/contacto">Contactanos</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
