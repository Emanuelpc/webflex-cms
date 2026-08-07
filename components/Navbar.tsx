"use client";

import { useState } from "react";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Galería", href: "#gallery" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#inicio"
          className="text-xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          WebFlex CMS
        </a>

        {/* Menú desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-xl md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}