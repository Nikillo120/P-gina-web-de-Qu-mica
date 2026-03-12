import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * DISEÑO: Minimalismo Científico Moderno
 * Navegación sticky con índice de contenidos y menú móvil
 */

interface NavLink {
  label: string;
  id: string;
  submenu?: NavLink[];
}

const navLinks: NavLink[] = [
  { label: "Inicio", id: "hero" },
  {
    label: "Bloques Temáticos",
    id: "bloques",
    submenu: [
      { label: "Enlace y Estructura", id: "enlace" },
      { label: "Termoquímica", id: "termoquimica" },
      { label: "Equilibrio", id: "equilibrio" },
      { label: "Ácido-Base", id: "acido-base" },
      { label: "Redox", id: "redox" },
      { label: "Orgánica", id: "organica" },
    ],
  },
  {
    label: "Contenidos",
    id: "contenidos",
    submenu: [
      { label: "Formulación Inorgánica", id: "formulacion" },
      { label: "Leyes Fundamentales", id: "leyes" },
      { label: "Gases Ideales", id: "gases" },
      { label: "Leyes Ponderales", id: "ponderales" },
    ],
  },
  { label: "EBAU", id: "ebau" },
  { label: "Recursos", id: "recursos" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setOpenSubmenu(null);
    }
  };

  return (
    <>
      {/* NAVBAR STICKY */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600">⚛️</span>
              <span className="text-lg font-bold text-gray-900 hidden sm:inline">
                Química Bachillerato
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.id} className="relative group">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* SUBMENU */}
                  {link.submenu && (
                    <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {link.submenu.map((sublink) => (
                        <button
                          key={sublink.id}
                          onClick={() => scrollToSection(sublink.id)}
                          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <button
                    onClick={() => {
                      if (link.submenu) {
                        setOpenSubmenu(
                          openSubmenu === link.id ? null : link.id
                        );
                      } else {
                        scrollToSection(link.id);
                      }
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors flex items-center justify-between"
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openSubmenu === link.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* MOBILE SUBMENU */}
                  {link.submenu && openSubmenu === link.id && (
                    <div className="bg-gray-50">
                      {link.submenu.map((sublink) => (
                        <button
                          key={sublink.id}
                          onClick={() => scrollToSection(sublink.id)}
                          className="w-full text-left px-8 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors text-sm"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* TABLE OF CONTENTS SIDEBAR - Desktop Only */}
      <div className="hidden lg:block fixed left-4 top-24 w-64 max-h-[calc(100vh-100px)] overflow-y-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Índice</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-left w-full"
                >
                  {link.label}
                </button>
                {link.submenu && (
                  <ul className="ml-4 mt-2 space-y-1 border-l-2 border-blue-200 pl-2">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.id}>
                        <button
                          onClick={() => scrollToSection(sublink.id)}
                          className="text-gray-600 hover:text-blue-600 hover:underline transition-colors text-left w-full text-xs"
                        >
                          {sublink.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
