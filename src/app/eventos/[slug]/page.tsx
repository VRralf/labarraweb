/**
 * Event detail page - Individual event with ticket purchasing
 * Server Component that handles params and passes data to Client Component
 */

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { getEventBySlug, mockEvents } from '@/lib/mock-data'
import { EventDetailClient } from './event-detail-client'
import Link from 'next/link'

interface EventDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all events
export function generateStaticParams() {
  return mockEvents.map((event) => ({
    slug: event.slug,
  }))
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    return (
      <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
        <Container>
          <div className="text-center">
            <div className="text-6xl mb-4">🎵</div>
            <h1 className="text-3xl font-bold text-white mb-4">Evento no encontrado</h1>
            <p className="text-gray-400 mb-8">
              El evento que buscas no existe o ya no está disponible.
            </p>
            <Button asChild>
              <Link href="/eventos">Ver Todos los Eventos</Link>
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  return <EventDetailClient event={event} />
}
