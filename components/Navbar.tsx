type NavbarProps = {
  nombre: string;
  contacto: string;
};

export default function Navbar({
  nombre,
  contacto,
}: NavbarProps) {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <div>
          <h2 className="text-xl font-bold">
            {nombre}
          </h2>
        </div>

        <ul className="flex items-center gap-6 text-sm text-slate-300">
          <li>
            <a href="#" className="transition hover:text-white">
              Inicio
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-white">
              Sobre nosotros
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-white">
              Servicios
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-white">
              {contacto}
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}