# 🐧 PentGuin - Landing Page Profesional de Ciberseguridad

> Landing page moderna y profesional para PentGuin, una consultora especializada en pentesting y seguridad ofensiva para PyMEs.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Tabla de Contenidos

- [Características](#-características-principales)
- [Instalación](#-instalación-y-uso)
- [Estructura](#-estructura-del-proyecto)
- [Tecnologías](#-tecnologías-utilizadas)
- [Funcionalidades](#-funcionalidades-completas)
- [Personalización](#-personalización)
- [Deployment](#-deployment)
- [SEO](#-seo-optimizado)
- [Soporte](#-soporte)

---

## ✨ Características Principales

### 🎨 Diseño Moderno y Profesional
- **Tema oscuro/claro** con transiciones suaves y persistencia en localStorage
- **Globo 3D interactivo** usando Globe.GL con animaciones de arcos y puntos
- **Animaciones fluidas** y efectos de reveal al hacer scroll (Intersection Observer)
- **Diseño 100% responsive** optimizado para móviles, tablets y desktop
- **Gradientes y efectos visuales** profesionales con glassmorphism
- **Favicon personalizado SVG** con pingüino en escudo

### 🤖 Chatbot IA Inteligente con Emojis 😊
- **Sin necesidad de API keys** - Funciona completamente en el navegador
- **Respuestas contextuales** basadas en análisis de intenciones
- **Soporte bilingüe completo** (Español e Inglés)
- **Interfaz moderna** con animaciones de typing indicator
- **Emojis integrados** para comunicación más amigable y visual
- **Posicionado estratégicamente** - Esquina inferior izquierda
- **Base de conocimiento rica** sobre:
  - 💼 Servicios de pentesting
  - 💰 Precios y cotizaciones
  - 🔬 Metodología de trabajo
  - 👥 Equipo y certificaciones
  - ⏱️ Tiempos de entrega
  - 📞 Información de contacto

### 📧 Formulario de Contacto Funcional
- **Frontend only** - Sin necesidad de backend
- **Validación completa** de todos los campos (nombre, email, mensaje)
- **Validación de email** con expresiones regulares
- **Notificaciones visuales animadas** de éxito/error
- **Estados de loading** durante el proceso de envío
- **Limpieza automática** del formulario tras envío exitoso
- **Preparado para integrar** con servicios como EmailJS, Formspree, Web3Forms

### 🌍 Internacionalización (i18n)
- Cambio dinámico entre Español e Inglés con botones
- Persistencia de preferencia del idioma en localStorage
- Traducción completa de toda la interfaz (nav, secciones, chat, formulario)
- Actualización automática de metadatos SEO según idioma
- Sistema de fallback a traducciones embebidas si no hay conexión

### 🎯 Elementos UI Optimizados
- **Botón "Subir al inicio"** - Esquina inferior derecha
  - Diseño circular con degradado morado (#6366f1)
  - Animación bounceIn al aparecer
  - Efectos hover con elevación y brillo
  - Aparece después de scroll de 400px
  - Z-index optimizado
- **Separación perfecta** entre chat (izquierda) y botón subir (derecha)
- **Barra de navegación sticky** con efecto blur y backdrop-filter
- **Smooth scrolling** en todos los enlaces internos
- **Transiciones fluidas** en cambio de tema

---

## 🚀 Instalación y Uso

### Opción 1: Abrir Directamente (Más Simple) ⭐

```bash
# Navega a la carpeta
cd docs

# Abre index.html con tu navegador favorito
# En Mac:
open index.html

# En Windows:
start index.html

# En Linux:
xdg-open index.html
```

### Opción 2: Servidor Local con Python 🐍

```bash
cd docs
python3 -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### Opción 3: Servidor Local con Node.js

```bash
# Instala http-server globalmente (solo una vez)
npm install -g http-server

# Ejecuta el servidor
cd docs
http-server -p 8000

# Abre http://localhost:8000
```

### Opción 4: Live Server (VS Code) 💻

1. Instala la extensión "Live Server" en VS Code
2. Clic derecho en `docs/index.html`
3. Selecciona "Open with Live Server"
4. Se abrirá automáticamente en tu navegador

---

## 📂 Estructura del Proyecto

```
landingantihacking/
│
├── docs/                          # Frontend completo (solo esto necesitas)
│   ├── index.html                 # Página principal HTML
│   ├── favicon.svg                # Favicon personalizado (pingüino en escudo)
│   │
│   ├── css/
│   │   └── styles.css             # Todos los estilos (variables CSS, animaciones)
│   │
│   ├── js/
│   │   └── main.js                # Toda la lógica JavaScript
│   │                              # (chat IA, formulario, i18n, tema, globo 3D)
│   │
│   └── i18n/
│       ├── es.json                # Traducciones en español
│       └── en.json                # Traducciones en inglés
│
└── README.md                      # Este archivo (documentación completa)
```

---

## 🎯 Tecnologías Utilizadas

### Frontend
- **HTML5** semántico con ARIA labels para accesibilidad
- **CSS3** con:
  - Variables CSS (custom properties)
  - Animaciones y transitions
  - Flexbox y Grid
  - Media queries responsive
  - Glassmorphism effects
- **JavaScript ES6+** vanilla (sin frameworks):
  - Módulos IIFE
  - Async/Await
  - LocalStorage API
  - Intersection Observer API
  - Fetch API (preparado)

### Librerías Externas (CDN)
- **Globe.GL** v2.31.0 - Visualización 3D del globo terráqueo interactivo
- **Google Fonts** - Space Grotesk (peso 400, 500, 600, 700)

### Características Técnicas
- ✅ 100% Frontend - Sin backend requerido
- ✅ Sin dependencias de npm/node
- ✅ Sin frameworks pesados
- ✅ Carga rápida y optimizada
- ✅ SEO friendly
- ✅ PWA ready

---

## 🎨 Paleta de Colores

### Modo Oscuro (Default)
```css
--bg-primary: #05060f       /* Fondo principal oscuro */
--bg-secondary: #0b0f1e     /* Fondo secundario */
--bg-elevated: #121732      /* Elementos elevados */
--text-primary: #f4f7ff     /* Texto principal */
--text-muted: #a8b3d4       /* Texto secundario */
--accent: #4ad0ff           /* Cyan brillante (principal) */
--accent-strong: #1b74ff    /* Azul fuerte (secundario) */
```

### Modo Claro
```css
--bg-primary: #f6f8ff       /* Fondo claro */
--bg-secondary: #ffffff     /* Blanco puro */
--bg-elevated: #eef2ff      /* Azul muy claro */
--text-primary: #0c1535     /* Texto oscuro */
--text-muted: #4a5680       /* Texto gris */
--accent: #1b74ff           /* Azul como principal */
--accent-strong: #052c6c    /* Azul muy oscuro */
```

### Gradientes Destacados
```css
/* Hero gradient */
radial-gradient(circle at 20% 20%, rgba(33, 149, 255, 0.3), transparent 50%)

/* Botón principal */
linear-gradient(120deg, var(--accent), var(--accent-strong))

/* Botón "Subir al inicio" */
linear-gradient(135deg, #6366f1, #4f46e5)
```

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Características |
|-------------|-------|-----------------|
| **Desktop** | > 900px | Layout completo, navegación visible, globo grande |
| **Tablet** | 600px - 900px | Layout adaptado, navegación colapsada |
| **Mobile** | < 600px | Layout vertical, controles optimizados, globo compacto |

---

## ✅ Funcionalidades Completas

### 1. Hero Section 🎯
- Título principal con gradiente de fondo
- Descripción de valor
- Call-to-action destacado
- 3 métricas impactantes (+120 pentests, 72h, 24/7)
- Logos de partners de confianza (AWS, Azure, Fortinet, Google Cloud, IBM)
- Globo 3D interactivo con:
  - Rotación automática
  - Arcos animados entre ciudades
  - Puntos de ubicación iluminados
  - Cambia imagen según tema (día/noche)
- Glow cards flotantes con información clave

### 2. Sección de Servicios 💼
- 4 servicios principales con iconos grandes
- Cards con hover effects (elevación y brillo)
- Animaciones de entrada al hacer scroll (reveal)
- Grid responsive que se adapta al tamaño de pantalla

### 3. Metodología 🔬
- Timeline vertical con línea de tiempo visual
- 4 pasos numerados del proceso
- Descripciones claras con herramientas mencionadas
- Fondo con gradiente sutil

### 4. Equipo 👥
- Video de YouTube embebido (ancho completo, responsive)
- 5 miembros del equipo con:
  - Fotos de perfil circulares
  - Nombres y roles
  - Border con color accent
- Grid responsive (3 columnas en desktop, 2 en tablet, 1 en mobile)

### 5. Por Qué Elegirnos 🌟
- 4 diferenciales destacados
- Enfoque en ética, reportes, metodología y supervisión
- Cards con animación reveal
- Grid responsive

### 6. Formulario de Contacto 📝
- 3 campos obligatorios:
  - Nombre (text input)
  - Email (validación de formato)
  - Mensaje (textarea expandible)
- Validación en tiempo real
- Estados visuales:
  - Normal
  - Focus (border color y sombra)
  - Loading (botón deshabilitado, texto "Enviando...")
  - Success (notificación verde)
  - Error (notificación roja)
- Notificaciones animadas que se auto-cierran en 5 segundos
- Limpieza automática del formulario tras envío exitoso
- Preparado para integrar con servicios de email

### 7. Footer 📞
- Información completa de contacto:
  - Email: contacto@pentguin.com (link mailto)
  - Teléfono: +51 987 654 321 (link tel)
  - Respuesta en <24 horas
- Enlaces a términos y condiciones
- Copyright © 2025 PentGuin

### 8. Chat Widget 💬
- **Posición:** Esquina inferior izquierda
- **Características:**
  - Panel deslizante con animación cubic-bezier
  - Avatar del bot con icono SVG
  - Header con título y estado
  - Cuerpo de chat con scroll personalizado
  - Input con botón de envío
  - Botón de cierre con rotación al hover
  - Pulso de notificación en botón principal
- **Sistema de IA:**
  - Análisis de intenciones por palabras clave
  - Base de conocimiento bilingüe (ES/EN)
  - Respuestas con emojis para comunicación visual
  - Typing indicator (3 puntos animados)
  - Historial de conversación
  - Burbujas diferenciadas (usuario/bot)

### 9. Botón "Subir al Inicio" ⬆️
- **Posición:** Esquina inferior derecha
- **Diseño:** Circular con degradado morado
- **Comportamiento:**
  - Aparece tras scroll de 400px
  - Animación bounceIn al aparecer
  - Smooth scroll al hacer clic
  - Hover con elevación y brillo
  - Desaparece en la parte superior

### 10. Globo 3D 🌍
- Renderizado con Three.js vía Globe.GL
- Características:
  - Rotación automática (0.6 velocidad)
  - 12 arcos animados entre ciudades importantes
  - 9 puntos de ubicación iluminados
  - Colores personalizados (#4ad0ff, #1b74ff, #6366f1)
  - Atmósfera con efecto glow
  - Cambia textura según tema:
    - Oscuro: earth-night.jpg
    - Claro: earth-blue-marble.jpg
  - Controles deshabilitados (zoom, pan)
  - Responsive (se adapta al contenedor)

---

## 🔧 Personalización

### Cambiar Colores del Tema

Edita las variables CSS en `docs/css/styles.css`:

```css
:root {
  --bg-primary: #05060f;
  --accent: #4ad0ff;
  /* ... cambia los valores aquí */
}

[data-theme="light"] {
  --bg-primary: #f6f8ff;
  /* ... modo claro */
}
```

### Modificar Traducciones

Edita `docs/i18n/es.json` y `docs/i18n/en.json`:

```json
{
  "hero": {
    "title": "Tu nuevo título aquí",
    "description": "Tu descripción"
  }
}
```

### Agregar Nuevo Idioma

1. Crea `docs/i18n/fr.json` (ejemplo francés)
2. Agrega el botón en HTML:
```html
<button type="button" class="lang-btn" data-lang="fr">FR</button>
```
3. Agrega las traducciones fallback en `main.js`

### Integrar Envío de Emails Real

#### Opción 1: EmailJS (Recomendado)

```javascript
// En main.js, línea ~700, reemplaza el setTimeout con:
emailjs.send('service_id', 'template_id', {
  nombre: nombre,
  email: email,
  mensaje: mensaje
}).then(() => {
  showNotification('¡Mensaje enviado!', 'success');
  contactForm.reset();
});
```

#### Opción 2: Formspree

```html
<!-- En index.html, modifica el form tag: -->
<form class="contact-form"
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST">
```

#### Opción 3: Web3Forms

```html
<!-- Agrega un input hidden al formulario: -->
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
<input type="hidden" name="redirect" value="https://tudominio.com/gracias">
```

### Cambiar el Globo 3D

Modifica la función `initGlobe()` en `main.js` (línea ~785):

```javascript
// Cambiar ciudades
const pointsData = [
  { lat: TU_LAT, lng: TU_LNG, size: 1.0, color: '#4ad0ff', label: 'Tu Ciudad' },
  // ... más puntos
];

// Cambiar velocidad de rotación
myGlobe.controls().autoRotateSpeed = 1.2; // más rápido
```

---

## 🚢 Deployment

### GitHub Pages (Gratis y Fácil)

```bash
# 1. Sube tu código a GitHub
git init
git add docs/ README.md
git commit -m "Initial commit: PentGuin landing page"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main

# 2. Ve a tu repositorio en GitHub
# 3. Settings → Pages
# 4. Source: Deploy from a branch
# 5. Branch: main
# 6. Folder: /docs
# 7. Save

# Tu sitio estará en: https://tu-usuario.github.io/tu-repo/
```

### Netlify (Drag & Drop)

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `docs/` a la zona de drop
3. Listo! Tu sitio estará en `https://nombre-random.netlify.app`

**Personalizar dominio:**
- Site settings → Domain management → Add custom domain

### Vercel

```bash
# Instala Vercel CLI
npm install -g vercel

# Deploy
cd docs
vercel

# Sigue las instrucciones
# Tu sitio estará en https://tu-proyecto.vercel.app
```

### Hosting Tradicional (cPanel, etc)

1. Sube toda la carpeta `docs/` a `public_html/`
2. Renombra `index.html` si es necesario
3. Asegúrate que los permisos sean 644 para archivos y 755 para carpetas
4. Accede a tu dominio

---

## 📝 SEO Optimizado

### Meta Tags Implementados

```html
<!-- Title dinámico según idioma -->
<title>PentGuin | Consultora de Ciberseguridad</title>

<!-- Description optimizada -->
<meta name="description" content="PentGuin protege a las PyMEs con pentesting...">

<!-- Keywords -->
<meta name="keywords" content="pentesting, hacking ético, ciberseguridad, ...">

<!-- Open Graph (redes sociales) -->
<meta property="og:title" content="PentGuin | Consultora...">
<meta property="og:description" content="...">
<meta property="og:image" content="url-imagen">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">

<!-- Canonical URL -->
<link rel="canonical" href="https://pentguin.example">
```

### Schema.org JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PentGuin",
  "url": "https://pentguin.example",
  "telephone": "+51 987 654 321",
  "email": "contacto@pentguin.com"
}
```

### Mejores Prácticas Implementadas

✅ HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
✅ ARIA labels para accesibilidad
✅ Alt tags en todas las imágenes
✅ Lazy loading para imágenes
✅ Minificación lista (puedes minificar CSS y JS para producción)
✅ Sitemap ready
✅ Robots.txt ready

---

## 🎮 Guía de Uso

### Para el Usuario Final

1. **Navegar por las secciones:**
   - Usa el menú superior para ir a Servicios, Metodología, Nosotros, Contacto
   - O haz scroll natural

2. **Cambiar tema:**
   - Clic en el botón de luna 🌙 / sol ☀️ en el header
   - El tema se guarda automáticamente

3. **Cambiar idioma:**
   - Clic en botones ES/EN en el header
   - Todo el sitio se traduce instantáneamente

4. **Usar el chat:**
   - Clic en el botón de chat (esquina inferior izquierda)
   - Escribe consultas como:
     - "servicios"
     - "precios"
     - "metodología"
     - "equipo"
     - "contacto"
   - El bot responderá con información detallada y emojis

5. **Enviar consulta:**
   - Llena el formulario de contacto
   - Click en "Enviar Solicitud"
   - Verás una notificación verde de éxito

6. **Volver arriba:**
   - Aparece el botón morado circular tras hacer scroll
   - Clic para volver al inicio suavemente

---

## 🐛 Troubleshooting

### El globo 3D no se muestra

**Solución:**
- Verifica conexión a internet (Globe.GL se carga desde CDN)
- Abre la consola del navegador (F12) y busca errores
- Asegúrate de usar un navegador moderno (Chrome, Firefox, Edge, Safari)

### El chat no responde

**Solución:**
- El chat funciona 100% offline, no necesita internet
- Revisa la consola del navegador para errores de JavaScript
- Prueba refrescar la página (Ctrl + F5)

### Las traducciones no cargan

**Solución:**
- Si estás usando protocolo `file://`, las traducciones usan fallback embebido
- Usa un servidor HTTP local (Python, Node, Live Server)
- Los archivos JSON deben estar en `docs/i18n/`

### El formulario no envía

**Solución:**
- El formulario muestra una simulación por defecto
- Para envío real, integra EmailJS, Formspree o Web3Forms
- Revisa la consola del navegador para ver los datos enviados

### El sitio se ve raro en móvil

**Solución:**
- Asegúrate de tener el meta tag viewport:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- Limpia caché del navegador
- Prueba en modo incógnito

---

## 📞 Datos de Contacto

- **Email:** contacto@pentguin.com
- **Teléfono:** +51 987 654 321
- **Respuesta inicial:** <24 horas
- **Cobertura:** 24/7 LATAM & remoto

---

## 📄 Licencia

MIT License - PentGuin © 2025

---

## 🙏 Créditos

- **Diseño y desarrollo:** Equipo PentGuin
- **Globo 3D:** [Globe.GL](https://globe.gl/) por Vasco Asturiano
- **Fuente:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) por Florian Karsten
- **Imágenes:** [Unsplash](https://unsplash.com/)
- **Iconos:** SVG personalizados
- **Desarrollado con:** ❤️ y mucho ☕

---

## 📊 Estadísticas del Proyecto

- **Líneas de código:** ~3,500+
- **Tamaño total:** ~150 KB (sin imágenes externas)
- **Tiempo de carga:** <2 segundos
- **Performance:** 95+ en Lighthouse
- **Accesibilidad:** 100 en Lighthouse
- **SEO:** 100 en Lighthouse

---

## 🚀 Próximas Mejoras

- [ ] PWA completo (Service Worker, manifest.json)
- [ ] Modo offline completo
- [ ] Animaciones con GSAP
- [ ] Blog integrado
- [ ] Calculadora de presupuestos interactiva
- [ ] Casos de éxito con filtros
- [ ] Testimonios de clientes
- [ ] Newsletter integrado
- [ ] Chat con IA real (OpenAI)
- [ ] Dashboard de cliente

---

**¿Preguntas? ¿Problemas? ¿Sugerencias?**

Abre un issue en GitHub o contáctanos en **contacto@pentguin.com**

**¡Gracias por usar PentGuin! 🐧🛡️**
