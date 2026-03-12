# Diseño de Landing Page - Química Bachillerato

## Filosofía de Diseño Elegida: Minimalismo Científico Moderno

### Movimiento de Diseño
**Minimalismo Científico con Toques de Modernismo Funcional**: Inspirado en interfaces de laboratorios digitales, dashboards científicos y plataformas educativas contemporáneas. Énfasis en claridad, jerarquía visual y funcionalidad sin distracciones.

### Principios Centrales
1. **Claridad Radical**: Cada elemento tiene un propósito. Eliminamos decoración innecesaria para que el estudiante encuentre su duda en menos de 5 segundos.
2. **Jerarquía Visual Inteligente**: Uso estratégico de tamaño, color y espaciado para guiar la atención hacia bloques temáticos y CTAs principales.
3. **Velocidad Perceptual**: Layouts limpios, tipografía generosa, espacios en blanco amplios. El contenido "respira".
4. **Accesibilidad Científica**: Fórmulas bien renderizadas, contraste alto, tipografía sans-serif moderna para legibilidad en móvil.

### Filosofía de Color
- **Primario**: Azul profundo (`#1e40af` o similar) - transmite confianza, rigor académico y profesionalismo.
- **Secundario**: Verde menta suave (`#10b981` o similar) - representa progreso, crecimiento y "laboratorio vivo".
- **Acentos**: Naranja cálido (`#f97316`) - para CTAs y elementos de urgencia (EBAU countdown).
- **Fondos**: Blanco puro o gris muy claro (`#f9fafb`) - máxima legibilidad.
- **Texto**: Gris oscuro profundo (`#1f2937`) - no puro negro para reducir fatiga visual.

**Intención Emocional**: Profesional pero accesible. Científico pero no intimidante. Moderno pero estable.

### Paradigma de Layout
- **Estructura Asimétrica**: No centrado. Uso de grid de 12 columnas con secciones que ocupan 7-8 columnas en desktop, dejando espacio negativo a la derecha.
- **Secciones Modulares Apiladas**: Hero → Bloques Temáticos → Recursos EBAU → Test Rápido → Laboratorio Virtual → Contacto.
- **Imágenes Estratégicas**: Imágenes grandes (16:9) en hero y secciones clave. Iconografía minimalista para recursos.
- **Divisores Sutiles**: Líneas finas o cambios de fondo muy sutiles entre secciones, no líneas gruesas.

### Elementos Distintivos (Signature Elements)
1. **Tarjetas de Bloques Temáticos**: Diseño de tarjeta con borde izquierdo grueso (4-5px) en color temático. Hover: sombra suave y elevación.
2. **Contador EBAU**: Componente visual destacado con números grandes y unidades claras (días, horas, minutos).
3. **Badges de Nivel**: Pequeños badges ("1º Bach", "2º Bach") en gris/azul para indicar nivel educativo.

### Filosofía de Interacción
- **Hover Sutil**: Cambios de color suave, elevación ligera, no animaciones excesivas.
- **Feedback Inmediato**: Botones con estados activos claros, cambio de cursor, transiciones de 200-300ms.
- **Micro-interacciones**: Al hacer click en un bloque temático, expandir con más detalles (acordeón suave).
- **Scroll Suave**: Navegación interna con scroll smooth, no saltos abruptos.

### Animaciones
- **Entrada de Secciones**: Fade-in suave (300ms) al hacer scroll. Elementos se desvanecen en lugar de "caer".
- **Hover en Tarjetas**: Elevación de 2-4px, sombra más pronunciada, cambio de color de borde izquierdo.
- **Contador EBAU**: Números que "parpadean" sutilmente cada segundo (opacidad 0.8 → 1.0).
- **Botones CTA**: Transición de fondo 250ms, cambio de escala 1.0 → 1.02 en hover.

### Sistema Tipográfico
- **Display/Títulos**: "Poppins" o "Outfit" (sans-serif moderno, peso 700-800) para H1, H2. Tamaño: 2.5rem (desktop), 1.8rem (móvil).
- **Subtítulos**: "Poppins" peso 600, tamaño 1.5rem (desktop), 1.2rem (móvil).
- **Body**: "Inter" o "Roboto" peso 400, tamaño 1rem (16px), line-height 1.6.
- **Pequeño/Etiquetas**: "Inter" peso 500, tamaño 0.875rem, color gris medio.
- **Fórmulas**: Usar MathJax o KaTeX para renderizar LaTeX. Tamaño de fuente 1.1rem para claridad.

### Estructura de Secciones
1. **Hero**: Imagen grande (laboratorio), overlay oscuro suave, título + subtítulo + CTA principal.
2. **Bloques Temáticos**: Grid de 3 columnas (desktop), 1 columna (móvil). Tarjetas con borde izquierdo.
3. **Recursos EBAU**: Sección con contador y botones de descarga (PDF, Video, Test).
4. **Test Rápido**: Pregunta del día con 4 opciones, respuesta inmediata.
5. **Laboratorio Virtual**: Enlace/iframe a simulador, con descripción breve.
6. **Contacto/Footer**: Formulario simple, redes sociales, copyright.

---

## Decisiones Implementadas
✅ Paleta de colores: Azul profundo + Verde menta + Naranja cálido
✅ Tipografía: Poppins para títulos, Inter para body
✅ Layout: Asimétrico, modular, mobile-first
✅ Imágenes: Realistas, fotográficas, de alta calidad
✅ Animaciones: Sutiles, funcionales, no distractoras
✅ Accesibilidad: Alto contraste, tipografía clara, navegación lógica
