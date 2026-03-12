import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Download, Play, BookOpen, Beaker, Clock, Target, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { FormulacionInorganicaSection, LeyesFundamentalesSection } from "@/components/ContentSections";

/**
 * DISEÑO: Minimalismo Científico Moderno
 * - Paleta: Azul profundo + Verde menta + Naranja cálido
 * - Tipografía: Poppins (títulos), Inter (body)
 * - Layout: Asimétrico, modular, mobile-first
 * - Animaciones: Sutiles, funcionales
 * - Navegación: Índice funcional con scroll suave
 */

export default function Home() {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {
      // Asumimos EBAU en junio (15 de junio como referencia)
      const ebauDate = new Date(2026, 5, 15); // Mes 5 = junio (0-indexed)
      const now = new Date();
      const diff = ebauDate.getTime() - now.getTime();

      if (diff > 0) {
        setDaysLeft(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setHoursLeft(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setMinutesLeft(Math.floor((diff / 1000 / 60) % 60));
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const thematicBlocks = [
    {
      title: "Enlace y Estructura Atómica",
      description: "Modelos cuánticos, configuración electrónica y geometría molecular (RPECV)",
      color: "blue",
      icon: "⚛️",
      topics: ["Configuración electrónica", "RPECV", "Geometría molecular"],
      id: "enlace",
    },
    {
      title: "Termoquímica y Cinética",
      description: "Ley de Hess, entalpías y factores que afectan a la velocidad de reacción",
      color: "green",
      icon: "🔥",
      topics: ["Ley de Hess", "Entalpías", "Velocidad de reacción"],
      id: "termoquimica",
    },
    {
      title: "Equilibrio Químico",
      description: "Constantes Kc y Kp, y el principio de Le Châtelier",
      color: "purple",
      icon: "⚖️",
      topics: ["Constantes Kc y Kp", "Le Châtelier", "Desplazamiento"],
      id: "equilibrio",
    },
    {
      title: "Ácido-Base",
      description: "Cálculo de pH, valoraciones y neutralizaciones",
      color: "orange",
      icon: "🧪",
      topics: ["Cálculo de pH", "Valoraciones", "Neutralizaciones"],
      id: "acido-base",
    },
    {
      title: "Redox",
      description: "Ajuste de reacciones por el método ion-electrón y celdas galvánicas",
      color: "red",
      icon: "⚡",
      topics: ["Método ion-electrón", "Celdas galvánicas", "Oxidación-reducción"],
      id: "redox",
    },
    {
      title: "Química Orgánica",
      description: "Nomenclatura IUPAC, reacciones y mecanismos de síntesis",
      color: "blue",
      icon: "🧬",
      topics: ["Nomenclatura IUPAC", "Reacciones orgánicas", "Síntesis"],
      id: "organica",
    },
  ];

  const resources = [
    { type: "PDF", icon: Download, label: "Descargar Apuntes", color: "blue", action: () => alert("Descargando apuntes...") },
    { type: "Video", icon: Play, label: "Ver Videos", color: "green", action: () => alert("Abriendo videos...") },
    { type: "Test", icon: Target, label: "Practicar Test", color: "orange", action: () => alert("Iniciando test...") },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663133426289/GLFyTLZQQ3NbPCb9GrVB32/hero-chemistry-lab-HaNxnxbyC3QicCkHvhQAxL.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Domina la Química de Bachillerato
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Tu guía completa para entender cada concepto, resolver cada problema y triunfar en la EBAU
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("bloques")}
              className="cta-button text-lg px-8 py-6"
            >
              Explorar Bloques Temáticos
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection("ebau")}
              className="cta-button secondary text-lg px-8 py-6"
            >
              Ver Recursos EBAU
            </Button>
          </div>
        </div>
      </section>

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* BLOQUES TEMÁTICOS */}
      <section id="bloques" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bloques Temáticos según Currículo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contenidos organizados por bloques oficiales del Ministerio de Educación. Cada bloque incluye los temas más importantes para la Selectividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thematicBlocks.map((block, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (block.id === "formulacion" || block.id === "leyes") {
                    scrollToSection(block.id);
                  } else {
                    alert(`Contenido de ${block.title} próximamente`);
                  }
                }}
                className={`science-card ${block.color} fade-in text-left hover:scale-105 transition-transform`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{block.icon}</span>
                  <span className={`badge ${block.color}`}>Bloque {idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{block.title}</h3>
                <p className="text-gray-700 mb-4">{block.description}</p>
                <div className="flex flex-wrap gap-2">
                  {block.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* ZONA EBAU / SELECTIVIDAD */}
      <section id="ebau" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                  Cuenta Atrás EBAU
                </h2>
                <p className="text-lg text-gray-700">
                  Prepárate con tiempo. Cada día cuenta en tu camino hacia la universidad.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 text-center">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="countdown-number">{daysLeft}</div>
                  <p className="text-gray-600 font-semibold mt-2">Días</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="countdown-number text-green-600">{hoursLeft}</div>
                  <p className="text-gray-600 font-semibold mt-2">Horas</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="countdown-number text-orange-600">{minutesLeft}</div>
                  <p className="text-gray-600 font-semibold mt-2">Minutos</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Últimos Exámenes Resueltos</h3>
                <p className="text-blue-100 mb-6">
                  Accede a los exámenes de años anteriores completamente resueltos y explicados paso a paso.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    onClick={() => alert("Descargando EBAU 2024...")}
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    EBAU 2024
                  </Button>
                  <Button 
                    onClick={() => alert("Descargando EBAU 2023...")}
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    EBAU 2023
                  </Button>
                  <Button 
                    onClick={() => alert("Descargando EBAU 2022...")}
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    EBAU 2022
                  </Button>
                </div>
              </div>

              <div id="recursos" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((resource, idx) => {
                  const Icon = resource.icon;
                  return (
                    <button
                      key={idx}
                      onClick={resource.action}
                      className={`science-card ${resource.color} text-center hover:shadow-lg transition-all`}
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                      <p className="font-semibold text-gray-900">{resource.label}</p>
                      <p className="text-sm text-gray-600 mt-2">{resource.type}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* TEST RÁPIDO DEL DÍA */}
      <section id="test-rapido" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Test Rápido del Día</h2>
              <p className="text-lg text-gray-600">
                Una pregunta diaria para mantener tu mente activa. ¡Resuelve en menos de 2 minutos!
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-green-600" />
                <span className="text-sm font-semibold text-green-700">PREGUNTA DEL DÍA</span>
              </div>

              <h3 className="text-2xl font-bold mb-8 text-gray-900">
                ¿Cuál es el pH de una solución con [H⁺] = 1×10⁻³ M?
              </h3>

              <div className="space-y-3 mb-8">
                {["pH = 1", "pH = 3", "pH = 5", "pH = 7"].map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (idx === 1) {
                        alert("¡Correcto! pH = -log[H⁺] = -log(10⁻³) = 3");
                      } else {
                        alert("Incorrecto. Recuerda: pH = -log[H⁺]");
                      }
                    }}
                    className="w-full text-left p-4 border-2 border-gray-300 rounded-lg hover:border-green-600 hover:bg-green-50 transition-all"
                  >
                    <span className="font-semibold text-gray-900">{option}</span>
                  </button>
                ))}
              </div>

              <Button 
                onClick={() => alert("Respuesta: pH = 3. Explicación: Usando pH = -log[H⁺] = -log(10⁻³) = 3")}
                className="cta-button secondary w-full"
              >
                Ver Respuesta y Explicación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* CONTENIDO: FORMULACIÓN INORGÁNICA */}
      <FormulacionInorganicaSection />

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* CONTENIDO: LEYES FUNDAMENTALES */}
      <LeyesFundamentalesSection />

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* LABORATORIO VIRTUAL */}
      <section id="laboratorio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:ml-80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Laboratorio Virtual</h2>
              <p className="text-lg text-gray-700 mb-6">
                Experimenta con simulaciones interactivas. Cambia variables, observa resultados en tiempo real y comprende cómo funciona la química en la práctica.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Simulador de equilibrio químico",
                  "Visualización de estructuras moleculares",
                  "Experimentos de valoración ácido-base",
                  "Celdas galvánicas interactivas",
                  "Reacciones de velocidad variable",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => alert("Abriendo laboratorio virtual...")}
                className="cta-button"
              >
                <Beaker className="w-5 h-5 mr-2" />
                Acceder al Laboratorio
              </Button>
            </div>

            <div className="fade-in" style={{ animationDelay: "200ms" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663133426289/GLFyTLZQQ3NbPCb9GrVB32/molecular-structure-cArC3Bb4AFCabX3dnaCPbB.webp"
                alt="Estructura molecular"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* FORMULACIÓN INTERACTIVA */}
      <section id="formulacion-interactiva" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:ml-80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in" style={{ animationDelay: "100ms" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663133426289/GLFyTLZQQ3NbPCb9GrVB32/chemistry-equations-XPzN8pVwJRL5TFMhcXeyD9.webp"
                alt="Ecuaciones químicas"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>

            <div className="fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Formulación Interactiva</h2>
              <p className="text-lg text-gray-700 mb-6">
                Aprende nomenclatura IUPAC con ejercicios autocorregibles. Desde compuestos inorgánicos simples hasta moléculas orgánicas complejas.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Nomenclatura inorgánica completa",
                  "Nomenclatura orgánica IUPAC",
                  "Ejercicios autocorregibles",
                  "Retroalimentación inmediata",
                  "Niveles de dificultad progresivos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => scrollToSection("formulacion")}
                className="cta-button secondary"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Practicar Formulación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* GLOSARIO DE CONCEPTOS */}
      <section id="glosario" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 lg:ml-80">
          <div className="max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Glosario de Conceptos Clave</h2>
              <p className="text-lg text-gray-700">
                Definiciones rápidas y claras. Entiende cada término en menos de 10 páginas sin necesidad de leer un libro completo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { term: "Hibridación", def: "Combinación de orbitales atómicos para formar nuevos orbitales híbridos" },
                { term: "Electronegatividad", def: "Capacidad de un átomo para atraer electrones en un enlace químico" },
                { term: "Entalpía", def: "Contenido de calor de una sustancia a presión constante" },
                { term: "Catalizador", def: "Sustancia que acelera una reacción sin ser consumida" },
                { term: "Equilibrio Dinámico", def: "Estado donde las reacciones directa e inversa ocurren simultáneamente" },
                { term: "Oxidación", def: "Pérdida de electrones por parte de una sustancia" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-blue-600 mb-2">{item.term}</h4>
                  <p className="text-gray-700 text-sm">{item.def}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DIVISORA */}
      <div className="section-divider"></div>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Dominar la Química?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Únete a miles de estudiantes que ya están preparándose para la EBAU con nuestros recursos gratuitos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("formulacion")}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Comenzar Ahora
            </Button>
            <Button 
              onClick={() => scrollToSection("bloques")}
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Ver Todos los Recursos
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Química Bachillerato</h4>
              <p className="text-sm">Tu guía completa para dominar la química y triunfar en la EBAU.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Bloques Temáticos</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <button onClick={() => scrollToSection("formulacion")} className="hover:text-white transition">
                    Estructura Atómica
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("leyes")} className="hover:text-white transition">
                    Termoquímica
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("ebau")} className="hover:text-white transition">
                    Equilibrio Químico
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Recursos</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <button onClick={() => scrollToSection("recursos")} className="hover:text-white transition">
                    Apuntes PDF
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("laboratorio")} className="hover:text-white transition">
                    Laboratorio Virtual
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("ebau")} className="hover:text-white transition">
                    Exámenes Resueltos
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Química Bachillerato. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
