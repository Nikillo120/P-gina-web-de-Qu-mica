# 🧪 Química Bachillerato - Landing Page

Landing page responsiva y moderna para estudiantes de Química de Bachillerato que se preparan para la EBAU (Evaluación de Bachillerato para el Acceso a la Universidad).

## ✨ Características

- 📚 **Bloques Temáticos**: Organizados según el currículo oficial del Ministerio de Educación
- 🔬 **Laboratorio Virtual**: Simulaciones interactivas de experimentos químicos
- 📝 **Formulación Interactiva**: Ejercicios autocorregibles de nomenclatura IUPAC
- 🎯 **Test Rápido Diario**: Preguntas interactivas para mantener la mente activa
- ⏱️ **Contador EBAU**: Cuenta regresiva hacia el examen de selectividad
- 📊 **Recursos Descargables**: Apuntes en PDF, videos y exámenes resueltos
- 📱 **Diseño Responsivo**: Optimizado para móvil, tablet y desktop
- 🎨 **Interfaz Moderna**: Diseño minimalista científico con paleta de colores profesional

## 🎓 Contenidos Incluidos

### Tema 1: Formulación Inorgánica
- La tabla periódica y números de oxidación
- Valencia vs. Número de oxidación
- Valencias fijas de elementos
- Compuestos binarios (óxidos, hidruros, sales)
- Compuestos ternarios (hidróxidos, oxoácidos, oxisales)

### Tema 2: Leyes Fundamentales y Gases
- Concepto de mol y número de Avogadro
- Tipos de masa (atómica, molecular, molar)
- Fórmula maestra: n = m / M
- Leyes de los gases ideales (Boyle, Charles, Gay-Lussac)
- Ecuación general de gases ideales: PV = nRT
- Leyes ponderales (Lavoisier, Proust, Dalton)

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 18+ 
- pnpm (gestor de paquetes)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/quimica-bachillerato-landing.git
cd quimica-bachillerato-landing
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Iniciar servidor de desarrollo**
```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

### Compilar para Producción
```bash
pnpm build
```

### Iniciar Servidor de Producción
```bash
pnpm start
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + TypeScript
- **Estilos**: Tailwind CSS 4
- **Bundler**: Vite
- **Componentes UI**: shadcn/ui
- **Backend**: Express.js (opcional)
- **Enrutamiento**: Wouter
- **Animaciones**: Framer Motion

## 📁 Estructura del Proyecto

```
quimica-bachillerato-landing/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Página principal
│   │   │   └── NotFound.tsx      # Página 404
│   │   ├── components/
│   │   │   ├── Navigation.tsx    # Barra de navegación
│   │   │   ├── ContentSections.tsx # Secciones de contenido
│   │   │   └── ui/               # Componentes shadcn/ui
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts                  # Servidor Express
├── shared/
│   └── const.ts
├── package.json
├── pnpm-lock.yaml
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Diseño

La página utiliza un **Minimalismo Científico Moderno** con:
- **Paleta de Colores**: Azul profundo (#1e40af), Verde menta (#10b981), Naranja cálido (#f97316)
- **Tipografía**: Poppins (títulos), Inter (body)
- **Animaciones**: Sutiles y funcionales (fade-in, hover effects)
- **Índice Lateral**: Panel interactivo en desktop con navegación rápida

## 📱 Responsividad

- ✅ Mobile-first design
- ✅ Breakpoints: 640px (sm), 1024px (lg), 1280px (xl)
- ✅ Menú móvil con submenús desplegables
- ✅ Índice lateral en desktop

## 🔗 Navegación

- **Navbar Sticky**: Acceso rápido a todas las secciones
- **Índice Lateral**: Panel con tabla de contenidos (desktop)
- **Scroll Suave**: Navegación fluida entre secciones
- **Menú Móvil**: Hamburguesa con submenús

## 📚 Secciones Principales

1. **Hero**: Presentación con CTA principal
2. **Bloques Temáticos**: 6 tarjetas con temas clave
3. **Zona EBAU**: Contador regresivo + recursos
4. **Test Rápido**: Pregunta interactiva diaria
5. **Formulación Inorgánica**: Contenido detallado con ejemplos
6. **Leyes Fundamentales**: Conceptos y fórmulas clave
7. **Laboratorio Virtual**: Enlace a simulaciones
8. **Glosario**: Definiciones rápidas

## 🎯 Funcionalidades Interactivas

- ✅ Navegación con scroll suave
- ✅ Test con retroalimentación inmediata
- ✅ Botones de descarga de recursos
- ✅ Contador EBAU en tiempo real
- ✅ Menú desplegable con submenús
- ✅ Índice interactivo

## 🚀 Próximas Mejoras

- [ ] Backend de recursos (descargas reales de PDFs)
- [ ] Sistema de tests con base de datos
- [ ] Autenticación de usuarios
- [ ] Guardado de progreso
- [ ] Estadísticas de estudio
- [ ] Integración con videos
- [ ] Chat de soporte

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👨‍💻 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

## 🙏 Agradecimientos

- Inspirado en las mejores prácticas de educación digital
- Diseño basado en principios de minimalismo científico
- Contenidos basados en currículo oficial de Bachillerato

---

**Hecho con ❤️ para estudiantes de Química de Bachillerato**
