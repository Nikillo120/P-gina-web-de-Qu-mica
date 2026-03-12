import { BookOpen, Lightbulb } from "lucide-react";

/**
 * DISEÑO: Minimalismo Científico Moderno
 * Componentes para mostrar contenido detallado de temas
 */

export function FormulacionInorganicaSection() {
  return (
    <section id="formulacion" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:ml-80">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              Formulación Inorgánica
            </h2>
          </div>

          {/* Tema 1.1 */}
          <div className="mb-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1.1. La Tabla Periódica
            </h3>
            <p className="text-gray-700 mb-4">
              La tabla periódica organiza los elementos según su número atómico
              y nos permite predecir su comportamiento químico.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">Metales:</span>
                <span className="text-gray-700">
                  Tendencia a ceder electrones (números de oxidación positivos)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">No metales:</span>
                <span className="text-gray-700">
                  Tendencia a ganar electrones (números de oxidación negativos)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">Gases nobles:</span>
                <span className="text-gray-700">
                  Grupo 18, número de oxidación 0 (muy estables)
                </span>
              </li>
            </ul>
          </div>

          {/* Tema 1.2 */}
          <div className="mb-12 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1.2. Valencia vs. Número de Oxidación
            </h3>
            <p className="text-gray-700 mb-4">
              Aunque parecen lo mismo, tienen diferencias importantes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-green-600 mb-2">
                  Número de Oxidación
                </h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Indica electrones ganados o cedidos</li>
                  <li>• Tiene signo (+ o -)</li>
                  <li>• Ejemplo: H en H₂O = +1</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-green-600 mb-2">Valencia</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Electrones intercambiados</li>
                  <li>• Sin signo (valor absoluto)</li>
                  <li>• Ejemplo: H en H₂O = 1</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tema 1.3 */}
          <div className="mb-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1.3. Valencias Fijas (Imprescindibles)
            </h3>
            <p className="text-gray-700 mb-4">
              Estos elementos siempre tienen la misma valencia:
            </p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-orange-600">Valencia 1:</p>
                <p className="text-gray-700 text-sm">
                  Grupo 1 (Li, Na, K, Rb, Cs, Fr) y Plata (Ag)
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-orange-600">Valencia 2:</p>
                <p className="text-gray-700 text-sm">
                  Grupo 2 (Be, Mg, Ca, Sr, Ba, Ra), Zinc (Zn), Cadmio (Cd)
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-orange-600">Valencia 3:</p>
                <p className="text-gray-700 text-sm">
                  Boro (B), Aluminio (Al), Escandio (Sc)
                </p>
              </div>
            </div>
          </div>

          {/* Compuestos Binarios */}
          <div className="mb-12 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2. Compuestos Binarios
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-purple-600 mb-2">
                  2.1. Reglas Generales
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>
                    <strong>Escritura:</strong> Primero el elemento menos
                    electronegativo
                  </li>
                  <li>
                    <strong>Intercambio:</strong> Los números de oxidación se
                    intercambian como subíndices
                  </li>
                  <li>
                    <strong>Simplificación:</strong> Si son divisibles por el
                    mismo número, simplificar
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-purple-600 mb-2">
                  2.2. Tipos de Compuestos
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-gray-900">
                      Óxidos (con Oxígeno)
                    </p>
                    <p className="text-sm text-gray-700">
                      El oxígeno actúa con -2. Ej: Fe₂O₃ (Óxido de hierro III)
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-gray-900">
                      Hidruros (con Hidrógeno)
                    </p>
                    <p className="text-sm text-gray-700">
                      Metálicos: H con -1. No metálicos: H con +1
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="font-semibold text-gray-900">
                      Sales Binarias
                    </p>
                    <p className="text-sm text-gray-700">
                      Metal + No metal. Ej: NaCl (Cloruro de sodio)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compuestos Ternarios */}
          <div className="mb-12 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3. Compuestos Ternarios
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-red-600 mb-2">
                  3.1. Hidróxidos (Bases)
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Se forman combinando un metal con el grupo hidroxilo (OH)
                </p>
                <div className="bg-white p-3 rounded text-sm text-gray-700">
                  <p>
                    <strong>Fórmula:</strong> M(OH)ₙ
                  </p>
                  <p>
                    <strong>Ejemplo:</strong> NaOH (Hidróxido de sodio)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-red-600 mb-2">3.2. Oxoácidos</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Combinaciones de H, un no metal y O
                </p>
                <div className="bg-white p-3 rounded text-sm text-gray-700">
                  <p>
                    <strong>Regla:</strong> -oso (menor oxidación), -ico (mayor
                    oxidación)
                  </p>
                  <p>
                    <strong>Ejemplo:</strong> H₂SO₄ (Ácido Sulfúrico)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-red-600 mb-2">
                  3.3. Oxisales (Sales Ternarias)
                </h4>
                <p className="text-gray-700 text-sm mb-3">
                  Se forman reemplazando H en un oxoácido por un metal
                </p>
                <div className="bg-white p-3 rounded text-sm text-gray-700">
                  <p>
                    <strong>Regla:</strong> -oso → -ito (Oso chiquito 🐻)
                  </p>
                  <p>
                    <strong>Regla:</strong> -ico → -ato (Pico de pato 🦆)
                  </p>
                  <p>
                    <strong>Ejemplo:</strong> CaCO₃ (Carbonato de calcio)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeyesFundamentalesSection() {
  return (
    <section id="leyes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:ml-80">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              Leyes Fundamentales y Gases
            </h2>
          </div>

          {/* Tema 2.1 */}
          <div className="mb-12 p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2.1. ¿Qué es un Mol?
            </h3>
            <p className="text-gray-700 mb-4">
              El mol es la unidad fundamental en química para medir la cantidad
              de sustancia. Es el puente entre el mundo microscópico (átomos y
              moléculas) y el macroscópico (gramos).
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <p className="font-bold text-gray-900 mb-2">
                Número de Avogadro (Nₐ)
              </p>
              <p className="text-gray-700">
                1 mol de cualquier sustancia contiene{" "}
                <strong>6.022 × 10²³</strong> entidades elementales (átomos,
                moléculas o iones)
              </p>
            </div>
          </div>

          {/* Tema 2.2 */}
          <div className="mb-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2.2. Tipos de Masa
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-blue-600 mb-2">Masa Atómica (Mₐ)</p>
                <p className="text-gray-700 text-sm">
                  La masa de un átomo medida en unidades de masa atómica (u).
                  Aparece en la tabla periódica.
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-blue-600 mb-2">Masa Molecular (Mₘ)</p>
                <p className="text-gray-700 text-sm">
                  Es la suma de las masas atómicas de todos los átomos de una
                  molécula. También se mide en u.
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-bold text-blue-600 mb-2">Masa Molar (M)</p>
                <p className="text-gray-700 text-sm">
                  Es la masa de un mol de sustancia. Se expresa en g/mol. Su
                  valor numérico coincide con la masa atómica o molecular.
                </p>
              </div>
            </div>
          </div>

          {/* La Fórmula Maestra */}
          <div className="mb-12 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2.3. La Fórmula Maestra ✏️
            </h3>
            <p className="text-gray-700 mb-4">
              Esta es la fórmula más importante para resolver ejercicios de este
              bloque:
            </p>
            <div className="bg-white p-6 rounded border-2 border-yellow-400 text-center mb-4">
              <p className="text-3xl font-bold text-yellow-600">n = m / M</p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>n:</strong> número de moles (mol)
              </p>
              <p>
                <strong>m:</strong> masa de la muestra (g)
              </p>
              <p>
                <strong>M:</strong> masa molar de la sustancia (g/mol)
              </p>
            </div>
          </div>

          {/* Leyes de Gases */}
          <div className="mb-12 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3. Las Leyes de los Gases Ideales
            </h3>

            <div className="mb-6 bg-white p-4 rounded">
              <h4 className="font-bold text-purple-600 mb-3">
                3.1. Variables de Estado
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Para estudiar un gas, debemos medir cuatro magnitudes:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Presión (P):</strong> En atmósferas (atm) o mmHg
                </li>
                <li>
                  <strong>Volumen (V):</strong> En litros (L)
                </li>
                <li>
                  <strong>Temperatura (T):</strong> En Kelvin (K = °C + 273)
                </li>
                <li>
                  <strong>Cantidad (n):</strong> En moles (mol)
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded">
              <h4 className="font-bold text-purple-600 mb-3">
                3.2. Las Tres Leyes Experimentales
              </h4>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-purple-300 pl-3">
                  <p className="font-semibold text-gray-900">
                    Ley de Boyle (P-V)
                  </p>
                  <p className="text-gray-700">
                    A temperatura constante: P₁V₁ = P₂V₂
                  </p>
                </div>
                <div className="border-l-4 border-purple-300 pl-3">
                  <p className="font-semibold text-gray-900">
                    Ley de Charles (V-T)
                  </p>
                  <p className="text-gray-700">
                    A presión constante: V₁/T₁ = V₂/T₂
                  </p>
                </div>
                <div className="border-l-4 border-purple-300 pl-3">
                  <p className="font-semibold text-gray-900">
                    Ley de Gay-Lussac (P-T)
                  </p>
                  <p className="text-gray-700">
                    A volumen constante: P₁/T₁ = P₂/T₂
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ecuación General */}
          <div className="mb-12 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3.3. La Ecuación General de los Gases Ideales
            </h3>
            <p className="text-gray-700 mb-4">
              Combinando todas las leyes anteriores, obtenemos la fórmula que
              resuelve la mayoría de los problemas:
            </p>
            <div className="bg-white p-6 rounded border-2 border-indigo-400 text-center mb-4">
              <p className="text-3xl font-bold text-indigo-600">PV = nRT</p>
            </div>
            <p className="text-gray-700">
              Donde <strong>R</strong> es la constante de los gases:{" "}
              <strong>0.082 atm·L/(mol·K)</strong>
            </p>
          </div>

          {/* Leyes Ponderales */}
          <div className="mb-12 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              4. Leyes Ponderales de la Química
            </h3>

            <div className="space-y-6">
              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-orange-600 mb-2">
                  4.1. Ley de Lavoisier (Conservación de la Masa)
                </h4>
                <p className="text-gray-700 text-sm italic mb-2">
                  "La materia ni se crea ni se destruye, solo se transforma"
                </p>
                <p className="text-gray-700 text-sm">
                  En una reacción química, la suma de las masas de los reactivos
                  es igual a la suma de las masas de los productos.
                </p>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-orange-600 mb-2">
                  4.2. Ley de Proust (Proporciones Constantes)
                </h4>
                <p className="text-gray-700 text-sm">
                  Cuando dos o más elementos se combinan para formar un
                  determinado compuesto, lo hacen siempre en una relación de
                  masas constante.
                </p>
              </div>

              <div className="bg-white p-4 rounded">
                <h4 className="font-bold text-orange-600 mb-2">
                  4.3. Ley de Dalton (Proporciones Múltiples)
                </h4>
                <p className="text-gray-700 text-sm">
                  Si dos elementos se combinan para formar más de un compuesto,
                  las masas guardan entre sí una relación de números enteros
                  sencillos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
