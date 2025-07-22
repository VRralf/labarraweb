/**
 * Navigation header for the nightclub website
 */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, Calendar, Image, Phone, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Eventos', href: '/eventos', icon: Calendar },
  { name: 'Galería', href: '/galeria', icon: Image },
  { name: 'Nosotros', href: '/sobre-nosotros', icon: Info },
  { name: 'Contacto', href: '/contacto', icon: Phone },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LB</span>
              </div>
              <span className="text-xl font-bold text-white">La Barra</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/eventos">Ver Eventos</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild size="sm" className="w-full">
                  <Link href="/eventos">Ver Eventos</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
