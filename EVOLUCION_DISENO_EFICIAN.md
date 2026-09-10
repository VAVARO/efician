# EFICIAN // Informe Ejecutivo de Evolución y Arquitectura de Diseño

**Destinatario:** Equipo Directivo y Comercial de Efician  
**Objetivo:** Fundamentación de la arquitectura de interfaz y evolución del sistema de diseño para la plataforma web y demostrador interactivo en feria.  
**Referencia:** Sistema de Diseño `DESIGN.md` (Efician Patagonia Solar Engineering System).

---

## 1. Declaración de Principios: Rigor de Ingeniería sin Clichés de Ficción

Efician se posiciona en la Región de Aysén como una empresa de soluciones solares de alta ingeniería, capaz de responder a condiciones climáticas extremas (nieve, viento blanco, baja radiación invernal y terrenos aislados).

La versión preliminar presentaba un lenguaje visual de "centro de control espacial" (SCADA interno) que resultaba ajeno a la realidad del cliente final. El objetivo de este refinamiento es **elevar la percepción tecnológica de la marca**, asegurando al mismo tiempo que cualquier visitante en un stand de feria o desde su teléfono celular comprenda inmediatamente:
1. **Qué kit necesita** para su realidad particular (urbano conectado a la red vs. parcela aislada).
2. **Cuánto dinero o combustible ahorrará** mes a mes y en cuántos años recupera su inversión.
3. **Cómo obtener su propuesta formal en menos de un minuto** a través de WhatsApp.

---

## 2. Continuidad del Sistema de Diseño (`DESIGN.md`)

Mantenemos de forma estricta los tokens visuales definidos para la identidad de Efician:

### A. Paleta Cromática y Atmósfera
* **Canvas Base (Sub-Antarctic Night):** `#001523` / `#001E30`. Fondo de ingeniería sobrio, oscuro y de alto contraste que reduce el deslumbramiento y resalta los datos energéticos.
* **Superficies de Instrumentación (Glassmorphism):** `#002C45` con desenfoque de fondo (`backdrop-filter: blur(16px)`) y bordes micrométricos en cian (`rgba(0, 255, 255, 0.15)`).
* **Acento Primario (Cian Eléctrico Solar):** `#00FFFF` / `#00FBFB`. Representa el flujo activo de fotones y guía las llamadas a la acción (botones principales, nodos de potencia).
* **Semántica Técnica Energética:**
  * **Verde Esmeralda (`#10B981`):** Ahorro económico e inyección a la red (Net-Billing).
  * **Ámbar Austral (`#F59E0B`):** Carga y almacenamiento en bancos de baterías de litio.
  * **Rojo Alerta (`#EF4444`):** Advertencias técnicas y consumos no respaldados.

### B. Jerarquía Tipográfica
* **Titulares y Arquitectura de Marca:** `Space Grotesk`. Proporciones geométricas precisas que evocan estructura industrial y tecnología limpia.
* **Lectura y Formularios:** `Manrope` / `Inter`. Legibilidad cristalina y balance ergonómico para uso táctil en celulares y tablets.
* **Telemetría y Cifras Monetarias:** `JetBrains Mono`. Espaciado tabular estricto para coordenadas GPS, potencia en kWp, kWh y valores en `$ CLP`, evitando vibración visual al recalcular en tiempo real.

---

## 3. Matriz de Refinamiento: Del "SCADA Teórico" a la "Herramienta de Conversión"

| Componente | Enfoque Original de Stitch | Enfoque Refinado de Alto Rendimiento |
| :--- | :--- | :--- |
| **Audiencia** | Diseñado para un operador de consola técnica. | Diseñado para el **comprador de Aysén** (dueños de parcelas, cabañas, hogares y empresas) atendido en feria o navegando en terreno. |
| **Concepto "Red Neuronal"** | Animaciones decorativas de nodos y esferas abstractas. | **Topología de Red Energética Inteligente:** Un diagrama esquemático interactivo en tiempo real que ilustra cómo interactúan los Paneles ➔ Inversor ➔ Baterías ➔ Consumos. Es vanguardista, pero real y educativo. |
| **Geolocalización** | Coordenadas simuladas sin contexto regional. | **Mapa táctil de la Región de Aysén** centrado en comunas clave (Coyhaique, Aysén, Chile Chico, Cochrane, etc.) con captura precisa de Latitud y Longitud, **100% preparado para conectarse a la API del Ministerio de Energía / Explorador Solar**. |
| **Segmentación de Clientes** | Parámetro único genérico. | **Bifurcación Realista:**<br>1. *Con Red (Edelaysén):* Cálculo de ahorro directo en factura, payback y opción de ingresar N° de cliente.<br>2. *Off-Grid (Parcela/Aislado):* Cálculo enfocado en reemplazo de generador diésel/bencina y días de autonomía invernal. |
| **Catálogo de Kits** | Listado estático genérico. | **Asignación Dinámica de los 4 Kits de Efician**, con comparativa visual, ficha de componentes y exportación automática a WhatsApp con los datos del cálculo. |
| **Densidad de Información** | 10+ gráficos visibles a la vez, saturando al usuario común. | **Divulgación Progresiva:** Las 3 métricas directas al bolsillo siempre visibles. Para el perfil técnico, un botón interactivo despliega el módulo *"Análisis Técnico Avanzado"* (curva de generación estacional verano/invierno). |

---

## 4. Estructura de la Solución Propuesta (Flujo de Feria en 60 Segundos)

1. **Escaneo QR en el Stand:** El cliente accede directamente a la aplicación web optimizada para móviles, sin necesidad de descargas ni logins.
2. **Paso 1: Localización Austral:** Selecciona su comuna y afina su ubicación con el pin en el mapa de Aysén (capturando la radiación local esperada).
3. **Paso 2: Perfil Energético:** Indica si cuenta con red eléctrica o si es un proyecto aislado (parcela/campo) y define su consumo o gasto mensual aproximado.
4. **Paso 3: Diagnóstico en Tiempo Real:** La herramienta recomienda automáticamente el kit óptimo entre los 4 modelos de Efician, proyectando:
   * Ahorro mensual/anual estimado en pesos chilenos.
   * Años estimados para el retorno de inversión (ROI).
   * Días de autonomía en periodos críticos de invierno.
5. **Paso 4: Cierre del Lead Comercial:** 
   * Botón destacado para enviar la ficha técnica pre-configurada directamente al WhatsApp comercial de Efician.
   * Casilla de verificación para adjuntar N° de cliente Edelaysén y autorizar la auditoría técnica detallada.

---

## 5. Conclusión
Esta arquitectura respeta la visión de alta tecnología que Efician desea proyectar, protege las directrices de `DESIGN.md` y transforma la página en un activo de ventas tangible y medible para la feria y para la presencia digital permanente de la empresa en la Patagonia.
