# 🎨 Milo Tattoo Academy

Una plataforma de aprendizaje moderna y móvil-optimizada para el arte del tatuaje, construida con Next.js y Tailwind CSS.

## ✨ Características

### 🎯 Módulos de Aprendizaje
- **Bitácora Personal**: Documenta tu viaje de aprendizaje
- **Historia & Cultura**: Explora los orígenes del tatuaje
- **Técnicas**: Domina las habilidades fundamentales
- **Diseño**: Desarrolla tu estilo único
- **Comunidad**: Conecta con otros artistas

### 📱 Diseño Mobile-First
- Interfaz optimizada para iPhone y dispositivos móviles
- Botones táctiles de 44px+ para facilidad de uso
- Navegación intuitiva con gestos
- Scroll suave y responsivo

### 🎨 Diseño Visual
- Gradientes rosa/púrpura/azul
- Efectos de cristal (glass morphism)
- Animaciones fluidas
- Tema oscuro moderno

### 🎥 Componentes Interactivos
- Reproductor de video personalizado
- Línea de tiempo cultural interactiva
- Barras de progreso animadas
- Modales y overlays responsivos

## 🚀 Tecnologías

- **Framework**: Next.js 15 con App Router
- **Styling**: Tailwind CSS
- **Icons**: Heroicons + Lucide React
- **Animations**: Framer Motion
- **TypeScript**: Para type safety

## 📦 Instalación

1. **Clonar el repositorio**:
```bash
git clone [repository-url]
cd milo-tattoo-academy
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Ejecutar en desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**:
```
http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
milo-tattoo-academy/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página principal
│   └── components/
│       ├── Header.tsx           # Header con navegación
│       ├── ModuleCard.tsx       # Tarjetas de módulos
│       ├── ProgressBar.tsx      # Barras de progreso
│       ├── VideoPlayer.tsx      # Reproductor de video
│       └── CulturalTimeline.tsx # Línea de tiempo
├── tailwind.config.ts           # Configuración de Tailwind
└── package.json
```

## 🎨 Guía de Diseño

### Colores
- **Rosa**: `#FF6B9D`
- **Púrpura**: `#8B5CF6`
- **Azul**: `#3B82F6`
- **Gradiente Principal**: `linear-gradient(135deg, #FF6B9D 0%, #8B5CF6 50%, #3B82F6 100%)`

### Tipografía
- **Títulos**: Font weight 700-800
- **Texto**: Font weight 400-500
- **Gradiente de texto**: Clase `.gradient-text`

### Espaciado
- **Touch targets**: Mínimo 44px x 44px
- **Padding**: 16px-24px en móvil
- **Margins**: 12px-32px entre secciones

## 📱 Optimización Móvil

### Características Específicas para iPhone
- `touch-action: manipulation` para botones
- `webkit-overflow-scrolling: touch` para scroll suave
- `playsInline` para videos
- Viewport meta tag optimizado

### Breakpoints Responsivos
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Funcionalidades Principales

### Sistema de Progreso
- Tracking automático de lecciones completadas
- Barras de progreso por módulo
- Progreso general del curso

### Navegación
- Header fijo con logo "M"
- Menú hamburguesa en móvil
- Navegación por anclas suave

### Contenido Interactivo
- Videos con controles personalizados
- Timeline cultural navegable
- Modales de información detallada

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Inicio en producción
npm start

# Linting
npm run lint
```

## 🎨 Personalización

### Agregar Nuevo Módulo
1. Agregar datos en `sampleLessons` en `page.tsx`
2. Crear nueva sección en el grid de módulos
3. Actualizar navegación en `Header.tsx`

### Modificar Colores
1. Actualizar `tailwind.config.ts`
2. Modificar variables CSS en `globals.css`
3. Ajustar clases de gradiente

### Agregar Animaciones
1. Definir keyframes en `tailwind.config.ts`
2. Usar clases de animación en componentes
3. Considerar `framer-motion` para animaciones complejas

## 📱 Testing en Dispositivos

### Herramientas Recomendadas
- Chrome DevTools (Device Mode)
- Safari Web Inspector
- BrowserStack para testing real

### Checklist Mobile
- [ ] Touch targets de 44px+
- [ ] Scroll suave
- [ ] Videos reproducen inline
- [ ] Navegación funcional
- [ ] Performance optimizada

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta .next
```

## 📄 Licencia

© 2024 Milo Tattoo Academy. Todos los derechos reservados.

---

**Desarrollado con ❤️ para la comunidad de artistas del tatuaje**
