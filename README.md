# EFICIAN // Ingeniería Fotovoltaica Austral

> Plataforma web interactiva de dimensionamiento solar, catálogo de kits fotovoltaicos y cotizador comercial para la Región de Aysén y la Patagonia chilena.

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?style=flat&logo=github)](https://vavaro.github.io/efician/)
[![Responsive](https://img.shields.io/badge/Mobile-Optimized-brightgreen?style=flat&logo=safari)](https://vavaro.github.io/efician/)

---

## 📱 Acceso Rápido en Móvil y Clientes

El sitio está diseñado con filosofía **Mobile-First** para ser utilizado directamente desde teléfonos móviles durante visitas a terreno o en stands de ferias mediante escaneo QR.

- **URL de Producción (GitHub Pages):** [https://vavaro.github.io/efician/](https://vavaro.github.io/efician/)
- **Código QR Permanente:** Disponible en la carpeta /QR/ para impresión de afiches y material corporativo.

---

## ⚡ Características Principales

1. **Calculadora Fotovoltaica Austral Calibrada:**
   - Radiación solar (HSP) específica por comuna (Coyhaique, Puerto Aysén, Chile Chico, Cochrane, Puerto Cisnes, etc.).
   - Modos duales: **Con Red (Edelaysén)** con inyección Net-Billing y ahorro en boleta, y **Aislado (Off-Grid)** para parcelas con reemplazo de generador diésel/bencina.
2. **Mapa Satelital de Alta Resolución:**
   - Permite fijar con precisión métrica la techumbre o terreno del proyecto mediante Leaflet y Esri World Imagery.
3. **Cierre Comercial en 60 Segundos:**
   - Botón directo para exportar el diagnóstico técnico y requerimiento del cliente hacia el WhatsApp comercial oficial de Efician.
4. **Diseño de Grado Industrial:**
   - Paleta cromática Sub-Antarctic Night y Cian Solar austral con tipografías oficiales (Plus Jakarta Sans + DM Mono).

---

## 🛠️ Ejecución Local

Para visualizar el sitio en tu computadora localmente:

`ash
# Opción 1: Servidor rápido con npx
npx serve .

# Opción 2: Servidor con Python (si está instalado)
python -m http.server 8080
`

Luego abre en tu navegador: http://localhost:3000 o http://localhost:8080.

---

## 🚀 Despliegue en GitHub Pages

1. **Crear repositorio en GitHub:**
   - Ve a [github.com/new](https://github.com/new) con tu cuenta VAVARO.
   - Nombre: efician (Público).
2. **Subir los archivos:**
   `ash
   git remote add origin https://github.com/VAVARO/efician.git
   git branch -M main
   git push -u origin main
   `
3. **Activar Pages:**
   - Ve a **Settings** > **Pages** en el repositorio.
   - En **Source** selecciona Deploy from a branch -> Branch main -> Directorio /(root).
   - Guarda los cambios. En 1 minuto estará activo en:
     https://vavaro.github.io/efician/

---

## 📄 Licencia y Derechos
© EFICIAN — Grupo CR SpA. Todos los derechos reservados.
