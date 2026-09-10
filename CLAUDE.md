# EFICIAN // Plataforma e Ingeniería Fotovoltaica Austral

## Tech Stack
- **Frontend:** HTML5 semántico, Tailwind CSS (vía CDN oficial), Vanilla JavaScript (ES6+ moderno).
- **Mapeo y Geolocalización:** Leaflet 1.9.4 con capas satelitales de alta resolución (Esri World Imagery) y OpenStreetMap.
- **Tipografías Oficiales:** Plus Jakarta Sans (titulares), Inter (cuerpo/lectura), DM Mono (telemetría y cifras monetarias).
- **Despliegue y Hosting:** GitHub Pages (estático, 100% serverless, HTTPS automático, compatible con www.efician.cl).

## Estructura del Proyecto
- index.html: Núcleo de la plataforma. Integra la calculadora solar austral, selector de comunas de Aysén, mapa interactivo, catálogo de kits y cotizador directo vía WhatsApp.
- logo-efician.png: Identificador corporativo estandarizado para favicon, Apple touch icon y vista previa en redes sociales (Open Graph).
- QR/: Códigos QR vectoriales y de alta resolución para impresión en stands de ferias, tarjetas y afiches.
- stitch_efician_solar_sizing_app/: Prototipo de interfaz y especificación de diseño (DESIGN.md).
- EVOLUCION_DISENO_EFICIAN.md: Informe ejecutivo de evolución de diseño y arquitectura de conversión comercial.

## Convenciones de Código y UX
- **Mobile-First & Touch UI:** Diseñado prioritariamente para navegación en smartphones durante ferias o visitas en terreno. Todos los botones interactivos deben tener área táctil mínima de 44x44px.
- **Rutas Relativas Obligatorias:** No utilizar barras iniciales absolutas (ej. /assets/) para garantizar que la web funcione tanto en subrutas de GitHub Pages (/efician/) como en el dominio raíz (www.efician.cl).
- **Tokens de Diseño:**
  - Canvas oscuro técnico: #001523 / #001E30 (Sub-Antarctic Night)
  - Superficies: #FFFFFF (Modo claro) y #002C45 (Glassmorphism de instrumentación)
  - Cian Eléctrico Oficial: #00A8C6 / #00FFFF
  - Métricas energéticas: Esmeralda (#059669 / #10B981 para ahorros), Ámbar (#D97706 / #F59E0B para baterías/solar).
- **Flujo de Conversión Comercial:** Los cálculos de la calculadora fotovoltaica generan un mensaje preformateado que abre directamente WhatsApp con el número oficial (+56 9 9212 6081) para concretar la venta en < 60 segundos.

## Comandos Útiles
- Previsualización local con Python: python -m http.server 8080 o 
px serve .
- Subida de cambios:
  `ash
  git add .
  git commit -m "feat: [descripcion del cambio]"
  git push origin main
  `

## Límites y Seguridad
- Nunca commitear archivos binarios pesados no optimizados (>5MB), capturas de pantalla de testing o volcados RAW de fotos.
- Mantener siempre la integridad de las fórmulas solares de la Región de Aysén (HSP por latitud, factores de corrección por nieve/nubosidad austral).
