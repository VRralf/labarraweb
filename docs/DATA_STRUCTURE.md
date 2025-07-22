# 📋 Estructura de Datos - La Barra Web

## 🎯 Propósito

Esta documentación describe la estructura de datos diseñada para la web del boliche La Barra. Los tipos y esquemas definidos aquí servirán como **contrato entre el frontend y el backend futuro**.

## 📁 Estructura de Archivos

```
src/
├── types/
│   ├── entities.ts     # Entidades principales del dominio
│   ├── api.ts          # Tipos para requests/responses de API
│   └── index.ts        # Export central
├── schemas/
│   └── validation.ts   # Esquemas Zod para validación
└── lib/
    ├── mock-data.ts    # Datos de ejemplo para desarrollo
    └── api-spec.ts     # Especificación de API para backend
```

## 🏗️ Entidades Principales

### Event (Evento)
- **Información básica**: título, descripción, fecha, horarios
- **Categorización**: reggaeton, electrónica, rock, cumbia, etc.
- **Estados**: draft, published, sold_out, cancelled
- **Relaciones**: artistas, tipos de entradas, galería

### TicketType (Tipo de Entrada)
- **Precios**: precio actual, precio original (descuentos)
- **Disponibilidad**: cantidad total, vendidas, máximo por compra
- **Ventajas**: lista de beneficios (especialmente para VIP)
- **Restricciones temporales**: fechas de venta

### Purchase (Compra)
- **Información del cliente**: datos personales, documento
- **Items**: tipos de entrada y cantidades
- **Pago**: método, estado, totales con impuestos
- **Entradas generadas**: con códigos QR únicos

### Artist (Artista/DJ)
- **Perfil**: biografía, avatar, géneros
- **Redes sociales**: Instagram, Spotify, SoundCloud
- **SEO**: slug para URLs amigables

## 🔄 API Specification

### Endpoints Principales

```typescript
GET  /events              # Lista de eventos con filtros
GET  /events/{id}         # Detalle de evento
POST /purchases           # Crear compra
POST /tickets/validate    # Validar entrada (QR)
GET  /gallery             # Galería de imágenes/videos
POST /contact             # Formulario de contacto
```

### Autenticación
- **Tipo**: Bearer Token
- **Duración**: 24 horas (access) / 30 días (refresh)
- **Rate limiting**: 100 req/hora (anónimo), 1000 req/hora (autenticado)

## ✅ Validación con Zod

Todos los formularios y requests están validados con Zod:

- **Eventos**: fechas futuras, horarios válidos, capacidad
- **Compras**: email válido, teléfono, documento, cantidad de entradas
- **Contacto**: campos requeridos, longitud de mensajes
- **Newsletter**: email válido, preferencias opcionales

## 🎨 Datos de Ejemplo (Mock Data)

Para desarrollo, se incluyen datos de ejemplo:

- **2 Artistas**: DJ Axel (reggaeton), Marina Eclipse (electrónica)
- **3 Eventos**: 2 publicados, 1 en borrador
- **Tipos de entrada**: Early Bird, General, VIP
- **Galería**: Imágenes con metadatos completos
- **Venue**: Información completa del local

## 🚀 Uso en Desarrollo

### Importar tipos:
```typescript
import { Event, Purchase, TicketType } from '@/types'
```

### Usar validación:
```typescript
import { CreatePurchaseSchema } from '@/schemas/validation'
const result = CreatePurchaseSchema.parse(formData)
```

### Acceder a datos mock:
```typescript
import { mockEvents, getFeaturedEvents } from '@/lib/mock-data'
```

## 🔮 Preparación para Backend

1. **Estructura de base de datos**: Los tipos definen las tablas necesarias
2. **Endpoints**: La especificación API está lista para implementar
3. **Validación**: Los esquemas Zod se pueden convertir a validación backend
4. **Documentación**: OpenAPI/Swagger se puede generar desde la especificación

## 📝 Próximos Pasos

1. ✅ Tipos y esquemas definidos
2. 🔄 Crear componentes UI base
3. 🔄 Implementar navigation y layout
4. 🔄 Desarrollar páginas principales
5. 🔄 Integrar sistema de estado (Zustand)

---

**Nota**: Esta estructura está diseñada para ser escalable y mantenible. Cualquier cambio en los tipos aquí impactará tanto el frontend como el backend futuro.
