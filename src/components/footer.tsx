/**
 * Footer component with social links and contact info
 */

import * as React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { mockVenue } from '@/lib/mock-data'

const socialLinks = [
  { name: 'Instagram', href: mockVenue.socialLinks.instagram, icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/labarrabowling', icon: Facebook },
]

const quickLinks = [
  { name: 'Eventos', href: '/eventos' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LB</span>
                </div>
                <span className="text-xl font-bold text-white">La Barra</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La discoteca más exclusiva de San Salvador de Jujuy. Vive las mejores noches con la mejor música, 
                tragos premium y un ambiente único que no vas a olvidar.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-2">
                <h4 className="text-white font-semibold">Suscríbete a nuestro newsletter</h4>
                <p className="text-sm text-gray-400">
                  Entérate de todos los eventos y promociones especiales
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button size="sm">Suscribirse</Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Mejías - Esq. San Luis<br />
                    San Salvador de Jujuy, Argentina 4600
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">0388 521-6068</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">jcpproducciones9@gmail.com</span>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <div>Vie: 00:30 - 05:30</div>
                    <div>Sáb: 21:30 - 05:30</div>
                    <div>Dom - Jue: Cerrado</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Síguenos</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 La Barra. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
